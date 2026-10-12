import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-navy/10 bg-navy text-white">
      <Container className="py-12 sm:py-16">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-water">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{description}</p>
      </Container>
    </div>
  );
}
