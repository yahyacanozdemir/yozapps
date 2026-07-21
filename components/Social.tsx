"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const LINKS = [
  {
    key: "appstore",
    label: "App Store",
    href: "https://apps.apple.com/tr/developer/yahya-can-ozdemir/id1895136077",
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/30",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.98-.2 1.92-.9 3.05-.82 1.79.14 3.02.86 3.75 2.17-3.36 2.06-2.56 6.57.51 7.81-.62 1.42-1.4 2.82-2.39 3.01ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yahyacanozdemir/",
    gradient: "from-sky-600 via-blue-700 to-blue-800",
    shadow: "shadow-sky-600/30",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
      </svg>
    ),
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/yahyacanozdemir",
    gradient: "from-zinc-600 via-zinc-800 to-black",
    shadow: "shadow-zinc-700/30",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
];

export default function Social() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-10"
      >
        {t("social.title")}
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {LINKS.map((l, i) => (
          <motion.a
            key={l.key}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`shine inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br ${l.gradient} text-white px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-sm sm:text-base shadow-xl ${l.shadow}`}
          >
            {l.icon}
            {l.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
