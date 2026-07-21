import type { Metadata } from "next";
import Nav from "@/components/Nav";
import AppShowcase from "@/components/AppShowcase";
import Footer from "@/components/Footer";
import DetailNav from "@/components/DetailNav";
import { safeotoConfig } from "@/lib/showcase-configs";

export const metadata: Metadata = {
  title: "Safe Oto — Güvenli · Hızlı · Kolay | Yozapps",
  description:
    "Safe Oto: kurumsal ikinci el otomobil ilanlarını tek platformda toplayan karşılaştırma uygulaması. App Store'da yayında.",
};

export default function SafeOtoPage() {
  return (
    <main>
      <Nav />
      <AppShowcase config={safeotoConfig} />
      <DetailNav
        nextHref="/apps/holes/"
        nextName="Holes"
        nextIcon="/holes/icon.png"
      />
      <Footer />
    </main>
  );
}
