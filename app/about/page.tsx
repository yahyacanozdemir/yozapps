import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import AboutContent from "@/components/AboutContent";
import ValuesBand from "@/components/ValuesBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hakkında — Yozapps",
  description:
    "Yozapps: mobil odaklı bağımsız bir uygulama stüdyosu. Yenilikçi, Özgün, Zarif uygulamalar.",
};

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <PageHeader kickerKey="home.kicker" titleKey="about.title" />
      <AboutContent />
      <ValuesBand />
      <Footer />
    </main>
  );
}
