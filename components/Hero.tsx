export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden">
      {/* subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,51,102,0.08) 0%, transparent 70%)",
        }}
      />

      {/* anchor watermark */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        width="520"
        height="520"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#003366"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.05 }}
        aria-hidden="true"
      >
        <circle cx="12" cy="4" r="2" />
        <line x1="12" y1="6" x2="12" y2="22" />
        <line x1="7" y1="9" x2="17" y2="9" />
        <path d="M5 14a7 7 0 0 0 14 0" />
        <line x1="5" y1="14" x2="3.5" y2="15" />
        <line x1="19" y1="14" x2="20.5" y2="15" />
      </svg>

      <div className="max-w-3xl w-full text-center relative z-10">
        <p
          className="text-sm font-medium tracking-widest uppercase mb-6"
          style={{ color: "var(--accent-light)" }}
        >
          Lt Cdr (Retd), Indian Navy · Senior Product Manager
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Mani{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #003366 0%, #1d5ba6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Selvaraj
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
          Building products at Amazon that scale globally — from AI powered features to supply chain
          traceability systems across retail and e-commerce. Former Naval Officer. Indiana Kelley MBA.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#experience"
            className="px-7 py-3 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #003366 0%, #1d5ba6 100%)",
              color: "white",
            }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full font-medium text-sm border transition-all hover:bg-[#003366]/5"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          >
            Contact me
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 rounded-full" style={{ background: "var(--border)" }} />
      </div>
    </section>
  );
}
