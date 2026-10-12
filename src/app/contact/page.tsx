import type { Metadata } from "next";
import { site } from "@/data/site";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBanner } from "@/components/ui/StatusBanner";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Enquiry form for MusiR Pumps. Submissions are not sent until a backend is connected.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Enquiries"
        title="Contact Us"
        description="Use this form to check that your details are complete. Messages are not emailed or stored yet."
      />
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <StatusBanner
            tone="info"
            title="Not connected"
            message="The form validates your input on this page only. It does not send an enquiry."
          />
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
        <aside className="h-fit rounded-lg border border-navy/10 bg-white p-6">
          <h2 className="font-serif text-2xl text-navy">Contact details</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-steel">
            <li>Email: {site.email}</li>
            <li>Phone: {site.phone}</li>
            {site.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-steel">
            For enquiries, contact us by email or phone.
          </p>
        </aside>
      </Container>
    </>
  );
}
