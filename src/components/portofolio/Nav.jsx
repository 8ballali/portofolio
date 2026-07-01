import { useState, useEffect } from "react";
import { Menu, Moon, SunMedium, X } from "lucide-react";

const links = [
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
];

export default function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
    window.dispatchEvent(new CustomEvent("themechange", { detail: { isDark: nextIsDark } }));
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-[#F9F7F2]/95 backdrop-blur-sm" : "bg-transparent"
        }`}
        style={{ cursor: "none" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("hero")}
              className="font-mono text-xs tracking-[0.25em] uppercase text-[#1A1A1A] hover:text-[#706C67] transition-colors text-left"
            >
              <span className="sm:hidden">{name.replace(/^Muhammad\b/i, "M.").replace(/\n/g, " ")}</span>
              <span className="hidden sm:inline">{name.replace(/\n/g, " ")}</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#706C67] hover:text-[#1A1A1A] transition-colors duration-200"
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A] border border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-[#F9F7F2] transition-all duration-300 flex items-center gap-2"
                aria-label={isDark ? "Switch to light mode" : "Switch to night mode"}
                title={isDark ? "Switch to light mode" : "Switch to night mode"}
              >
                {isDark ? <SunMedium size={14} /> : <Moon size={14} />}
                <span className="hidden sm:inline">{isDark ? "Light" : "Night"}</span>
              </button>

              {/* Contact CTA */}
              <div className="hidden lg:block">
                <button
                  onClick={() => scrollTo("contact")}
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A] border border-[#1A1A1A] px-5 py-2 hover:bg-[#1A1A1A] hover:text-[#F9F7F2] transition-all duration-300"
                >
                  Contact
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-[#1A1A1A] p-1"
                onClick={() => setMenuOpen((v) => !v)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          {/* Underline */}
          <div className="h-px w-full bg-[#D1CDC7]" />
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#F9F7F2] border-t border-[#D1CDC7] px-6 sm:px-8 py-6 flex flex-col gap-5">
            {[...links, { label: "Contact", id: "contact" }].map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#706C67] text-left hover:text-[#1A1A1A] transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}