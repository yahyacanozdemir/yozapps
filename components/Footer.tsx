"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <>
      <section id="about" className="mx-auto max-w-3xl px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight">
            {t("about.title")}
          </h2>
          <p className="mt-5 text-fg-muted text-base sm:text-xl leading-relaxed">
            {t("about.desc")}
          </p>
        </motion.div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-4 pb-24 text-center">
        <motion.a
          href="mailto:yahya.yz92@gmail.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="shine inline-block rounded-2xl border border-border-c bg-bg-elev px-8 py-4 font-semibold text-accent text-sm sm:text-lg"
        >
          yahya.yz92@gmail.com
        </motion.a>
      </section>

      <footer className="border-t border-border-c py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-fg-muted">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="font-display font-bold">
              <span className="text-gradient">yoz</span>apps
            </span>
          </span>
          <span>{t("footer.made")}</span>
        </div>
      </footer>
    </>
  );
}
