import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
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
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#1A1A1A] opacity-70" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-[#1A1A1A] opacity-70" />
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 border border-[#1A1A1A] opacity-70" style={{ transform: "translate(-50%,-50%)" }} />
      </div>
      {/* Coordinates */}
      <div
        className="absolute left-4 top-4 font-mono text-[9px] tracking-widest text-[#706C67] whitespace-nowrap"
      >
        {String(Math.round(pos.x)).padStart(4, "0")},{String(Math.round(pos.y)).padStart(4, "0")}
      </div>
    </div>
  );
}