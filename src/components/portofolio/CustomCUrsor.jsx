import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const onThemeChange = (event) => setIsDark(Boolean(event.detail?.isDark));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("themechange", onThemeChange);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("themechange", onThemeChange);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
    >
      {/* Crosshair */}
      <div className="relative w-6 h-6">
        <div className={`absolute top-1/2 left-0 w-full h-px ${isDark ? "bg-[#F9F7F2]" : "bg-[#1A1A1A]"} opacity-70`} />
        <div className={`absolute left-1/2 top-0 w-px h-full ${isDark ? "bg-[#F9F7F2]" : "bg-[#1A1A1A]"} opacity-70`} />
        <div className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 border ${isDark ? "border-[#F9F7F2]" : "border-[#1A1A1A]"} opacity-70`} style={{ transform: "translate(-50%,-50%)" }} />
      </div>
      {/* Coordinates */}
      <div
        className={`absolute left-4 top-4 font-mono text-[9px] tracking-widest whitespace-nowrap ${isDark ? "text-[#D1CDC7]" : "text-[#706C67]"}`}
      >
        {String(Math.round(pos.x)).padStart(4, "0")},{String(Math.round(pos.y)).padStart(4, "0")}
      </div>
    </div>
  );
}