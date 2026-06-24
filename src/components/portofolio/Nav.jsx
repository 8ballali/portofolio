import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
];

export default function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("hero")}
              className="font-mono text-xs tracking-[0.25em] uppercase text-[#1A1A1A] hover:text-[#706C67] transition-colors"
            >
              {name}
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
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

            {/* Contact CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollTo("contact")}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A] border border-[#1A1A1A] px-5 py-2 hover:bg-[#1A1A1A] hover:text-[#F9F7F2] transition-all duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#1A1A1A] p-1"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {/* Underline */}
          <div className="h-px w-full bg-[#D1CDC7]" />
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#F9F7F2] border-t border-[#D1CDC7] px-8 py-6 flex flex-col gap-5">
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