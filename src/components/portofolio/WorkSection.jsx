import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function WorkSection({ projects }) {
  return (
    <section id="work" className="bg-[#F9F7F2]" style={{ cursor: "none" }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-32">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#706C67] mb-3">
            Work
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-bold uppercase text-[#1A1A1A] tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-4 text-sm text-[#706C67] font-mono tracking-wider max-w-sm">
            Click any project for the full architecture deep-dive.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D1CDC7]">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
      <div className="w-full h-px bg-[#D1CDC7]" />
    </section>
  );
}