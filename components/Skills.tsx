import { SectionLabel } from "./About";

const categories = [
  {
    name: "Product Management",
    skills: ["Product Strategy", "Roadmapping", "OKRs & KPIs", "User Research", "A/B Testing", "PRDs", "Go-to-Market"],
  },
  {
    name: "Technical & AI",
    skills: ["GenAI / LLMs", "Prompt Engineering", "Supply Chain Systems", "Data Analysis", "SQL (basics)", "Jira & Confluence"],
  },
  {
    name: "Operations & Strategy",
    skills: ["Operations Management", "Process Optimization", "Lean / Six Sigma", "Vendor Management", "P&L Ownership", "Stakeholder Management"],
  },
  {
    name: "Leadership",
    skills: ["Cross-functional Teams", "Executive Communication", "Mentorship", "Agile / Scrum", "Crisis Management", "Naval Leadership"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-14">What I bring to the table</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl p-7 border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <h3 className="font-semibold mb-5" style={{ color: "var(--accent-light)" }}>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
