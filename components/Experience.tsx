import { SectionLabel } from "./About";

const jobs = [
  {
    title: "Senior Product Manager",
    company: "Amazon",
    location: "Seattle, WA",
    period: "Dec 2023 – Present",
    bullets: [
      "Spearheaded a GenAI-powered assistant in the Transparency Portal to guide brands through self-service workflows, reducing customer-service contacts by 20% and improving SLA compliance by 30%",
      "Led end-to-end development of a self-service distributor management feature for a brand protection platform — a unified system of record for 80K+ brands, cutting a 48-hour manual process to 2 minutes and eliminating ~$25.9MM in annual inventory loss risk",
      "Owned portal self-service strategy & roadmap across IN, CN, EU teams — estimating >30% brand productivity gain and >25% FTE optimization",
      "Owned Traceability product strategy, partnering with 5 orgs to build a traceability system for Amazon Grocery & Whole Foods enabling regulatory compliance for ~300K products",
      "Led UX research — interviews & surveys with 200+ brands across CN, IN, EU — driving data-driven feature prioritization and >20% CX uplift",
    ],
  },
  {
    title: "Co-Founder",
    company: "Military to MBA",
    location: "India",
    period: "Jan 2021 – 2024",
    bullets: [
      "Education consultancy helping transitioning Indian veterans pursue advanced degrees",
      "Led a team of peers, provided 100+ free 1:1 consultations, and helped veterans earn MBA admits from top universities with >$500,000 in scholarships",
    ],
  },
  {
    title: "Operations Manager",
    company: "Chewy",
    location: "Dayton, OH",
    period: "Jul 2023 – Dec 2023",
    bullets: [
      "Identified and resolved unauthorized, unsafe, or ineffective practices, improving safety by 10% through new protocols and training in Multis Picking",
      "Enhanced operations efficiency by 12% by optimizing workflows and implementing best practices",
    ],
  },
  {
    title: "Founder & Managing Director",
    company: "GreenFoods Factory",
    location: "India",
    period: "2020 – 2023",
    bullets: [
      "Launched own brand of tapioca sago pearls, selling ~100 tonnes annually to B2C customers across India (₹60/kg)",
      "Built B2B export channel to Canada, shipping ~100 tonnes annually in international export orders",
      "Implemented automation in roasting process — 20% quality improvement, 17% productivity increase",
      "Standardized supply chain with hub-and-spoke distribution, reducing shipment costs and delivery time by 30%",
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
    title: "Associate Vice President — Corporate & Investment Banking",
    company: "JP Morgan Chase & Co.",
    location: "India",
    period: "Oct 2020 – Jul 2021",
    bullets: [
      "Upgraded risk analysis model via user interviews and KPI optimization, improving process efficiency by 12%",
      "Developed analyst onboarding mentoring program, reducing training duration by 15%",
    ],
  },
  {
    title: "Officer-in-Charge — Head of 4 Sub-Units, Naval Base (INS Angre)",
    company: "Indian Navy",
    location: "India",
    period: "Jan 2010 – Dec 2019",
    bullets: [
      "Spearheaded development of sailor residences — leadership buy-in, vendor selection, and time/quality oversight — reducing accommodation shortage by 25%",
      "Led a 100-person team organizing a major naval event, optimizing layouts and integrating past feedback to reduce costs by 11%",
      "Modified naval base staffing strategy by segmenting job profiles, reducing workforce shortage by 10% and increasing productivity by 20%",
    ],
  },
  {
    title: "Head of Operations — INS Agray",
    company: "Indian Navy",
    location: "India",
    period: "Jul 2014 – Feb 2016",
    bullets: [
      "Executed 100+ naval operations with an 80-member crew, improving ship performance by 30% through audit prioritization",
    ],
  },
  {
    title: "Executive Officer (Second-in-Command) — IN Ships",
    company: "Indian Navy",
    location: "India",
    period: "Jun 2012 – Jun 2014",
    bullets: [
      "Developed new passage plans for the largest tanker warship during the Indo-Brazilian Maritime Exercise, improving fuel conservation by 15%",
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
