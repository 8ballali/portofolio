import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function PersonalProjectsSection({ projects }) {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  const hasMoreProjects = projects.length > 4;

  return (
    <section id="personal-projects" className="bg-[#F9F7F2]" style={{ cursor: "none" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#706C67] mb-3">
            Side Work
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-bold uppercase text-[#1A1A1A] tracking-tight">
            Personal Projects
          </h2>
          <p className="mt-4 text-sm text-[#706C67] font-mono tracking-wider max-w-sm text-justify">
            A collection of innovative academic and personal projects demonstrating my experience in AI, software engineering, backend systems, blockchain, IoT, and cyber security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#D1CDC7]">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {hasMoreProjects && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="font-mono text-[11px] tracking-[0.25em] uppercase px-5 py-3 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F9F7F2] transition-colors duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
      <div className="w-full h-px bg-[#D1CDC7]" />
    </section>
  );
}