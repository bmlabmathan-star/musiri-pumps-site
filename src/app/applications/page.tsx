import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Explore Musiri Pumps' current agricultural focus and long-term application opportunities across water supply, industry, construction, mining, and processing.",
};

type SectorIconName = "water" | "energy" | "construction" | "processing" | "agriculture";

type Sector = {
  number: string;
  slug: string;
  title: string;
  icon: SectorIconName;
  intro: string;
  examples: string[];
  accent: string;
};

const sectors: Sector[] = [
  {
    number: "01",
    slug: "municipal-residential",
    title: "Municipal & Residential Water Supply",
    icon: "water",
    intro:
      "Reliable water supply is essential for cities, towns, residential communities, and public infrastructure. Pumps transfer water, fill overhead tanks, and support distribution networks.",
    examples: [
      "Municipal water distribution systems",
      "Residential apartments and housing communities",
      "Overhead tank filling and building water supply",
      "Rural drinking-water infrastructure",
      "Community water-supply projects",
    ],
    accent: "from-sky-100 to-cyan-50",
  },
  {
    number: "02",
    slug: "oil-gas-petrochemicals",
    title: "Oil, Gas & Petrochemicals",
    icon: "energy",
    intro:
      "These industries rely on specialised pumping systems for fluid transfer, process operations, utility services, and supporting infrastructure. Every use requires careful attention to reliability, operating conditions, safety, and fluid compatibility.",
    examples: [
      "Industrial water transfer and utility services",
      "Cooling-water circulation",
      "Process-water supply",
      "Supporting water systems at industrial facilities",
      "Specialised pumping applications, subject to material compatibility and safety certification",
    ],
    accent: "from-amber-100 to-orange-50",
  },
  {
    number: "03",
    slug: "construction-mining",
    title: "Construction & Mining",
    icon: "construction",
    intro:
      "Construction projects and mining operations need dependable pumping for water transfer, site drainage, dewatering, dust control, and other demanding work. Equipment must suit site conditions, changing water levels, and heavy-duty operation where required.",
    examples: [
      "Construction-site water supply",
      "Excavation and foundation dewatering",
      "Mine-water transfer and drainage",
      "Dust-suppression water systems",
      "Water management at infrastructure and industrial project sites",
    ],
    accent: "from-stone-200 to-amber-50",
  },
  {
    number: "04",
    slug: "food-beverage-pharma",
    title: "Food, Beverage & Pharmaceuticals",
    icon: "processing",
    intro:
      "Food processing, beverage production, and pharmaceutical manufacturing rely on controlled fluid handling. Pumping equipment must meet specific requirements for hygiene, material compatibility, cleanability, and process integrity.",
    examples: [
      "Water supply for food-processing facilities",
      "Beverage-production utility systems",
      "Industrial process-water transfer",
      "Pharmaceutical facility utility-water systems",
      "Supporting water circulation and other compatible-fluid applications",
    ],
    accent: "from-emerald-100 to-teal-50",
  },
  {
    number: "05",
    slug: "agriculture",
    title: "Agriculture",
    icon: "agriculture",
    intro:
      "Agriculture remains a central focus for Musiri Pumps. Farmers need reliable water delivery to support irrigation, crop growth, and effective water management. Our objective is to help address the challenges associated with conventional energy dependence.",
    examples: [
      "Borewell and open-well water pumping",
      "Agricultural irrigation systems",
      "Farm water distribution",
      "Rural water management",
      "Other suitable agricultural water-transfer requirements",
    ],
    accent: "from-lime-100 to-emerald-50",
  },
];

function SectorIcon({ name }: { name: SectorIconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-14 w-14 text-navy">
      {name === "water" ? (
        <g {...common}>
          <path d="M48 11c-9 14-23 29-23 45a23 23 0 0 0 46 0c0-16-14-31-23-45Z" />
          <path d="M37 59c1 7 5 11 12 13" />
          <path d="M18 82h60" />
        </g>
      ) : null}
      {name === "energy" ? (
        <g {...common}>
          <path d="M48 12 24 82m24-70 24 70M32 57h32M37 42h22M42 27h12M17 82h62M36 48h24M29 66h38" />
          <path d="m38 82 10-16 10 16" />
        </g>
      ) : null}
      {name === "construction" ? (
        <g {...common}>
          <path d="M12 72h67M21 72V50h24v22M25 50V37h17v13M18 37h31l-8-9H25Z" />
          <path d="m46 45 17-15 10 6-14 15 9 8-8 8-13-12M22 79h12m20 0h12" />
          <circle cx="30" cy="72" r="5" />
          <circle cx="64" cy="72" r="5" />
        </g>
      ) : null}
      {name === "processing" ? (
        <g {...common}>
          <path d="M36 14h24M41 14v23L24 69a9 9 0 0 0 8 13h32a9 9 0 0 0 8-13L55 37V14" />
          <path d="M32 65h32M39 55h18M42 72h12" />
          <circle cx="49" cy="46" r="2" />
        </g>
      ) : null}
      {name === "agriculture" ? (
        <g {...common}>
          <circle cx="69" cy="25" r="10" />
          <path d="M69 8v-4m0 42v-4m17-17h4M48 25h4m29-12 3-3M54 40l-3 3M83 40l3 3" />
          <path d="M14 82c15-11 33-17 54-18M18 82c13-15 28-24 47-28M24 82c9-20 22-33 38-40" />
          <path d="M14 82h68" />
        </g>
      ) : null}
    </svg>
  );
}

