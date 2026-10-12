import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBanner } from "@/components/ui/StatusBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Customer Dashboard",
  description: "Placeholder customer area. Authentication is not connected.",
};

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Customer area"
        title="Customer Dashboard"
        description="This is a layout preview for a signed-in customer area. It is not protected yet."
      />
      <Container className="space-y-6 py-12">
        <StatusBanner
          tone="info"
          title="Not a live account area"
          message="Anyone can open this page while the website is in development. Login will be required after authentication is added."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-lg border border-navy/10 bg-white p-6">
            <h2 className="font-serif text-2xl text-navy">Profile</h2>
            <p className="mt-2 text-sm text-steel">[Customer name to be added after login]</p>
            <p className="text-sm text-steel">[Email to be added after login]</p>
          </section>
          <section className="rounded-lg border border-navy/10 bg-white p-6">
            <h2 className="font-serif text-2xl text-navy">Saved enquiries</h2>
            <div className="mt-4">
              <EmptyState
                title="No enquiries yet"
                message="Enquiry history will appear here after a database is connected."
              />
            </div>
          </section>
        </div>
        <ButtonLink href="/contact" variant="secondary">
          Go to enquiry form
        </ButtonLink>
      </Container>
    </>
  );
}
