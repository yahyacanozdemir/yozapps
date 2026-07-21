"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { projects, projectYears } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const TECH_COLORS: Record<string, string> = {
  iOS: "bg-sky-500/15 text-sky-500 border-sky-500/30",
  Swift: "bg-orange-500/15 text-orange-500 border-orange-500/30",
  SpriteKit: "bg-amber-500/15 text-amber-600 border-amber-500/30",
  UIKit: "bg-blue-500/15 text-blue-500 border-blue-500/30",
  Flutter: "bg-cyan-500/15 text-cyan-600 border-cyan-500/30",
  Dart: "bg-teal-500/15 text-teal-600 border-teal-500/30",
  Android: "bg-green-500/15 text-green-600 border-green-500/30",
  Java: "bg-red-500/15 text-red-500 border-red-500/30",
  AI: "bg-purple-500/15 text-purple-500 border-purple-500/30",
};

export default function ProjectsTimeline() {
  const { t, lang } = useLang();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dikey çizgi scroll ile çizilir
      gsap.fromTo(
        ".tl-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".tl-wrap",
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      // Dev yıl numaraları: yaklaşırken netleşir, kayar
      gsap.utils.toArray<HTMLElement>(".tl-year").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60, filter: "blur(10px)" },
          {
            opacity: 1, x: 0, filter: "blur(0px)", ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", end: "top 55%", scrub: 1 },
          }
        );
      });

      // Kartlar: sırayla yanlardan süzülür + hafif dönme
      gsap.utils.toArray<HTMLElement>(".tl-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 70, rotate: i % 2 === 0 ? -3 : 3, scale: 0.95 },
          {
            opacity: 1, y: 0, rotate: 0, scale: 1, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", end: "top 60%", scrub: 1 },
          }
        );
      });

      // Nokta işaretleri patlayarak gelir
      gsap.utils.toArray<HTMLElement>(".tl-dot").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0 },
          {
            scale: 1, ease: "back.out(3)",
            scrollTrigger: { trigger: el, start: "top 82%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="tl-wrap relative mx-auto max-w-5xl px-4 pb-24">
      {/* Dikey zaman çizgisi */}
      <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-border-c">
        <div className="tl-line absolute inset-0 origin-top bg-gradient-to-b from-accent via-accent-2 to-accent" />
      </div>

      {projectYears.map((year) => {
        const yearProjects = projects.filter((p) => p.year === year);
        return (
          <section key={year} className="relative pt-20">
            {/* Yıl başlığı */}
            <div className="relative mb-12 pl-16 sm:pl-0 sm:text-center">
              <span className="tl-dot absolute left-6 sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-5 w-5 place-items-center">
                <span className="h-5 w-5 rounded-full bg-accent shadow-[0_0_0_6px_var(--glow)]" />
              </span>
              <h2 className="tl-year inline-block font-display font-bold text-[clamp(3rem,9vw,6.5rem)] leading-none text-gradient select-none">
                {year}
              </h2>
              <span className="ml-4 align-super rounded-full border border-border-c bg-bg-elev px-3 py-1 text-xs font-bold text-fg-muted">
                {yearProjects.length} {t("projects.count")}
              </span>
            </div>

            {/* Proje kartları: masaüstünde zigzag */}
            <div className="space-y-10">
              {yearProjects.map((p, i) => {
                const card = (
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`shine relative overflow-hidden rounded-[2rem] border p-7 sm:p-8 bg-bg-elev ${
                      p.flagship
                        ? "border-accent/50 shadow-2xl shadow-accent/10"
                        : "border-border-c"
                    }`}
                  >
                    {p.flagship && (
                      <span className="absolute top-4 right-5 rounded-full bg-accent/15 border border-accent/40 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-accent">
                        Yozapps
                      </span>
                    )}
                    <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-fg-muted text-sm sm:text-base leading-relaxed">
                      {lang === "tr" ? p.tr : p.en}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                            TECH_COLORS[tech] ??
                            "bg-accent/10 text-accent border-accent/30"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {p.url && (
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                        {p.store
                          ? p.url.startsWith("/")
                            ? t("teaser.cta")
                            : t("projects.appstore")
                          : t("projects.github")}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M7 17 17 7m0 0H8m9 0v9" />
                        </svg>
                      </span>
                    )}
                  </motion.div>
                );

                return (
                  <div
                    key={p.name}
                    className={`tl-card relative pl-16 sm:pl-0 sm:w-[calc(50%-2.5rem)] ${
                      i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <span className="tl-dot absolute left-6 sm:hidden top-9 -translate-x-1/2 h-3 w-3 rounded-full bg-accent" />
                    {p.url ? (
                      p.url.startsWith("/") ? (
                        <Link href={p.url} className="block">{card}</Link>
                      ) : (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">{card}</a>
                      )
                    ) : (
                      card
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mt-24 text-center"
      >
        <h3 className="font-display font-bold text-2xl sm:text-4xl tracking-tight">
          {t("projects.cta.title")}
        </h3>
        <Link
          href="/contact/"
          className="shine mt-7 inline-flex items-center gap-2 rounded-2xl bg-accent text-bg px-8 py-4 font-semibold shadow-xl shadow-accent/25 hover:scale-[1.03] transition-transform"
        >
          {t("projects.cta.btn")}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14m0 0-6-6m6 6-6 6" /></svg>
        </Link>
      </motion.div>
    </div>
  );
}
