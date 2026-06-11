"use client";
import { useState, useEffect } from "react";

const links = ["About", "Experience", "Education", "Skills", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md border-b" : "py-5"
      }`}
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-semibold text-sm tracking-wide" style={{ color: "var(--accent-light)" }}>
          MS
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm transition-colors hover:text-[#003366]"
                style={{ color: "var(--muted)" }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:mani.in@hotmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all hover:bg-[#003366]/5"
          style={{ borderColor: "var(--border)", color: "var(--accent-light)" }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
