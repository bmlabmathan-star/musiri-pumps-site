import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">404</p>
      <h1 className="mt-3 font-serif text-3xl text-navy">Page not found</h1>
      <p className="mt-3 max-w-xl text-steel">
        That address is not part of this website yet. Use the menu or return to the home page.
      </p>
      <div className="mt-6">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </Container>
  );
}
