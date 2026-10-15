import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FounderPhotoGallery } from "@/components/about/FounderPhotoGallery";
import { founderProfile } from "@/data/about";
import { salesLeadProfile } from "@/data/sales-lead";

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
          </aside>

          <article className="space-y-6 text-base leading-8 text-steel">
            <header className="border-b border-navy/10 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-water">
                Founder Profile
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight text-navy sm:text-4xl">
                {founderProfile.name}
              </h2>
              <p className="mt-2 text-sm font-medium leading-6 text-steel sm:text-base">
                {founderProfile.roles}
              </p>
            </header>
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

        <section className="mt-16 border-t border-navy/10 pt-12" aria-labelledby="sales-lead-name">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.6fr)] lg:gap-12">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-navy/10">
              <Image
                src={salesLeadProfile.photo}
                alt="Mathavaraj Govindan"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
              />
            </div>

            <div className="space-y-5 text-base leading-8 text-steel">
              <header className="border-b border-navy/10 pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-water">
                  Sales &amp; Marketing
                </p>
                <h2 id="sales-lead-name" className="mt-2 font-serif text-3xl leading-tight text-navy sm:text-4xl">
                  {salesLeadProfile.name}
                </h2>
                <p className="mt-2 text-sm font-medium leading-6 text-steel sm:text-base">
                  {salesLeadProfile.role}
                </p>
              </header>

              {salesLeadProfile.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p className="rounded-xl border-l-4 border-water bg-sky-50 px-5 py-4 text-navy">
                <strong>His focus:</strong> {salesLeadProfile.focus}
              </p>
            </div>
          </div>
        </section>

        <FounderPhotoGallery />
      </Container>
    </>
  );
}
