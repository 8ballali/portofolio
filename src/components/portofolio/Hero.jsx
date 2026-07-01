import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero({ developer }) {
  const [wireVisible, setWireVisible] = useState(false);
  const nameRef = useRef(null);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-[#F9F7F2] overflow-hidden"
      style={{ cursor: "none" }}
    >
      {/* Grid lines background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-[#D1CDC7]/30"
            style={{ left: `${(i + 1) * (100 / 13)}%` }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 pt-28 sm:pt-32 lg:pt-0">

        {/* LEFT — Name block */}
        <div
          className="flex-1 flex flex-col justify-center relative max-w-4xl"
          onMouseEnter={() => setWireVisible(true)}
          onMouseLeave={() => setWireVisible(false)}
          ref={nameRef}
        >
          {/* Architectural wireframe overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: wireVisible ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {[...Array(8)].map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0" y1={`${(i + 1) * 12.5}%`}
                  x2="100%" y2={`${(i + 1) * 12.5}%`}
                  stroke="#D1CDC7" strokeWidth="0.5"
                />
              ))}
              {[...Array(6)].map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={`${(i + 1) * 16.66}%`} y1="0"
                  x2={`${(i + 1) * 16.66}%`} y2="100%"
                  stroke="#D1CDC7" strokeWidth="0.5"
                />
              ))}
              <circle cx="50%" cy="50%" r="80" fill="none" stroke="#D1CDC7" strokeWidth="0.5" />
              <circle cx="50%" cy="50%" r="120" fill="none" stroke="#D1CDC7" strokeWidth="0.5" />
            </svg>
          </motion.div>

          {/* Technical label */}
          <motion.p
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#706C67] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Full Stack Developer — Backend & Systems
          </motion.p>

          {/* Hero name */}
          <motion.h1
            className="font-serif text-[clamp(3.25rem,14vw,5.75rem)] md:text-[clamp(4rem,10vw,7rem)] lg:text-[clamp(5rem,8vw,8rem)] leading-none tracking-[-0.02em] text-[#1A1A1A] uppercase font-bold select-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {developer.name.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>

          {/* Headline */}
          <motion.p
            className="mt-8 text-[clamp(1.1rem,2vw,1.4rem)] text-[#1A1A1A] leading-snug max-w-lg font-light tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {developer.headline}
          </motion.p>
        </div>

        {/* RIGHT — Meta + CTAs */}
        <motion.div
          className="flex flex-col justify-center lg:pl-20 lg:w-80 pb-16 lg:pb-0 mt-12 lg:mt-0 w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {/* Divider */}
          <div className="hidden lg:block w-full h-px bg-[#D1CDC7] mb-12" />

          {/* Value prop */}
          <p className="text-sm text-[#706C67] leading-relaxed mb-12 font-light">
            {developer.subheadline}
          </p>

          {/* Tech metadata */}
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#706C67] mb-8 space-y-2">
            <div className="flex justify-between border-b border-[#D1CDC7] pb-2">
              <span>Specialty</span>
              <span className="text-[#1A1A1A]">Backend / Infra</span>
            </div>
            <div className="flex justify-between border-b border-[#D1CDC7] pb-2">
              <span>Focus</span>
              <span className="text-[#1A1A1A]">APIs / Systems</span>
            </div>
            <div className="flex justify-between border-b border-[#D1CDC7] pb-2">
              <span>Stack</span>
              <span className="text-[#1A1A1A]">Node · Go · Python</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <button
              onClick={scrollToWork}
              className="w-full bg-[#1A1A1A] text-[#F9F7F2] font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-4 hover:bg-[#3E4C3F] transition-colors duration-300"
            >
              View My Work
            </button>
            <a
              href={developer.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-[#1A1A1A] text-[#1A1A1A] font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-4 text-center hover:bg-[#1A1A1A] hover:text-[#F9F7F2] transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#706C67]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#706C67]" />
        </motion.div>
      </motion.div>

      {/* Section bottom border */}
      <div className="w-full h-px bg-[#D1CDC7]" />
    </section>
  );
}