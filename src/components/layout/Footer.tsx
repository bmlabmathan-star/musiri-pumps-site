import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/10 bg-navy-deep text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">{site.shortDescription}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-water">Explore</p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-water">
            Contact placeholders
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            {site.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>{site.hours}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-4 text-xs text-white/60">
          {site.name} website preview. {site.notice}
        </Container>
      </div>
    </footer>
  );
}
