"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

// Uygulama detay sayfası altı: geri dön + diğer uygulama
export default function DetailNav({
  nextHref,
  nextName,
  nextIcon,
}: {
  nextHref: string;
  nextName: string;
  nextIcon: string;
}) {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-3xl px-4 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <Link
          href="/apps/"
          className="inline-flex items-center gap-2 rounded-2xl border border-border-c bg-bg-elev px-6 py-3.5 font-semibold text-sm hover:border-accent transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5m0 0 6-6m-6 6 6 6" /></svg>
          {t("detail.back")}
        </Link>

        <Link
          href={nextHref}
          className="shine group inline-flex items-center gap-3 rounded-2xl border border-border-c bg-bg-elev px-6 py-3 font-semibold text-sm hover:border-accent transition-colors"
        >
          <Image
            src={nextIcon}
            alt={nextName}
            width={36}
            height={36}
            className="rounded-xl ring-1 ring-border-c"
          />
          <span className="text-left">
            <span className="block text-[11px] font-medium text-fg-muted">
              {t("detail.next")}
            </span>
            {nextName}
          </span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14m0 0-6-6m6 6-6 6" /></svg>
        </Link>
      </motion.div>
    </section>
  );
}
