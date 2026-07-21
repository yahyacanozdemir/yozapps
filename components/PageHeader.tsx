"use client";

import { motion } from "framer-motion";
import { useLang, type DictKey } from "@/lib/i18n";

// Alt sayfalar için animasyonlu başlık bloğu
export default function PageHeader({
  kickerKey,
  titleKey,
  descKey,
}: {
  kickerKey?: DictKey;
  titleKey: DictKey;
  descKey?: DictKey;
}) {
  const { t } = useLang();

  return (
    <div className="relative mx-auto max-w-4xl px-4 pt-36 pb-14 text-center overflow-visible">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,var(--glow),transparent_70%)] pointer-events-none" />
      {kickerKey && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative text-accent font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4"
        >
          {t(kickerKey)}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative font-display font-bold text-4xl sm:text-6xl tracking-tight"
      >
        {t(titleKey)}
      </motion.h1>
      {descKey && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="relative mt-5 text-fg-muted text-base sm:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          {t(descKey)}
        </motion.p>
      )}
    </div>
  );
}
