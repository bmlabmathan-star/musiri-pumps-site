import type { Metadata } from "next";
import { applications } from "@/data/applications";
import { products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBanner } from "@/components/ui/StatusBanner";

export const metadata: Metadata = {
  title: "Applications",
  description: "Placeholder pump applications for agriculture, domestic, industrial, and other uses.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uses"
        title="Applications"
        description="These sections describe common pump uses in general terms. They are placeholders, not a statement of what MusiR Pumps currently supplies."
      />
      <Container className="space-y-8 py-12">
        <StatusBanner
          tone="info"
          title="Placeholder applications"
          message="Replace this copy in src/data/applications.ts when official use-cases are confirmed."
        />
        <div className="space-y-6">
          {applications.map((application) => {
            const related = products.filter((product) =>
              product.typicalUses.some(
                (use) => use.toLowerCase() === application.title.toLowerCase(),
              ),
            );
            return (
              <article
                key={application.slug}
                id={application.slug}
                className="rounded-lg border border-navy/10 bg-white p-6"
              >
                <h2 className="font-serif text-2xl text-navy">{application.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{application.summary}</p>
                <p className="mt-3 text-sm leading-7 text-steel">{application.details}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                  Related placeholder products
                </p>
                <p className="mt-2 text-sm text-steel">
                  {related.length > 0
                    ? related.map((product) => product.name).join(", ")
                    : "No matching placeholder products yet."}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </>
  );
}
