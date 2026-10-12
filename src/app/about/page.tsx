import type { Metadata } from "next";
import { aboutContent } from "@/data/about";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBanner } from "@/components/ui/StatusBanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Editable company profile placeholders for MusiR Pumps.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title={aboutContent.heading}
        description={aboutContent.intro}
      />
      <Container className="space-y-8 py-12">
        <StatusBanner tone="info" title="How to edit this page" message="Change the text in src/data/about.ts and src/data/site.ts." />
        <div className="grid gap-6 md:grid-cols-2">
          {aboutContent.sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-navy/10 bg-white p-6">
              <h2 className="font-serif text-2xl text-navy">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-steel">{section.body}</p>
            </article>
          ))}
        </div>
        <p className="text-sm leading-6 text-steel">{aboutContent.notIncluded}</p>
        <p className="text-sm text-steel">
          Contact: {site.email} · {site.phone}
        </p>
      </Container>
    </>
  );
}
