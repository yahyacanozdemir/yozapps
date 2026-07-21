import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Social from "@/components/Social";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İletişim — Yozapps",
  description: "Yozapps ile iletişime geçin.",
};

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        kickerKey="home.kicker"
        titleKey="contact.title"
        descKey="contact.desc"
      />
      <ContactForm />
      <Social />
      <Footer />
    </main>
  );
}
