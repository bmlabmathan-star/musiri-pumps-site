import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Please wait</p>
      <p className="mt-3 font-serif text-3xl text-navy">Loading this page…</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="h-40 animate-pulse rounded-lg bg-navy/10" />
        <div className="h-40 animate-pulse rounded-lg bg-navy/10" />
        <div className="h-40 animate-pulse rounded-lg bg-navy/10" />
      </div>
    </Container>
  );
}
