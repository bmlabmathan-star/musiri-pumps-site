import { brandPurpose, coreValues } from "@/data/brand";
import { site } from "@/data/site";
import { VideoGallery } from "@/components/videos/VideoGallery";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="font-serif text-4xl leading-tight sm:text-5xl">{site.name}</h1>
            <p className="mt-1 max-w-xl text-base leading-7 text-white/80">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/products">View products</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact us
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-navy-deep p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-water">
              Our principle
            </p>
            <h2 className="mt-3 font-serif text-2xl text-white">Bhaskara Law of Energy</h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Our original finding, the Bhaskara Law of Energy, proposes that energy can be created
              and destroyed beyond conventional thermodynamics. We have built our pumps around this
              principle, applying it to the movement and continued flow of water. Our vision is to
              make this approach serve agricultural, industrial, and residential communities without
              external fuel or electricity.
            </p>
          </div>
        </Container>
      </section>

      <Container className="pt-10">
        <section
          aria-labelledby="book-callout-title"
          className="rounded-lg border border-teal/25 bg-white px-5 py-6 text-center sm:px-8"
        >
          <h2
            id="book-callout-title"
            className="motion-safe:animate-pulse text-lg font-bold text-navy sm:text-xl"
          >
            Want to know more about Bhaskara Law?
          </h2>
          <p className="mt-2 text-sm leading-6 text-steel sm:text-base">
            The book <span className="font-semibold">Physics For Perpetual</span> is available on
            Amazon.
          </p>
          <a
            href="https://www.amazon.in/Physics-Perpetual-Groundbreaking-Destruction-Perspectives/dp/9334450355"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            Buy the book on Amazon
          </a>
        </section>
      </Container>

      <Section
        eyebrow="Our purpose"
        title="Vision & Mission"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-navy/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Our vision</p>
            <p className="mt-4 font-serif text-xl leading-8 text-navy">{brandPurpose.vision}</p>
          </article>
          <article className="rounded-lg border border-navy/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Our mission</p>
            <p className="mt-4 font-serif text-xl leading-8 text-navy">{brandPurpose.mission}</p>
          </article>
        </div>

        <div className="mt-14">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Our values</p>
            <h3 className="mt-2 font-serif text-3xl text-navy">What Drives Us</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-navy/10 bg-white p-5"
              >
                <h4 className="font-serif text-xl text-navy">{value.title}</h4>
                <p className="mt-3 text-sm leading-6 text-steel">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow="Watch"
        title="Videos Gallery"
      >
        <VideoGallery />
      </Section>

      <section className="bg-navy py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl">Interested in becoming a dealer?</h2>
            <p className="mt-2 max-w-xl text-white/75">
              We welcome people interested in becoming a Musiri Pumps dealer. Click below to learn
              more and get in touch.
            </p>
          </div>
          <ButtonLink href="/become-partner">Click here to become a dealer</ButtonLink>
        </Container>
      </section>
    </>
  );
}
