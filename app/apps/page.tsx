import type { Metadata } from "next";
import Nav from "@/components/Nav";
import AppTeasers from "@/components/AppTeasers";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Uygulamalar — Yozapps",
  description: "Yozapps uygulamaları: Holes ve Safe Oto.",
};

export default function AppsPage() {
  return (
    <main className="pt-16">
      <Nav />
      <AppTeasers />
      <ComingSoon />
      <Footer />
    </main>
  );
}
