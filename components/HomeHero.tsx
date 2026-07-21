"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

function SplitWord({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", rotate: 6 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: delay + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

// Sayaç
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
      onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function HomeHero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const sy = useSpring(my, { stiffness: 60, damping: 15 });
  const orb1X = useTransform(sx, (v) => v * -50);
  const orb1Y = useTransform(sy, (v) => v * -50);
  const orb2X = useTransform(sx, (v) => v * 40);
  const orb2Y = useTransform(sy, (v) => v * 40);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const stats = [
    { v: 2, s: "", label: t("home.stat1") },
    { v: 12, s: "+", label: t("home.stat2") },
    { v: 6, s: "+", label: t("home.stat3") },
    { v: 2, s: "", label: t("home.stat4") },
  ];

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Işık küreleri + ızgara deseni */}
      <motion.div style={{ x: orb1X, y: orb1Y }} className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-accent-soft/30 blur-3xl" />
      <motion.div style={{ x: orb2X, y: orb2Y }} className="absolute -bottom-40 -right-32 w-[38rem] h-[38rem] rounded-full bg-accent-2/20 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />

      <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-accent font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-6"
        >
          {t("home.kicker")}
        </motion.p>

        <h1 className="font-display font-bold tracking-tight leading-[1.02] text-[clamp(2.6rem,8vw,6.2rem)]">
          <SplitWord text={t("home.h1a")} delay={0.25} />{" "}
          <SplitWord text={t("home.h1b")} delay={0.5} className="text-gradient" />{" "}
          <SplitWord text={t("home.h1c")} delay={0.75} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-7 text-fg-muted text-base sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {t("home.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/apps/"
            className="shine inline-flex items-center gap-2 rounded-2xl bg-accent text-bg px-7 py-3.5 font-semibold text-sm sm:text-base shadow-xl shadow-accent/25 hover:scale-[1.03] active:scale-95 transition-transform"
          >
            {t("home.cta1")}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14m0 0-6-6m6 6-6 6" /></svg>
          </Link>
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 rounded-2xl border border-border-c bg-bg-elev px-7 py-3.5 font-semibold text-sm sm:text-base hover:border-accent hover:scale-[1.03] active:scale-95 transition-all"
          >
            {t("home.cta2")}
          </Link>
        </motion.div>

        {/* Kurumsal istatistik şeridi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-3xl border border-border-c bg-border-c overflow-hidden max-w-3xl mx-auto"
        >
          {stats.map((st) => (
            <div key={st.label} className="bg-bg-elev px-6 py-6 text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl text-gradient">
                <Counter to={st.v} suffix={st.s} />
              </div>
              <div className="mt-1 text-fg-muted text-xs sm:text-sm">{st.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-muted"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">{t("home.scroll")}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-border-c flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
