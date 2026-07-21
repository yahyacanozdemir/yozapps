"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";

const fieldAnim = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
});

export default function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/yahyacanozdemir@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: "Yozapps.com — yeni mesaj",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-2xl border border-border-c bg-bg-elev px-5 py-4 text-fg placeholder:text-fg-muted/60 outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent/15";

  return (
    <section id="contact" className="mx-auto max-w-2xl px-4 pb-28">
      <motion.div {...fieldAnim(0)} className="text-center mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight">
          {t("form.title")}
        </h2>
        <p className="mt-4 text-fg-muted text-base sm:text-lg">{t("form.desc")}</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="shine rounded-[2rem] border border-accent/40 bg-accent/10 p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
              className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-accent text-bg"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </motion.div>
            <p className="font-display font-bold text-xl sm:text-2xl text-accent">
              {t("form.sent")}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-5"
          >
            <motion.div {...fieldAnim(1)} className="grid sm:grid-cols-2 gap-5">
              <input
                name="name"
                required
                placeholder={t("form.name")}
                className={inputCls}
              />
              <input
                name="email"
                type="email"
                required
                placeholder={t("form.email")}
                className={inputCls}
              />
            </motion.div>
            <motion.div {...fieldAnim(2)}>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={t("form.message")}
                className={`${inputCls} resize-none`}
              />
            </motion.div>
            <motion.div {...fieldAnim(3)} className="text-center">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="shine inline-flex items-center gap-2 rounded-2xl bg-accent text-bg px-10 py-4 font-semibold text-base shadow-xl shadow-accent/25 disabled:opacity-60"
              >
                {status === "sending" ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                    className="inline-block h-4 w-4 rounded-full border-2 border-bg/40 border-t-bg"
                  />
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                  </svg>
                )}
                {status === "sending" ? t("form.sending") : t("form.send")}
              </motion.button>
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-red-500"
                >
                  {t("form.error")}
                </motion.p>
              )}
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}
