import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import ProjectsTimeline from "@/components/ProjectsTimeline";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yıllara Göre Projeler — Yozapps",
  description:
    "2020'den bugüne Yozapps'e uzanan yolda geliştirdiğimiz mobil projeler.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        kickerKey="projects.kicker"
        titleKey="projects.title"
        descKey="projects.desc"
      />
      <ProjectsTimeline />
      <Footer />
    </main>
  );
}
