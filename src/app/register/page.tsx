import type { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBanner } from "@/components/ui/StatusBanner";

export const metadata: Metadata = {
  title: "Customer Registration",
  description: "Registration form preview. Accounts are not created yet.",
};

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Customer Registration"
        description="This screen collects sign-up details for later. It does not create an account."
      />
      <Container className="mx-auto max-w-lg space-y-6 py-12">
        <StatusBanner
          tone="info"
          title="Registration not connected"
          message="When the form looks complete, nothing is saved. A database can be added later."
        />
        <RegisterForm />
        <p className="text-sm text-steel">
          Already have a future account?{" "}
          <Link href="/login" className="font-semibold text-teal hover:text-navy">
            Open the login form
          </Link>
        </p>
      </Container>
    </>
  );
}
