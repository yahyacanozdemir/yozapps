"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

const KEYWORDS = [
  "balance", "tilt", "escape", "arcade", "reflex", "physics",
  "relax", "one hand", "gyro", "casual", "skill", "levels",
];

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

export default function HolesShowcase() {
  const { t } = useLang();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ---- 1) Pinlenen giriş: HOLES harfleri açılır, telefon uçarak gelir ----
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".holes-intro",
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: true,
        },
      });

      introTl
        .fromTo(
          ".holes-letter",
          { yPercent: 120, opacity: 0, rotate: 8 },
          { yPercent: 0, opacity: 1, rotate: 0, stagger: 0.06, ease: "power3.out", duration: 0.5 }
        )
        .fromTo(
          ".holes-title",
          { letterSpacing: "0.02em" },
          { letterSpacing: "0.18em", ease: "none", duration: 1 },
          0.4
        )
        .fromTo(
          ".holes-tagline",
          { opacity: 0, y: 30, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 },
          0.5
        )
        .fromTo(
          ".holes-hero-phone",
          { yPercent: 90, scale: 1.5, rotate: -10, opacity: 0 },
          { yPercent: 0, scale: 1, rotate: 6, opacity: 1, ease: "power2.out", duration: 1 },
          0.35
        )
        .to(
          ".holes-title",
          { scale: 0.82, opacity: 0.15, ease: "power1.in", duration: 0.6 },
          1.1
        )
        .to(
          ".holes-hero-phone",
          { yPercent: -18, scale: 1.06, rotate: 0, ease: "none", duration: 0.7 },
          1.05
        );

      // ---- 2) Üç kelimelik manifesto: Eğ. Dengede tut. Kaç. ----
      gsap.utils.toArray<HTMLElement>(".holes-word").forEach((el, i) => {
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

      // ---- 3) Özellik satırları: telefonlar yanlardan süzülür ----
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

      // ---- 4) Yatay galeri: bölüm pinlenir, kartlar yatay akar ----
      const track = document.querySelector<HTMLElement>(".gallery-track");
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
        // Kartlar akarken hafif dalga: rotate/scale
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

  const features = [
    { img: "/holes/screen-2.png", title: t("holes.f1.title"), desc: t("holes.f1.desc") },
    { img: "/holes/screen-3.png", title: t("holes.f2.title"), desc: t("holes.f2.desc") },
    { img: "/holes/screen-4.png", title: t("holes.f3.title"), desc: t("holes.f3.desc") },
    { img: "/holes/screen-5.png", title: t("holes.f4.title"), desc: t("holes.f4.desc") },
  ];

  return (
    <div ref={root} id="apps" className="relative">
      {/* ---- Pinlenen giriş ---- */}
      <section className="holes-intro relative h-svh overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_65%)]" />

        <span className="relative z-10 mb-4 rounded-full border border-border-c bg-bg-elev/70 backdrop-blur px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-accent">
          {t("holes.badge")}
        </span>

        <h2 className="holes-title relative z-10 font-display font-bold text-[clamp(3.5rem,14vw,11rem)] leading-none select-none">
          {"HOLES".split("").map((ch, i) => (
            <span key={i} className="holes-letter inline-block">
              {ch}
            </span>
          ))}
        </h2>

        <p className="holes-tagline relative z-10 mt-2 text-fg-muted tracking-[0.35em] uppercase text-sm sm:text-base">
          {t("holes.tagline")}
        </p>

        <div className="holes-hero-phone relative z-10 mt-8 w-[210px] sm:w-[250px]">
          <Image
            src="/holes/screen-1.png"
            alt="Holes gameplay"
            width={850}
            height={1840}
            priority
            className="rounded-[2rem] shadow-2xl shadow-black/40 ring-1 ring-border-c"
          />
        </div>
      </section>

      {/* ---- Manifesto ---- */}
      <section className="mx-auto max-w-4xl px-4 py-28 sm:py-40 text-center">
        <div className="font-display font-bold leading-tight text-[clamp(2.4rem,7vw,5.5rem)]">
          <p className="holes-word">{t("holes.headline1")}</p>
          <p className="holes-word text-gradient">{t("holes.headline2")}</p>
          <p className="holes-word">{t("holes.headline3")}</p>
        </div>
        <p className="holes-word mt-10 text-fg-muted text-lg sm:text-2xl leading-relaxed max-w-2xl mx-auto">
          {t("holes.intro")}
        </p>
        <p className="holes-word mt-5 text-fg-muted/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {t("holes.desc")}
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
            <div className="feature-img mx-auto w-[220px] sm:w-[280px] [perspective:1000px]">
              <Image
                src={f.img}
                alt={f.title}
                width={850}
                height={1840}
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
            {t("holes.gallery.title")}
          </h3>
          <div className="mx-auto mt-5 h-1 w-48 rounded-full bg-border-c overflow-hidden">
            <div className="gallery-progress h-full w-full origin-left scale-x-0 bg-accent" />
          </div>
        </div>

        <div className="gallery-track absolute top-1/2 -translate-y-1/2 flex gap-8 sm:gap-12 pl-[12vw] pr-[30vw] pt-16 will-change-transform">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.04, rotate: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="gallery-card shrink-0 w-[clamp(170px,30vh,290px)]"
            >
              <Image
                src={`/holes/screen-${n}.png`}
                alt={`Holes screenshot ${n}`}
                width={850}
                height={1840}
                className="rounded-[2rem] shadow-2xl shadow-black/30 ring-1 ring-border-c"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- İstatistikler ---- */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: 50, s: "+", label: t("holes.stat1") },
            { v: 500, s: "+", label: t("holes.stat2") },
            { v: 5, s: "", label: t("holes.stat3") },
            { v: 100, s: "%", label: t("holes.stat4") },
          ].map((st) => (
            <div
              key={st.label}
              className="shine rounded-3xl border border-border-c bg-bg-elev p-6 sm:p-8 text-center"
            >
              <div className="font-display font-bold text-4xl sm:text-5xl text-gradient">
                <Counter to={st.v} suffix={st.s} />
              </div>
              <div className="mt-2 text-fg-muted text-sm sm:text-base">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Anahtar kelime bandı ---- */}
      <div className="relative py-6 border-y border-border-c overflow-hidden -rotate-1">
        <div className="marquee">
          {[...KEYWORDS, ...KEYWORDS].map((k, i) => (
            <span
              key={i}
              className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-fg-muted/50"
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
            src="/holes/icon.png"
            alt="Holes icon"
            width={88}
            height={88}
            className="mx-auto rounded-[1.4rem] shadow-xl shadow-accent/25 ring-1 ring-border-c"
          />
          <h3 className="mt-6 font-display font-bold text-2xl sm:text-4xl">
            Holes: {t("holes.tagline")}
          </h3>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-accent font-semibold text-sm sm:text-base">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            {t("holes.status")}
          </p>
          <p className="mt-6 text-fg-muted text-xs">{t("holes.copyright")}</p>
        </motion.div>
      </section>
    </div>
  );
}
