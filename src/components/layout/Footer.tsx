import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/10 bg-navy-deep text-white">
      <div className="overflow-hidden" aria-hidden="true">
        <svg
          className="block h-20 w-full sm:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="river-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#087987" />
              <stop offset="0.5" stopColor="#32b8c7" />
              <stop offset="1" stopColor="#75dce7" />
            </linearGradient>
          </defs>
          <path
            d="M-30 77C180 12 278 122 488 70s302-60 490-8 311 41 492-14v83H-30V77Z"
            fill="url(#river-gradient)"
            fillOpacity=".22"
          />
          <path
            d="M-30 82C180 17 278 127 488 75s302-60 490-8 311 41 492-14"
            stroke="#75dce7"
            strokeOpacity=".7"
            strokeWidth="2"
          />
          <path
            className="footer-river-flow"
            d="M-20 94c100-29 155-29 255 0s155 29 255 0 155-29 255 0 155 29 255 0 155-29 255 0 155 29 255 0"
            stroke="#b7f5f4"
            strokeOpacity=".75"
            strokeWidth="2"
            strokeDasharray="9 15"
          />
          <path
            d="M-30 77C180 12 278 122 488 70s302-60 490-8 311 41 492-14"
            stroke="#32b8c7"
            strokeOpacity=".6"
            strokeWidth="1"
          />
        </svg>
      </div>
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-water">
            {site.tagline}
          </p>
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
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            {site.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
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
