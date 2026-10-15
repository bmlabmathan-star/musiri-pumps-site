import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { founderProfile } from "@/data/about";

export const metadata: Metadata = {
  title: "About the Founder",
  description:
    "Meet Mathan Babu Bhaskaran, founder of Musiri Pumps and BMLab.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About the Founder"
        description="The researcher and entrepreneur behind Musiri Pumps."
      />

      <Container className="py-12 sm:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(260px,0.78fr)_minmax(0,1.6fr)] lg:gap-14">
          <aside className="mx-auto w-full max-w-sm lg:sticky lg:top-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-navy/10">
              <Image
                src={founderProfile.photo}
                alt="Mathan Babu Bhaskaran at a research event"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover object-[center_18%]"
              />
            </div>
            <div className="mt-5 text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-water">
                Founder
              </p>
              <h2 className="mt-2 font-serif text-2xl text-navy">
                {founderProfile.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-steel">
                {founderProfile.roles}
              </p>
            </div>
          </aside>

          <article className="space-y-6 text-base leading-8 text-steel">
            <p>{founderProfile.introduction}</p>
            {founderProfile.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <p>
              I am also the author of <em>{founderProfile.bookTitle}</em>, a book
              that presents my ideas and research in physics and energy. The book
              is available for purchase on{" "}
              <a
                href={founderProfile.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy underline decoration-water underline-offset-4 hover:text-water"
              >
                Amazon
              </a>
              .
            </p>

            <section className="border-t border-navy/10 pt-7">
              <h2 className="font-serif text-2xl text-navy sm:text-3xl">
                {founderProfile.visionHeading}
              </h2>
              <div className="mt-4 space-y-4">
                {founderProfile.visionParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <blockquote className="rounded-xl border-l-4 border-water bg-sky-50 px-6 py-5 font-medium text-navy">
              {founderProfile.closing}
            </blockquote>
          </article>
        </div>
      </Container>
    </>
  );
}
