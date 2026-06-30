import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, GitMerge, Workflow, Cloud, X, ArrowUpRight, Download } from "lucide-react";

const iconMap = {
  layers: Layers,
  "git-merge": GitMerge,
  workflow: Workflow,
  cloud: Cloud,
};

function CaseStudyExpanded({ project, onClose }) {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const onThemeChange = (event) => setIsDark(Boolean(event.detail?.isDark));
    window.addEventListener("themechange", onThemeChange);
    return () => window.removeEventListener("themechange", onThemeChange);
  }, []);

  const colors = isDark
    ? {
        shell: "bg-[#15120d]",
        panel: "bg-[#15120d]",
        muted: "text-[#A69A8A]",
        primary: "text-[#E9E1D4]",
        accent: "text-[#D4C4AA]",
        border: "border-[#2A241A]",
        line: "bg-[#2A241A]",
        chipText: "text-[#D4C4AA]",
        chipBg: "bg-[#2A241A]",
        chipBorder: "border-[#2A241A]",
        btn: "bg-[#E9E1D4] text-[#15120d] hover:bg-[#CFC3B1]",
      }
    : {
        shell: "bg-[#F9F7F2]",
        panel: "bg-[#F9F7F2]",
        muted: "text-[#706C67]",
        primary: "text-[#1A1A1A]",
        accent: "text-[#3E4C3F]",
        border: "border-[#D1CDC7]",
        line: "bg-[#D1CDC7]",
        chipText: "text-[#1A1A1A]",
        chipBg: "bg-transparent",
        chipBorder: "border-[#D1CDC7]",
        btn: "bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#3E4C3F]",
      };

  return createPortal(
    <motion.div
      className={`fixed inset-0 z-50 overflow-y-auto ${colors.shell}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ cursor: "none" }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16">
          <span className={`font-mono text-[11px] tracking-[0.25em] uppercase ${colors.muted}`}>
            Case Study — {project.index}
          </span>
          <button
            onClick={onClose}
            className={`flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase ${colors.muted} hover:${colors.primary} transition-colors`}
          >
            <span>Close</span>
            <X size={14} />
          </button>
        </div>

        {/* Header */}
        <div className={`border-t ${colors.border} pt-12 mb-20`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className={`font-serif text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-tight uppercase font-bold ${colors.primary}`}>
                {project.title}
              </h2>
              <p className={`font-mono text-[11px] tracking-[0.2em] uppercase mt-4 ${colors.muted}`}>
                {project.subtitle}
              </p>
            </div>
            <div className="text-right">
              <div className={`text-[clamp(2rem,5vw,3.5rem)] font-serif font-bold leading-none ${colors.accent}`}>
                {project.metric}
              </div>
              <div className={`font-mono text-[10px] tracking-[0.2em] uppercase mt-2 ${colors.muted}`}>
                {project.metricLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className={`border-t ${colors.border} pt-10`}>
          <h3 className={`font-serif text-[clamp(1.5rem,3vw,2.2rem)] leading-none tracking-tight uppercase font-bold ${colors.primary}`}>
            Details
          </h3>
        </div>

        {/* Vertical architecture deep dive */}
        <div className="mt-8 flex flex-col gap-6">
          {[
            { label: "The Problem", content: project.problem, accent: false },
            { label: "The Solution", content: project.solution, accent: false },
            { label: "The Impact", content: project.impact, accent: true },
          ].map((col, i) => (
            <div key={i} className={`p-8 md:p-10 border ${colors.border} ${colors.panel}`}>
              <div className="flex flex-col gap-5">
                <p className={`font-mono text-[10px] tracking-[0.25em] uppercase ${colors.muted}`}>
                  {col.label}
                </p>
                <p
                  className={`text-base leading-relaxed font-light max-w-3xl text-justify ${
                    col.accent ? colors.accent : colors.primary
                  }`}
                >
                  {col.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Resource */}
        {((Array.isArray(project.resources) && project.resources.length > 0) || project.resourceLabel || project.resourceUrl || project.restriction) ? (
          <div className={`mt-12 border-t pt-10 ${colors.border}`}>
            <h3 className={`font-serif text-[clamp(1.5rem,3vw,2.2rem)] leading-none tracking-tight uppercase font-bold ${colors.primary}`}>
              Resource
            </h3>

            {project.restriction ? (
              <p className={`mt-6 text-sm leading-relaxed font-light max-w-3xl text-justify italic ${colors.muted}`}>
                {project.restriction === true
                  ? "Some supporting materials are restricted due to confidentiality agreements with related parties."
                  : project.restriction}
              </p>
            ) : null}

            {Array.isArray(project.resources) && project.resources.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.resources.map((resource, resourceIndex) => {
                  const buttonClassName = `inline-flex w-fit items-center justify-center font-mono text-[10px] tracking-[0.2em] uppercase px-5 py-3 transition-colors duration-300 ${colors.btn}`;

                  return resource.url ? (
                    <a
                      key={resourceIndex}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClassName}
                    >
                      {resource.label}
                    </a>
                  ) : null;
                })}
              </div>
            ) : (project.resourceLabel || project.resourceUrl) ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.resourceUrl ? (
                  <a
                    href={project.resourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-fit items-center justify-center font-mono text-[10px] tracking-[0.2em] uppercase px-5 py-3 transition-colors duration-300 ${colors.btn}`}
                  >
                    {project.resourceLabel || "Open Resource"}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Tech stack */}
        <div className={`mt-12 border-t pt-10 ${colors.border}`}>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <p className={`font-mono text-[10px] tracking-[0.25em] uppercase ${colors.muted}`}>
              Tech Stack
            </p>
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase px-5 py-3 transition-colors duration-300 ${colors.btn}`}
              >
                <Download size={12} />
                {project.downloadLabel || "Open Folder"}
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t, i) => (
              <span
                key={i}
                className={`font-mono text-[11px] tracking-[0.15em] uppercase border px-4 py-2 ${colors.chipBorder} ${colors.chipText} ${colors.chipBg}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    , document.body
  );
}

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[project.iconType] || Layers;

  return (
    <>
      <AnimatePresence>
        {open && <CaseStudyExpanded project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>

      <motion.div
        className="group border border-[#D1CDC7] bg-[#F9F7F2] p-8 md:p-10 cursor-pointer hover:border-[#1A1A1A] transition-colors duration-300 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setOpen(true)}
        style={{ cursor: "none" }}
      >
        {/* Project index */}
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#D1CDC7] group-hover:text-[#706C67] transition-colors">
          {project.index}
        </span>

        {/* Icon */}
        <div className="absolute top-8 right-8 md:top-10 md:right-10 opacity-20 group-hover:opacity-50 transition-opacity">
          <Icon size={40} strokeWidth={0.8} className="text-[#1A1A1A]" />
        </div>

        {/* Metric badge */}
        <div className="mt-3 mb-6">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#F9F7F2] bg-[#3E4C3F] px-3 py-1">
            {project.metric}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight font-bold uppercase text-[#1A1A1A] mb-3 pr-12">
          {project.title}
        </h3>
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#706C67] mb-5">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-[#706C67] leading-relaxed font-light mb-7 max-w-xs">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="font-mono text-[10px] tracking-[0.1em] uppercase border border-[#D1CDC7] text-[#706C67] px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Open arrow */}
        <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight size={16} className="text-[#1A1A1A]" />
        </div>
      </motion.div>
    </>
  );
}