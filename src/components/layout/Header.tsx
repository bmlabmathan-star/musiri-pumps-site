"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { accountNav, primaryNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

function navClass(active: boolean) {
  return `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
  }`;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src="/musiri-pumps-logo.jpg"
            alt="Musiri Pumps logo"
            width={120}
            height={88}
            priority
            className="h-12 w-[4.25rem] rounded bg-white object-contain sm:h-14 sm:w-20"
          />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide">{site.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.16em] text-water">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${navClass(pathname === item.href)} lg:px-1.5 lg:text-xs xl:px-3 xl:text-sm`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {accountNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.href === "/register"
                  ? "hidden rounded-md bg-copper px-3 py-2 text-sm font-semibold text-white hover:bg-copper-dark xl:inline-flex"
                  : `${navClass(pathname === item.href)} lg:px-1.5 lg:text-xs xl:px-3 xl:text-sm`
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-2 text-sm text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close menu" : "Menu"}
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-navy-deep px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {[...primaryNav, ...accountNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navClass(pathname === item.href)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
