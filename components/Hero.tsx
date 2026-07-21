"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useLang } from "@/lib/i18n";

// Harf harf açılan başlık
function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", rotate: 6 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const sy = useSpring(my, { stiffness: 60, damping: 15 });
  const iconX = useTransform(sx, (v) => v * 30);
  const iconY = useTransform(sy, (v) => v * 30);
  const orbX = useTransform(sx, (v) => v * -50);
  const orbY = useTransform(sy, (v) => v * -50);
  const iconRotX = useTransform(sy, (v) => v * -14);
  const iconRotY = useTransform(sx, (v) => v * 14);

  // Scroll'da hero soluklaşır ve küçülür (Apple usulü)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-svh flex items-center justify-center overflow-hidden"
    >
      {/* Arka plan ışık küreleri */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-accent-soft/30 blur-3xl"
      />
      <motion.div
        style={{ x: iconX, y: iconY }}
        className="absolute -bottom-40 -right-32 w-[38rem] h-[38rem] rounded-full bg-accent-2/20 blur-3xl"
      />

      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="relative z-10 mx-auto max-w-5xl px-4 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-accent font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-6"
        >
          {t("hero.kicker")}
        </motion.p>

        <h1 className="font-display font-bold tracking-tight leading-[0.98] text-[clamp(2.8rem,9vw,7rem)]">
          <SplitWords text={t("hero.title1")} delay={0.25} />
          <br />
          <span className="text-gradient">
            <SplitWords text={t("hero.title2")} delay={0.55} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-6 text-fg-muted text-base sm:text-xl max-w-xl mx-auto"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Uçan Holes ikonu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: iconX, y: iconY, rotateX: iconRotX, rotateY: iconRotY }}
          className="mt-10 inline-block [perspective:800px]"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/holes/icon.png"
              alt="Holes app icon"
              width={112}
              height={112}
              priority
              className="rounded-[1.75rem] shadow-2xl shadow-accent/30 ring-1 ring-border-c"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="mt-10"
        >
          <a
            href="#apps"
            className="shine inline-flex items-center gap-2 rounded-2xl bg-accent text-bg px-7 py-3.5 font-semibold text-sm sm:text-base shadow-xl shadow-accent/25 hover:scale-[1.03] active:scale-95 transition-transform"
          >
            {t("hero.cta")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14m0 0-6-6m6 6 6-6" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll göstergesi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-muted"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">
          {t("hero.scroll")}
        </span>
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
