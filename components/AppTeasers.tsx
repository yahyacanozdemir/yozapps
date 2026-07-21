"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang, type DictKey } from "@/lib/i18n";

interface Teaser {
  href: string;
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
    icon: "/holes/icon.png",
    visual: "/holes/screen-1.png",
    name: "Holes",
    taglineKey: "holes.tagline",
    lineKey: "teaser.holes.line",
    badgeKey: "holes.status",
  },
  {
    href: "/apps/safeoto/",
    icon: "/safeoto/icon.jpg",
    visual: "/safeoto/store/cover.jpg",
    name: "Safe Oto",
    taglineKey: "safeoto.tagline",
    lineKey: "teaser.safeoto.line",
    badgeKey: "safeoto.status",
  },
];

function TeaserCard({ tz, i }: { tz: Teaser; i: number }) {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={tz.href}
        className="shine group relative block overflow-hidden rounded-[2.5rem] border border-border-c bg-bg-elev"
      >
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
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent text-sm sm:text-base">
              {t("teaser.cta")}
              <svg
                width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                className="transition-transform group-hover:translate-x-1.5"
              >
                <path d="M5 12h14m0 0-6-6m6 6-6 6" />
              </svg>
            </span>
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
      </Link>
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
