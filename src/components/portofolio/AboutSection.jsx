import { motion } from "framer-motion";

export default function AboutSection({ developer }) {
  return (
    <section id="about" className="bg-[#F9F7F2]" style={{ cursor: "none" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#706C67] mb-3">
            About
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-bold uppercase text-[#1A1A1A] tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          className="border border-[#D1CDC7] grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#D1CDC7]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Bio — 2 cols */}
          <div className="lg:col-span-2 bg-[#F9F7F2] p-8 sm:p-10 lg:p-14">
            {/* Tech metadata */}
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#706C67] mb-10 flex gap-8 flex-wrap">
              <span>Role // Full Stack Backend Lead</span>
              <span>Focus // APIs · Systems · Cloud Infrastructure</span>
              <span>Open To // Full-Time Engineering Roles</span>
            </div>

            {developer.bio.map((paragraph, i) => (
              <p
                key={i}
                className={`text-base text-[#1A1A1A] leading-relaxed font-light ${i < developer.bio.length - 1 ? "mb-6" : ""}`}
              >
                {paragraph}
              </p>
            ))}

            {/* Separator */}
            <div className="mt-10 pt-10 border-t border-[#D1CDC7] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { metric: "Zero", label: "Downtime Migration" },
                { metric: "99%", label: "Uptime SLA" },
                { metric: "10%", label: "Cloud Cost Reduction" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-serif text-3xl font-bold text-[#1A1A1A]">{stat.metric}</div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#706C67] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo — 1 col */}
          <div className="bg-[#F9F7F2] relative overflow-hidden min-h-[300px] md:min-h-0">
            <img
              src={developer.photo}
              alt="Developer portrait"
              className="absolute inset-0 w-full h-full object-cover object-top grayscale"
            />
            {/* Subtle overlay with metadata */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#F9F7F2]/90">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#706C67]">
                {developer.name} — Backend Engineer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-px bg-[#D1CDC7]" />
    </section>
  );
}