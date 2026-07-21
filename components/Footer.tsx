"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border-c py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <Link href="/" className="font-display text-lg font-bold">
              <span className="text-gradient">Yoz</span>apps
            </Link>
            <p className="mt-1 text-sm text-fg-muted">{t("slogan")}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-fg-muted">
            <Link href="/apps/" className="hover:text-fg transition-colors">{t("nav.apps")}</Link>
            <Link href="/projects/" className="hover:text-fg transition-colors">{t("nav.projects")}</Link>
            <Link href="/about/" className="hover:text-fg transition-colors">{t("nav.about")}</Link>
            <Link href="/contact/" className="hover:text-fg transition-colors">{t("nav.contact")}</Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-c text-center text-xs text-fg-muted">
          © {new Date().getFullYear()} Yozapps
        </div>
      </div>
    </footer>
  );
}
