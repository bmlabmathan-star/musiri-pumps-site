import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Become a Partner",
  description:
    "Join Musiri Pumps in exploring a new direction in water-pumping technology and a more energy-independent future.",
};

const benefits = [
  {
    number: "01",
    title: "Be part of a purpose-driven mission",
    description:
      "Join a venture that aims to rethink conventional water-pumping technology and explore new possibilities in energy utilisation, with innovation and environmental responsibility at its heart.",
  },
  {
    number: "02",
    title: "Contribute to a greener future",
    description:
      "We welcome people who want to help reduce reliance on fossil fuels and support more sustainable approaches to essential services.",
  },
  {
    number: "03",
    title: "Help bring innovation to communities",
    description:
      "Water pumping serves essential needs, from agricultural fields to homes and industrial facilities. Partners can help introduce new solutions to the communities and industries they know.",
  },
  {
    number: "04",
    title: "Grow a network with a shared vision",
    description:
      "Be part of a network of committed partners who share our values, believe in meaningful innovation, and want to help bring new technology to wider audiences.",
  },
  {
    number: "05",
    title: "Take part in a journey beyond business",
    description:
      "This is about exploring new possibilities, challenging conventional approaches, and working towards a future where technological progress and environmental responsibility go hand in hand.",
  },
];

const partnerTypes = [
  "Agricultural equipment dealers and distributors",
  "Water-pump dealers and industrial equipment suppliers",
  "Entrepreneurs and business organisations who share our vision",
  "Individuals and institutions committed to environmental innovation",
  "Organisations interested in exploring suitable applications of our pumping technology",
];

export default function BecomePartnerPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#062f45] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/25 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">Become a partner</p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.08] sm:text-6xl">
                Join us in our mission to let Earth remain.
              </h1>
              <p className="mt-6 font-serif text-xl leading-relaxed text-white/90 sm:text-2xl">
                Together, we can rethink the future of water pumping.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
                At <strong className="text-white">Musiri Pumps</strong>, we believe meaningful innovation begins with a purpose greater than business itself. Our mission is to explore a new direction in water-pumping technology based on the <strong className="text-white">Bhaskara Law of Energy</strong>, developed by our founder, Mathan Babu Bhaskaran.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                We envision a future where water pumping is less dependent on conventional energy sources. This vision calls for people who believe in innovation, care about our planet, and want to help bring meaningful change.
              </p>
              <p className="mt-5 font-semibold text-cyan-100">
                We are looking for partners who share our commitment to Mother Earth.
              </p>
              <Link href="#partner-invitation" className="mt-8 inline-flex rounded-md bg-cyan-200 px-6 py-3 text-sm font-bold text-[#082f45] transition hover:bg-white">
                Explore partnership
              </Link>
            </div>

            <figure className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-3 rotate-1 rounded-[2rem] bg-cyan-200/20" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/20 bg-white shadow-2xl shadow-black/30">
                <Image
                  src="/partnering-greener-future.png"
                  alt="Musiri Pumps partnering for a greener future, with a mission to let Earth remain"
                  width={1536}
                  height={1024}
                  priority
                  className="aspect-[3/2] w-full object-contain"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>
            </figure>
          </div>
        </Container>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Why partner with us</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-5xl">
                Why become a Musiri Pumps partner?
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <article key={benefit.number} className="rounded-2xl border border-navy/10 bg-[#f7fbfc] p-6 sm:p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-teal">
                    {benefit.number}
                  </span>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-navy">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f1f8fa] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Who we welcome</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-navy sm:text-5xl">
                Who can become our partner?
              </h2>
              <p className="mt-6 text-base leading-8 text-steel">
                We are especially interested in connecting with people who believe in our mission and want to contribute to its development and wider adoption.
              </p>
            </div>
            <ul className="divide-y divide-navy/10 border-y border-navy/10">
              {partnerTypes.map((partnerType, index) => (
                <li key={partnerType} className="flex gap-5 py-5 text-base leading-7 text-[#244b5d]">
                  <span className="pt-0.5 text-sm font-bold text-teal">0{index + 1}</span>
                  <span>{partnerType}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="partner-invitation" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[2rem] bg-[#082f45] px-7 py-10 text-white sm:px-12 sm:py-14">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Our invitation to you</p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
                Help us make room for a better future.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80">
                If you truly want to help save Mother Earth, we invite you to connect with us. You do not need to share our vision just because it is new. We welcome sincere conversations, thoughtful questions, and people who are genuinely interested in understanding our technology and the mission behind it.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                Reach out, share your interest, and tell us how you would like to be part of this journey. We look forward to connecting with individuals and organisations who share our commitment to innovation and a better future for our planet.
              </p>

              <div className="mt-9 flex flex-col gap-5 rounded-2xl border border-white/15 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Interested in becoming a dealer?</p>
                  <p className="mt-2 text-sm text-white/75">For dealership enquiries and partnership discussions, contact our team.</p>
                  <a href="mailto:contact@musiripumps.com" className="mt-3 inline-flex text-base font-semibold text-white underline decoration-cyan-200 underline-offset-4 hover:text-cyan-100">
                    contact@musiripumps.com
                  </a>
                </div>
                <Link href="/contact" className="inline-flex shrink-0 justify-center rounded-md bg-cyan-200 px-6 py-3 text-sm font-bold text-[#082f45] transition hover:bg-white">
                  Start a conversation
                </Link>
              </div>
            </div>
            <div className="py-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Musiri Pumps</p>
              <p className="mt-3 font-serif text-3xl text-navy sm:text-4xl">Let Earth Remain.</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-steel">Join the mission. Be part of the change.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
