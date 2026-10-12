import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/forms/LoginForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBanner } from "@/components/ui/StatusBanner";

export const metadata: Metadata = {
  title: "Customer Login",
  description: "Login form preview. Authentication is not connected yet.",
};

export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Customer Login"
        description="This screen is a login form only. It does not sign anyone in."
      />
      <Container className="mx-auto max-w-lg space-y-6 py-12">
        <StatusBanner
          tone="info"
          title="Authentication not connected"
          message="You can check that the fields work. No password is stored and no session is created."
        />
        <LoginForm />
        <p className="text-sm text-steel">
          Need an account later?{" "}
          <Link href="/register" className="font-semibold text-teal hover:text-navy">
            Open the registration form
          </Link>
        </p>
        <p className="text-sm text-steel">
          Preview the future customer area:{" "}
          <Link href="/dashboard" className="font-semibold text-teal hover:text-navy">
            Customer Dashboard
          </Link>
        </p>
      </Container>
    </>
  );
}
