import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <Container>
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-3xl text-navy">{title}</h2>
          {description ? (
            <p className="mt-3 text-base leading-7 text-steel">{description}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
