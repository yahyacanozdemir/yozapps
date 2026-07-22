"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang, type DictKey } from "@/lib/i18n";

interface Teaser {
  href: string;
  storeUrl: string;
  icon: string;
  visual: string;
  name: string;
  taglineKey: DictKey;
  lineKey: DictKey;
  badgeKey: DictKey;
}

const TEASERS: Teaser[] = [
  {
    href: "/apps/holes/",
    storeUrl: "https://apps.apple.com/tr/developer/yahya-can-ozdemir/id1895136077",
    icon: "/holes/icon.png",
    visual: "/holes/screen-1.png",
    name: "Holes",
    taglineKey: "holes.tagline",
    lineKey: "teaser.holes.line",
    badgeKey: "holes.status",
  },
  {
    href: "/apps/safeoto/",
    storeUrl: "https://apps.apple.com/tr/app/safe-oto/id6763045878",
    icon: "/safeoto/icon.jpg",
    visual: "/safeoto/store/cover.jpg",
    name: "Safe Oto",
    taglineKey: "safeoto.tagline",
    lineKey: "teaser.safeoto.line",
    badgeKey: "safeoto.status",
  },
];

function AppleLogo() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.98-.2 1.92-.9 3.05-.82 1.79.14 3.02.86 3.75 2.17-3.36 2.06-2.56 6.57.51 7.81-.62 1.42-1.4 2.82-2.39 3.01ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  );
}

function TeaserCard({ tz, i }: { tz: Teaser; i: number }) {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="shine group relative overflow-hidden rounded-[2.5rem] border border-border-c bg-bg-elev"
    >
      {/* Kartın tamamı detay sayfasına götürür */}
      <Link
        href={tz.href}
        aria-label={`${tz.name} — ${t("teaser.cta")}`}
        className="absolute inset-0 z-10"
      />

      <div className="grid sm:grid-cols-2 items-center">
        <div className="p-8 sm:p-10">
          <Image
            src={tz.icon}
            alt={`${tz.name} icon`}
            width={64}
            height={64}
            className="rounded-2xl shadow-lg ring-1 ring-border-c"
          />
          <h3 className="mt-5 font-display font-bold text-2xl sm:text-3xl tracking-tight">
            {tz.name}
          </h3>
          <p className="mt-1 text-accent text-xs font-bold tracking-[0.2em] uppercase">
            {t(tz.taglineKey)}
          </p>
          <p className="mt-4 text-fg-muted text-sm sm:text-base leading-relaxed">
            {t(tz.lineKey)}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 font-semibold text-accent text-sm sm:text-base">
              {t("teaser.cta")}
              <svg
                width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                className="transition-transform group-hover:translate-x-1.5"
              >
                <path d="M5 12h14m0 0-6-6m6 6-6 6" />
              </svg>
            </span>

            {/* App Store butonu: kart linkinin üzerinde ayrı tıklama alanı */}
            <a
              href={tz.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 inline-flex items-center gap-2 rounded-xl bg-fg text-bg px-4 py-2.5 text-sm font-semibold shadow-lg hover:scale-[1.04] active:scale-95 transition-transform"
            >
              <AppleLogo />
              App Store
            </a>
          </div>
        </div>

        {/* Görsel: hover'da yükselip hafif dönen telefon */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--glow),transparent_70%)]" />
          <div className="absolute left-1/2 top-10 -translate-x-1/2 w-40 sm:w-48 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:rotate-[3deg] rotate-[6deg]">
            <Image
              src={tz.visual}
              alt={`${tz.name} screenshot`}
              width={760}
              height={1650}
              className="rounded-[1.6rem] shadow-2xl shadow-black/40 ring-1 ring-border-c"
            />
          </div>
        </div>
      </div>

      <span className="absolute top-5 right-6 rounded-full border border-accent/40 bg-accent/10 backdrop-blur px-3.5 py-1.5 text-accent text-[11px] font-bold tracking-wide uppercase">
        {t(tz.badgeKey)}
      </span>
    </motion.div>
  );
}

export default function AppTeasers() {
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
          {t("home.apps.title")}
        </h2>
        <p className="mt-4 text-fg-muted text-lg sm:text-xl max-w-xl mx-auto">
          {t("home.apps.desc")}
        </p>
      </motion.div>

      <div className="space-y-10">
        {TEASERS.map((tz, i) => (
          <TeaserCard key={tz.name} tz={tz} i={i} />
        ))}
      </div>
    </section>
  );
}
