"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Error</p>
      <h1 className="mt-3 font-serif text-3xl text-navy">This page could not be loaded</h1>
      <p className="mt-3 max-w-xl text-steel">
        Something went wrong while showing this screen. You can try again. No customer data was
        sent, because the website is not connected to a backend yet.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="mt-6 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white"
      >
        Try again
      </button>
    </Container>
  );
}
