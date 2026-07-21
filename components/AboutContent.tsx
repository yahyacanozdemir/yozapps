"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function AboutContent() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-3xl px-4 pb-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-6 text-fg-muted text-base sm:text-xl leading-relaxed"
      >
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-border-c bg-bg-elev px-6 py-3.5"
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 border border-accent/30 font-display font-bold text-accent">
          Y
        </span>
        <span className="text-left">
          <span className="block text-[11px] font-medium text-fg-muted uppercase tracking-wide">
            {t("about.founder")}
          </span>
          <span className="font-semibold">Yahya Can Özdemir</span>
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-12 text-fg-muted text-sm sm:text-base"
      >
        {t("about.end")}
      </motion.p>
    </section>
  );
}
