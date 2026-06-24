import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "00" },
  { id: "work", label: "01" },
  { id: "skills", label: "02" },
  { id: "about", label: "03" },
  { id: "contact", label: "04" },
];

export default function ScrollProgress() {
  const [scrollPct, setScrollPct] = useState(0);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);

      // Determine active section
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(s.id);
          return;
        }
      }
      setActive("hero");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-0">
      {/* Track line */}
      <div className="relative w-px bg-[#D1CDC7]" style={{ height: 200 }}>
        <div
          className="absolute top-0 left-0 w-full bg-[#1A1A1A] transition-all duration-100"
          style={{ height: `${scrollPct}%` }}
        />
      </div>

      {/* Section anchors */}
      <div className="flex flex-col gap-6 mt-6">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`font-mono text-[10px] tracking-widest transition-all duration-300 ${
              active === s.id
                ? "text-[#1A1A1A] font-bold"
                : "text-[#D1CDC7] hover:text-[#706C67]"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}