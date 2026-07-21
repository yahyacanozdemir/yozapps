import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HolesShowcase from "@/components/HolesShowcase";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HolesShowcase />
      <ComingSoon />
      <Footer />
    </main>
  );
}
