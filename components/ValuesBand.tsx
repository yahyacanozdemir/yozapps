"use client";

import { motion } from "framer-motion";
import { useLang, type DictKey } from "@/lib/i18n";

const VALUES: { letter: string; tKey: DictKey; dKey: DictKey }[] = [
  { letter: "Y", tKey: "values.y.t", dKey: "values.y.d" },
  { letter: "O", tKey: "values.o.t", dKey: "values.o.d" },
  { letter: "Z", tKey: "values.z.t", dKey: "values.z.d" },
];

export default function ValuesBand() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight">
          {t("home.values.title")}
        </h2>
        <p className="mt-4 text-fg-muted text-lg sm:text-xl">
          {t("home.values.desc")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {VALUES.map((v, i) => (
          <motion.div
            key={v.letter}
            initial={{ opacity: 0, y: 50, rotate: i === 1 ? 0 : i === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="shine relative overflow-hidden rounded-[2rem] border border-border-c bg-bg-elev p-8"
          >
            <span className="absolute -top-6 -right-2 font-display font-bold text-[7rem] leading-none text-accent/10 select-none">
              {v.letter}
            </span>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 border border-accent/30 font-display font-bold text-2xl text-accent">
              {v.letter}
            </span>
            <h3 className="mt-5 font-display font-bold text-xl sm:text-2xl">
              {t(v.tKey)}
            </h3>
            <p className="mt-3 text-fg-muted text-sm sm:text-base leading-relaxed">
              {t(v.dKey)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Slogan bandı */}
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 text-center font-display font-bold text-2xl sm:text-4xl tracking-tight"
      >
        <span className="text-gradient">{t("slogan")}</span>
      </motion.p>
    </section>
  );
}