export default function ApplicationsPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#062f45] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute -right-24 top-8 h-96 w-96 rounded-full bg-teal/25 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">Applications</p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.08] sm:text-6xl">
                From agricultural fields to essential infrastructure.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                At Musiri Pumps, our vision extends far beyond agricultural irrigation. We aim to transform the way water and other compatible fluids are pumped across multiple sectors through innovative pumping technology inspired by the Bhaskara Law of Energy, developed by our founder, Mathan Babu Bhaskaran.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                Agriculture remains a primary focus. We also recognise the role reliable pumping plays in infrastructure, industry, manufacturing, and everyday life.
              </p>
              <Link href="#application-sectors" className="mt-8 inline-flex rounded-md bg-cyan-200 px-6 py-3 text-sm font-bold text-[#082f45] transition hover:bg-white">
                Explore applications
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Application sectors">
              {sectors.map((sector) => (
                <a
                  key={sector.slug}
                  href={`#${sector.slug}`}
                  className={`group flex min-h-36 flex-col justify-between rounded-2xl bg-gradient-to-br ${sector.accent} p-4 text-navy shadow-lg shadow-black/10 transition hover:-translate-y-1 sm:min-h-40 sm:p-5 ${sector.number === "05" ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <span className="flex items-start justify-between">
                    <SectorIcon name={sector.icon} />
                    <span className="text-xs font-bold tracking-[0.16em] text-navy/50">{sector.number}</span>
                  </span>
                  <span className="mt-4 text-sm font-semibold leading-5 sm:text-base">{sector.title}</span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="application-sectors" className="bg-[#f1f8fa] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl sm:mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Where pumping matters</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-5xl">
                Applications shaped around real-world needs
              </h2>
              <p className="mt-5 text-base leading-8 text-steel">
                Our long-term strategy is to expand into industrial and commercial applications, developing or adapting solutions to the requirements of each sector.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {sectors.map((sector) => (
                <article
                  key={sector.slug}
                  id={sector.slug}
                  className="scroll-mt-8 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
                >
                  <div className={`flex items-center gap-4 bg-gradient-to-r ${sector.accent} px-6 py-5`}>
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white/75">
                      <SectorIcon name={sector.icon} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Sector {sector.number}</p>
                      <h3 className="mt-1 font-serif text-xl leading-snug text-navy sm:text-2xl">{sector.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-sm leading-7 text-steel">{sector.intro}</p>
                    <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-teal">Potential applications</h4>
                    <ul className="mt-3 space-y-2.5">
                      {sector.examples.map((example) => (
                        <li key={example} className="flex gap-3 text-sm leading-6 text-[#244b5d]">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Looking ahead</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-5xl">
                A broader future for pumping technology
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-steel">
              <p>
                Musiri Pumps is building its foundation in water-pumping technology with a long-term ambition to serve a much broader industrial and commercial market. We plan to expand beyond agriculture into municipal infrastructure, residential water supply, oil and gas, petrochemicals, construction, mining, food processing, beverages, and pharmaceuticals.
              </p>
              <p>
                Our approach is to understand each industry&apos;s operating conditions, performance expectations, and safety standards, then develop or adapt suitable products. We believe pumping technology should be driven by innovation, practical engineering, and the pursuit of more energy-independent solutions.
              </p>
              <p className="border-l-2 border-teal pl-5 font-serif text-xl leading-8 text-navy">
                Our ambition is to bring dependable pumping technology from farms and residential communities to industrial facilities and major infrastructure projects.
              </p>
              <Link href="/contact" className="inline-flex rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal">
                Discuss an application
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
