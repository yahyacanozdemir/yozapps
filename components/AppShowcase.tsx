"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLang, type DictKey } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export interface ShowcaseConfig {
  id: string;
  prefix: "holes" | "safeoto";
  letters: string; // pinli girişte harf harf açılan isim
  icon: string;
  introPhone: string;
  featureImages: [string, string, string, string];
  gallery: string[];
  keywords: string[];
  stats?: { v: number; s: string; labelKey: DictKey }[];
  storeUrl?: string; // varsa indirme butonu, yoksa "yakında" rozeti
  htmlId?: string;
}

// Sayaç: görünür olunca hedefe sayar
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = Math.round(obj.v) + suffix;
      },
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function AppShowcase({ config }: { config: ShowcaseConfig }) {
  const { t } = useLang();
  const root = useRef<HTMLDivElement>(null);
  const p = config.prefix;

  useEffect(() => {
    const rootEl = root.current;
    if (!rootEl) return;

    const ctx = gsap.context(() => {
      // ---- 1) Pinlenen giriş: harfler açılır, telefon uçarak gelir ----
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".app-intro",
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: true,
        },
      });

      introTl
        .fromTo(
          ".app-letter",
          { yPercent: 120, opacity: 0, rotate: 8 },
          { yPercent: 0, opacity: 1, rotate: 0, stagger: 0.06, ease: "power3.out", duration: 0.5 }
        )
        .fromTo(
          ".app-title",
          { letterSpacing: "0.02em" },
          { letterSpacing: "0.14em", ease: "none", duration: 1 },
          0.4
        )
        .fromTo(
          ".app-tagline",
          { opacity: 0, y: 30, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 },
          0.5
        )
        .fromTo(
          ".app-hero-phone",
          { yPercent: 90, scale: 1.5, rotate: -10, opacity: 0 },
          { yPercent: 0, scale: 1, rotate: 6, opacity: 1, ease: "power2.out", duration: 1 },
          0.35
        )
        .to(
          ".app-title",
          { scale: 0.82, opacity: 0.15, ease: "power1.in", duration: 0.6 },
          1.1
        )
        .to(
          ".app-hero-phone",
          { yPercent: -18, scale: 1.06, rotate: 0, ease: "none", duration: 0.7 },
          1.05
        );

      // ---- 2) Manifesto kelimeleri ----
      gsap.utils.toArray<HTMLElement>(".app-word").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.08, scale: 0.94, filter: "blur(6px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              end: "top 45%",
              scrub: true,
            },
          }
        );
      });

      // ---- 3) Özellik satırları ----
      gsap.utils.toArray<HTMLElement>(".feature-row").forEach((row, i) => {
        const fromLeft = i % 2 === 0;
        const img = row.querySelector(".feature-img");
        const txt = row.querySelector(".feature-txt");
        gsap.fromTo(
          img,
          { x: fromLeft ? -140 : 140, rotate: fromLeft ? -12 : 12, opacity: 0 },
          {
            x: 0, rotate: fromLeft ? -3 : 3, opacity: 1, ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 78%", end: "top 35%", scrub: 1 },
          }
        );
        gsap.fromTo(
          txt,
          { y: 60, opacity: 0, filter: "blur(6px)" },
          {
            y: 0, opacity: 1, filter: "blur(0px)", ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 72%", end: "top 40%", scrub: 1 },
          }
        );
      });

      // ---- 4) Yatay galeri ----
      const track = rootEl.querySelector<HTMLElement>(".gallery-track");
      if (track) {
        const scrollAmount = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -scrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-pin",
            start: "top top",
            end: () => "+=" + scrollAmount(),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
        gsap.to(".gallery-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-pin",
            start: "top top",
            end: () => "+=" + scrollAmount(),
            scrub: true,
          },
        });
        gsap.utils.toArray<HTMLElement>(".gallery-card").forEach((card, i) => {
          gsap.fromTo(
            card,
            { rotate: i % 2 === 0 ? 4 : -4, scale: 0.92 },
            {
              rotate: 0, scale: 1, ease: "none",
              scrollTrigger: {
                trigger: ".gallery-pin",
                start: "top top",
                end: () => "+=" + scrollAmount(),
                scrub: 1.5,
              },
            }
          );
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const features = config.featureImages.map((img, i) => ({
    img,
    title: t(`${p}.f${i + 1}.title` as DictKey),
    desc: t(`${p}.f${i + 1}.desc` as DictKey),
  }));

  return (
    <div ref={root} id={config.htmlId} className="relative">
      {/* ---- Pinlenen giriş ---- */}
      <section className="app-intro relative h-svh overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_65%)]" />

        <span className="relative z-10 mb-4 rounded-full border border-border-c bg-bg-elev/70 backdrop-blur px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-accent">
          {t(`${p}.badge` as DictKey)}
        </span>

        <h2 className="app-title relative z-10 font-display font-bold text-[clamp(2.6rem,11vw,9rem)] leading-none select-none whitespace-nowrap">
          {config.letters.split("").map((ch, i) => (
            <span key={i} className="app-letter inline-block">
              {ch === " " ? " " : ch}
            </span>
          ))}
        </h2>

        <p className="app-tagline relative z-10 mt-2 text-fg-muted tracking-[0.35em] uppercase text-sm sm:text-base text-center">
          {t(`${p}.tagline` as DictKey)}
        </p>

        <div className="app-hero-phone relative z-10 mt-8 w-[210px] sm:w-[250px]">
          <Image
            src={config.introPhone}
            alt={config.letters}
            width={760}
            height={1650}
            className="rounded-[2rem] shadow-2xl shadow-black/40 ring-1 ring-border-c"
          />
        </div>
      </section>

      {/* ---- Manifesto ---- */}
      <section className="mx-auto max-w-4xl px-4 py-28 sm:py-40 text-center">
        <div className="font-display font-bold leading-tight text-[clamp(2.2rem,6.5vw,5rem)]">
          <p className="app-word">{t(`${p}.headline1` as DictKey)}</p>
          <p className="app-word text-gradient">{t(`${p}.headline2` as DictKey)}</p>
          <p className="app-word">{t(`${p}.headline3` as DictKey)}</p>
        </div>
        <p className="app-word mt-10 text-fg-muted text-lg sm:text-2xl leading-relaxed max-w-2xl mx-auto">
          {t(`${p}.intro` as DictKey)}
        </p>
        <p className="app-word mt-5 text-fg-muted/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {t(`${p}.desc` as DictKey)}
        </p>
      </section>

      {/* ---- Özellikler ---- */}
      <section className="mx-auto max-w-6xl px-4 space-y-28 sm:space-y-40 pb-32">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`feature-row grid items-center gap-10 sm:gap-16 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="feature-img mx-auto w-[220px] sm:w-[280px]">
              <Image
                src={f.img}
                alt={f.title}
                width={760}
                height={1650}
                className="rounded-[2rem] shadow-2xl shadow-black/30 ring-1 ring-border-c"
              />
            </div>
            <div className="feature-txt text-center md:text-left">
              <h3 className="font-display font-bold text-3xl sm:text-5xl tracking-tight">
                {f.title}
              </h3>
              <p className="mt-5 text-fg-muted text-base sm:text-xl leading-relaxed">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ---- Yatay galeri (pinli) ---- */}
      <section className="gallery-pin relative h-svh overflow-hidden">
        <div className="absolute top-10 sm:top-14 inset-x-0 text-center z-10 px-4">
          <h3 className="font-display font-bold text-3xl sm:text-5xl">
            {t("gallery.title")}
          </h3>
          <div className="mx-auto mt-5 h-1 w-48 rounded-full bg-border-c overflow-hidden">
            <div className="gallery-progress h-full w-full origin-left scale-x-0 bg-accent" />
          </div>
        </div>

        <div className="gallery-track absolute top-[54%] -translate-y-1/2 flex gap-8 sm:gap-12 pl-[12vw] pr-[30vw] pt-16 will-change-transform">
          {config.gallery.map((src, i) => (
            <motion.div
              key={src}
              whileHover={{ scale: 1.04, rotate: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="gallery-card shrink-0 w-[clamp(170px,30vh,290px)]"
            >
              <Image
                src={src}
                alt={`${config.letters} screenshot ${i + 1}`}
                width={760}
                height={1650}
                className="rounded-[2rem] shadow-2xl shadow-black/30 ring-1 ring-border-c"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- İstatistikler (opsiyonel) ---- */}
      {config.stats && (
        <section className="mx-auto max-w-5xl px-4 py-24 sm:py-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {config.stats.map((st) => (
              <div
                key={st.labelKey}
                className="shine rounded-3xl border border-border-c bg-bg-elev p-6 sm:p-8 text-center"
              >
                <div className="font-display font-bold text-4xl sm:text-5xl text-gradient">
                  <Counter to={st.v} suffix={st.s} />
                </div>
                <div className="mt-2 text-fg-muted text-sm sm:text-base">
                  {t(st.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---- Anahtar kelime bandı ---- */}
      <div className="relative py-6 border-y border-border-c overflow-hidden -rotate-1 my-10">
        <div className="marquee">
          {[...config.keywords, ...config.keywords].map((k, i) => (
            <span
              key={i}
              className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-fg-muted/50 whitespace-nowrap"
            >
              {k} <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---- Durum / CTA ---- */}
      <section className="mx-auto max-w-3xl px-4 py-24 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="shine rounded-[2.5rem] border border-border-c bg-bg-elev p-10 sm:p-14"
        >
          <Image
            src={config.icon}
            alt={`${config.letters} icon`}
            width={88}
            height={88}
            className="mx-auto rounded-[1.4rem] shadow-xl shadow-accent/25 ring-1 ring-border-c"
          />
          <h3 className="mt-6 font-display font-bold text-2xl sm:text-4xl">
            {config.letters}: {t(`${p}.tagline` as DictKey)}
          </h3>

          {config.storeUrl ? (
            <motion.a
              href={config.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-accent text-bg px-7 py-3.5 font-semibold text-sm sm:text-base shadow-xl shadow-accent/25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.98-.2 1.92-.9 3.05-.82 1.79.14 3.02.86 3.75 2.17-3.36 2.06-2.56 6.57.51 7.81-.62 1.42-1.4 2.82-2.39 3.01ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
              </svg>
              {t(`${p}.download` as DictKey)}
            </motion.a>
          ) : (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-accent font-semibold text-sm sm:text-base">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              {t(`${p}.status` as DictKey)}
            </p>
          )}

          <p className="mt-6 text-fg-muted text-xs">{t("app.copyright")}</p>
        </motion.div>
      </section>
    </div>
  );
}
