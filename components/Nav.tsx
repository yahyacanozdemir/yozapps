"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, type DictKey } from "@/lib/i18n";

const LINKS: { href: string; key: DictKey }[] = [
  { href: "/", key: "nav.home" },
  { href: "/apps/", key: "nav.apps" },
  { href: "/projects/", key: "nav.projects" },
  { href: "/about/", key: "nav.about" },
  { href: "/contact/", key: "nav.contact" },
];

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav className="mx-auto max-w-6xl px-4 mt-3">
        <div className="rounded-2xl border border-border-c bg-bg/70 backdrop-blur-xl shadow-lg shadow-black/5">
          <div className="flex items-center justify-between px-4 py-2.5">
            <Link href="/" className="font-display text-xl font-bold tracking-tight">
              <span className="text-gradient">Yoz</span>apps
            </Link>

            <div className="hidden md:flex items-center gap-5">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(l.href)
                      ? "text-accent font-semibold"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {t(l.key)}
                </Link>
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
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden h-9 w-9 grid place-items-center rounded-xl border border-border-c bg-bg-elev hover:border-accent transition-colors"
                aria-label="Menu"
                aria-expanded={open}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="md:hidden overflow-hidden border-t border-border-c"
              >
                <div className="flex flex-col py-2">
                  {LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`px-5 py-3 text-sm font-medium ${
                        isActive(l.href) ? "text-accent font-semibold" : "text-fg-muted"
                      }`}
                    >
                      {t(l.key)}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
}
