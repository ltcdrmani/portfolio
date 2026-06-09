import { SectionLabel } from "./About";

const jobs = [
  {
    title: "Senior Product Manager (Transparency)",
    company: "Amazon",
    location: "Seattle, WA",
    period: "Dec 2023 – Present",
    bullets: [
      "Spearheading a GenAI-powered assistant in the Transparency Portal to guide brands through self-service workflows, reducing customer-service contacts by 20% and improving SLA compliance by 30%",
      "Owned portal self-service strategy & roadmap across IN, CN, EU teams — estimating >30% brand productivity gain and >25% FTE optimization",
      "Owned Traceability product strategy, partnering with 5 orgs to build a traceability system for Amazon Grocery & Whole Foods enabling regulatory compliance for ~300K products",
      "Led UX research — interviews & surveys with 200+ brands across CN, IN, EU — driving data-driven feature prioritization and >20% CX uplift",
    ],
  },
  {
    title: "Operations Manager",
    company: "Chewy",
    location: "Dayton, OH",
    period: "Jul 2023 – Dec 2023",
    bullets: [
      "Monitored 6 critical KPIs to achieve 98% on-time shipments and reduce warehouse misses by 25%",
      "Fostered an innovation-driven culture across 200+ FC associates, reducing process gaps by 30% through peer mentorship and customer-centric initiatives",
    ],
  },
  {
    title: "Leadership Development Intern — Corporate Strategy",
    company: "Mercury Marine (Brunswick Corporation)",
    location: "Fond du Lac, WI",
    period: "Jun 2022 – Aug 2022",
    bullets: [
      "Developed go-to-market strategy for an Electric Outboard Engine in a new geography, projecting $2.5M revenue in launch year",
      "Formulated vertical integration strategy for hydraulic components, reducing supplier concentration risk by 50%",
    ],
  },
  {
    title: "Associate Vice President — Corporate & Investment Banking Operations",
    company: "JP Morgan Chase & Co.",
    location: "India",
    period: "Oct 2020 – Jul 2021",
    bullets: [
      "Upgraded risk analysis model via user interviews and KPI optimization, improving process efficiency by 12%",
      "Developed analyst onboarding mentoring program, reducing training duration by 15%",
    ],
  },
  {
    title: "Founder & Managing Director",
    company: "GreenFoods Factory",
    location: "India",
    period: "Dec 2019 – Oct 2020",
    bullets: [
      "Launched B2B/B2C product line achieving $100K annual revenue through demand forecasting and market research",
      "Implemented automation in roasting process — 20% quality improvement, 17% productivity increase",
      "Standardized supply chain with hub-and-spoke distribution, reducing shipment costs and delivery time by 30%",
    ],
  },
  {
    title: "Officer-in-Charge — Naval Base (INS Angre)",
    company: "Indian Navy",
    location: "India",
    period: "Jan 2016 – Dec 2019",
    bullets: [
      "Led end-to-end development of an in-house Accommodation Management Software, improving allocation efficiency and reducing manual errors by 40%",
      "Managed procurement for 5 projects across 20 contractors (~INR 20 crore), delivering 18% cost savings",
      "Led 100-person team for a major naval event, reducing costs by 11%",
    ],
  },
  {
    title: "Head of Operations — INS Deepak & Agray",
    company: "Indian Navy",
    location: "India",
    period: "Jun 2012 – Feb 2016",
    bullets: [
      "Executed 100+ naval operations with an 80-member crew, improving performance by 30% through audit prioritization",
      "Spearheaded ship refit coordinating OEMs and naval dockyard, achieving 20% increase in operational availability",
      "Developed new passage plans during Indo-Brazilian Maritime Exercise, improving fuel conservation by 15%",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-14">Where I&apos;ve worked</h2>

        <div className="relative pl-6 border-l" style={{ borderColor: "var(--border)" }}>
          {jobs.map((job, i) => (
            <div key={i} className="mb-14 relative">
              {/* timeline dot */}
              <div
                className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full border-2"
                style={{ background: "var(--accent)", borderColor: "var(--background)" }}
              />

              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "var(--accent-light)" }}>
                    {job.company} · {job.location}
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full border shrink-0"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
