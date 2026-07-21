import type { Metadata } from "next";
import Nav from "@/components/Nav";
import AppShowcase from "@/components/AppShowcase";
import Footer from "@/components/Footer";
import DetailNav from "@/components/DetailNav";
import { holesConfig } from "@/lib/showcase-configs";

export const metadata: Metadata = {
  title: "Holes — Tilt · Balance · Escape | Yozapps",
  description:
    "Holes: 500+ seviyeli minimalist denge oyunu. Eğ, dengede tut, kaç. App Store'da çok yakında.",
};

export default function HolesPage() {
  return (
    <main>
      <Nav />
      <AppShowcase config={holesConfig} />
      <DetailNav
        nextHref="/apps/safeoto/"
        nextName="Safe Oto"
        nextIcon="/safeoto/icon.jpg"
      />
      <Footer />
    </main>
  );
}
