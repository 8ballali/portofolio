import { useEffect } from "react";
import { motion } from "framer-motion";
import { developer, personalProjects, projects, skills } from "@/data/portofolio";
import Nav from "@/components/portofolio/Nav";
import Hero from "@/components/portofolio/Hero";
import WorkSection from "@/components/portofolio/WorkSection";
import PersonalProjectsSection from "@/components/portofolio/PersonalProjectsSection";
import SkillsSection from "@/components/portofolio/SkillsSection";
import AboutSection from "@/components/portofolio/AboutSection";
import ContactSection from "@/components/portofolio/ContactSection";
import ScrollProgress from "@/components/portofolio/ScrollProgress";

export default function Home() {
  // Set custom cursor for the whole page
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div className="bg-[#F9F7F2] min-h-screen" style={{ cursor: "none" }}>
      {/* Vertical scroll progress + section anchors */}
      <ScrollProgress />

      {/* Sticky nav */}
      <Nav name={developer.name} />

      {/* Page sections */}
      <Hero developer={developer} />
      <WorkSection projects={projects} />
      <PersonalProjectsSection projects={personalProjects} />
      <SkillsSection skills={skills} />
      <AboutSection developer={developer} />
      <ContactSection developer={developer} />
    </div>
  );
}