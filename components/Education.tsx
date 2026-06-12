import { SectionLabel } from "./About";

const schools: {
  degree: string;
  school: string;
  location: string;
  year: string;
  detail?: string;
}[] = [
  {
    degree: "MBA — Supply Chain, Business Analytics & Product Management (STEM)",
    school: "Indiana University, Kelley School of Business",
    location: "Bloomington, IN",
    year: "May 2023",
    detail: "VP Supply Chain Club · VP Veterans Club · Merit Fellowship, Terry Hershberger Scholarship, William Lockwood Jr. Fellowship",
  },
  {
    degree: "Armed Forces Program in Business Management",
    school: "Indian Institute of Management Ahmedabad",
    location: "Gujarat, India",
    year: "Mar 2020",
  },
  {
    degree: "Naval Orientation Course",
    school: "Indian Naval Academy, Indian Navy",
    location: "Ezhimala, India",
    year: "Jan 2010",
  },
  {
    degree: "Bachelor of Technology — Textile Technology",
    school: "Anna University",
    location: "Tamil Nadu, India",
    year: "Jun 2008",
    detail: "Gold Medalist — Best Outstanding Student in overall order of merit",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Academic background</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {schools.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 border flex flex-col gap-3"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full self-start"
                style={{ background: "rgba(0,51,102,0.08)", color: "var(--accent-light)" }}
              >
                {s.year}
              </span>
              <h3 className="font-semibold text-sm leading-snug">{s.degree}</h3>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--accent-light)" }}>
                  {s.school}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                  {s.location}
                </p>
              </div>
              {s.detail && (
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
