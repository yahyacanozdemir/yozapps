"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const links = [
    { href: "#apps", label: t("nav.apps") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav className="mx-auto max-w-6xl px-4 mt-3">
        <div className="flex items-center justify-between rounded-2xl border border-border-c bg-bg/70 backdrop-blur-xl px-4 py-2.5 shadow-lg shadow-black/5">
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            <span className="text-gradient">Yoz</span>apps
          </a>

          <div className="hidden sm:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-fg-muted hover:text-fg transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="h-9 px-3 rounded-xl border border-border-c bg-bg-elev text-xs font-bold hover:border-accent transition-colors"
              aria-label="Change language"
            >
              {lang === "tr" ? "EN" : "TR"}
            </button>
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="h-9 w-9 grid place-items-center rounded-xl border border-border-c bg-bg-elev hover:border-accent transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "dark" ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
