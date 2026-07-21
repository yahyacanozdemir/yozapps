"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLang } from "@/lib/i18n";

// 3D eğilen sürpriz kart
function MysteryCard({ index }: { index: number }) {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [12, -12]), {
    stiffness: 180,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-12, 12]), {
    stiffness: 180,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: index === 0 ? -4 : 4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="[perspective:900px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="shine group relative aspect-[3/4] w-full max-w-xs mx-auto rounded-[2rem] border border-border-c bg-bg-elev overflow-hidden cursor-pointer"
      >
        {/* Nokta deseni */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(var(--fg)_1px,transparent_1px)] [background-size:18px_18px]" />
        {/* Alt ışıltı */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-accent/25 blur-3xl group-hover:bg-accent/40 transition-colors duration-500" />

        <div
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-5"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, index === 0 ? 6 : -6, 0] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.7,
            }}
            className="grid place-items-center w-24 h-24 rounded-[1.6rem] border border-border-c bg-bg shadow-xl"
          >
            <span className="font-display text-5xl font-bold text-gradient">
              ?
            </span>
          </motion.div>
          <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-accent text-xs font-bold tracking-widest uppercase">
            {t("soon.card")}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ComingSoon() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-5xl px-4 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight">
          {t("soon.title")}
        </h2>
        <p className="mt-4 text-fg-muted text-lg sm:text-xl">{t("soon.desc")}</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
        <MysteryCard index={0} />
        <MysteryCard index={1} />
      </div>
    </section>
  );
}
