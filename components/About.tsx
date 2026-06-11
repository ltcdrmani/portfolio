const highlights = [
  { value: "15+", label: "Years of leadership" },
  { value: "10yr", label: "Indian Navy officer" },
  { value: "200+", label: "Brands researched" },
  { value: "300K", label: "Products traced" },
];

const accomplishments = [
  "IEEE Senior Member & Full Member in Sigma Xi (The Scientific Research Honor Society)",
  "Published 6+ research papers in international journals and conferences, and completed 15+ peer reviews of scholarly articles in international journals",
  "Mentored startups registered with the Botswana Innovation Hub",
  "IEEE Senior Member Panelist reviewing senior member applications (2024)",
  "Recipient of Commendation by The Flag Officer Commanding-in-Chief, Indian Navy (2019)",
  "Commissioned in the Indian Navy by the President of India (2010)",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <div className="grid md:grid-cols-2 gap-16 items-start mt-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              From naval bridges to product roadmaps
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              I&apos;m a Senior Product Manager at Amazon&apos;s Transparency team, where I lead
              GenAI-powered self-service products and a supply-chain traceability system for Amazon
              Grocery & Whole Foods.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              Before tech, I spent 10 years as an officer in the Indian Navy — leading crews, managing
              complex logistics, and running operations aboard warships. That foundation shapes how I
              approach ambiguity, prioritize ruthlessly, and build teams that deliver.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              I hold an MBA from Indiana University&apos;s Kelley School of Business (Supply Chain,
              Business Analytics & Product Management) and a Business Management certificate from IIM Ahmedabad.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl p-6 border"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <p className="text-3xl font-bold mb-1" style={{ color: "var(--accent-light)" }}>
                  {h.value}
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-16 rounded-2xl p-8 border"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          <h3 className="font-semibold text-lg mb-5">Accomplishments</h3>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {accomplishments.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold tracking-widest uppercase"
      style={{ color: "var(--accent)" }}
    >
      {children}
    </p>
  );
}
