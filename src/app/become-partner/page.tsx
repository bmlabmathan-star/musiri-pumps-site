import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBanner } from "@/components/ui/StatusBanner";

export const metadata: Metadata = {
  title: "Become a Partner",
  description: "Learn how to enquire about becoming a Musiri Pumps dealer.",
};

export default function BecomePartnerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dealer opportunities"
        title="Become a Musiri Pumps Partner"
        description="Interested in becoming a dealer? We welcome enquiries from businesses and individuals interested in working with Musiri Pumps."
      />
      <Container className="space-y-8 py-12">
        <section className="rounded-lg border border-navy/10 bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-navy">Let’s start a conversation</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-steel">
            Share your name, business details, location, and interest through our contact page so we
            can understand your dealer enquiry.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <ButtonLink href="/contact">Go to the contact form</ButtonLink>
            <Link href="/products" className="text-sm font-semibold text-teal hover:text-navy">
              Browse products
            </Link>
          </div>
        </section>
        <StatusBanner
          tone="info"
          title="Enquiry form preview"
          message="The contact form currently checks your input in the browser only. It does not send or save dealer enquiries until a backend is connected."
        />
      </Container>
    </>
  );
}
