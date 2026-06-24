import { useState } from "react";
import { motion } from "framer-motion";
import {
  Server, Code2, Zap, FileCode,
  Box, Cloud, Layers, Package,
  Database, Cpu, GitBranch, BarChart2,
  Layout, GitMerge, Network, RefreshCw
} from "lucide-react";

const iconMap = {
  server: Server, "code-2": Code2, zap: Zap, "file-code": FileCode,
  box: Box, cloud: Cloud, layers: Layers, package: Package,
  database: Database, cpu: Cpu, "git-branch": GitBranch, "bar-chart-2": BarChart2,
  layout: Layout, "git-merge": GitMerge, network: Network, "refresh-cw": RefreshCw,
};

// Define relationships between skills for "stack synergy" hover
const synergies = {
  "Kubernetes": ["AWS", "Docker", "Terraform", "CI/CD"],
  "AWS": ["Kubernetes", "Docker", "Terraform", "PostgreSQL"],
  "Kafka": ["Go", "ClickHouse", "System Design"],
  "Go": ["Kafka", "Kubernetes", "API Design", "Microservices"],
  "Node.js": ["API Design", "PostgreSQL", "Redis", "Microservices"],
  "Python": ["PostgreSQL", "System Design", "CI/CD"],
  "PostgreSQL": ["Node.js", "Python", "Database Design"],
  "Redis": ["Node.js", "Kafka", "System Design"],
};

export default function SkillsSection({ skills }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const allSkills = skills.flatMap((cat) => cat.items.map((item) => item.name));

  const isRelated = (name) => {
    if (!hoveredSkill) return true;
    if (name === hoveredSkill) return true;
    return (synergies[hoveredSkill] || []).includes(name);
  };

  return (
    <section id="skills" className="bg-[#F9F7F2]" style={{ cursor: "none" }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-32">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#706C67] mb-3">
            Skills
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-bold uppercase text-[#1A1A1A] tracking-tight">
            Core Competencies &amp; Tech Stack
          </h2>
          <p className="mt-4 text-xs font-mono tracking-wider text-[#706C67]">
            Hover a skill to reveal stack synergies.
          </p>
        </motion.div>

        {/* Skills grid — categories */}
        <div className="space-y-0">
          {skills.map((cat, ci) => (
            <motion.div
              key={cat.category}
              className="border-t border-[#D1CDC7]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#D1CDC7]">
                {/* Category label */}
                <div className="bg-[#F9F7F2] p-6 flex items-center">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#706C67]">
                    {cat.category}
                  </span>
                </div>
                {/* Skills */}
                {cat.items.map((skill, si) => {
                  const Icon = iconMap[skill.icon] || Box;
                  const related = isRelated(skill.name);
                  return (
                    <div
                      key={skill.name}
                      className="bg-[#F9F7F2] p-6 flex items-center gap-3 transition-all duration-200 hover:bg-[#1A1A1A] group"
                      style={{ opacity: hoveredSkill && !related ? 0.25 : 1, cursor: "none" }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.2}
                        className="text-[#706C67] group-hover:text-[#F9F7F2] transition-colors flex-shrink-0"
                      />
                      <span className="font-sans text-sm font-medium text-[#1A1A1A] group-hover:text-[#F9F7F2] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#D1CDC7]" />
        </div>
      </div>
      <div className="w-full h-px bg-[#D1CDC7]" />
    </section>
  );
}