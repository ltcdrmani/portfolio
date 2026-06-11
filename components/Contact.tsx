import { SectionLabel } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Let&apos;s connect</h2>
        <p className="max-w-xl mb-12 leading-relaxed" style={{ color: "var(--muted)" }}>
          I&apos;m open to new opportunities — especially PM roles in Canada or roles that leverage my
          background in AI products, operations, and supply chain. Drop me a line.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:mani.in@hotmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all hover:bg-[#003366]/5"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent-light)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>Email</p>
              <p className="text-sm font-medium">mani.in@hotmail.com</p>
            </div>
          </a>

          <a
            href="tel:+18122725471"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all hover:bg-[#003366]/5"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent-light)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>Phone</p>
              <p className="text-sm font-medium">+1 812 272 5471</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/manikandanselvaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all hover:bg-[#003366]/5"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent-light)" }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <div>
              <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>LinkedIn</p>
              <p className="text-sm font-medium">Connect with me</p>
            </div>
          </a>
        </div>

        <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
          Canadian Permanent Resident · Based in the U.S. · Open to relocation across Canada
        </p>
      </div>
    </section>
  );
}
