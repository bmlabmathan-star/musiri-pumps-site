import Image from "next/image";
import { founderGalleryRows } from "@/data/founder-gallery";

export function FounderPhotoGallery() {
  return (
    <section className="mt-14 overflow-hidden" aria-labelledby="founder-gallery-title">
      <div className="mb-5">
        <h2 id="founder-gallery-title" className="font-serif text-2xl text-navy sm:text-3xl">
          Moments &amp; Milestones
        </h2>
      </div>

      <div className="space-y-4">
        {founderGalleryRows.map((row, rowIndex) => {
          const images = [...row, ...row];
          return (
            <div
              key={rowIndex}
              className="founder-gallery-rail overflow-x-auto rounded-xl"
              aria-label={`Founder photo row ${rowIndex + 1}`}
            >
              <div
                className={`founder-gallery-track flex w-max gap-4 py-1 ${
                  rowIndex === 1 ? "founder-gallery-track-reverse" : ""
                }`}
              >
                {images.map((src, imageIndex) => (
                  <div
                    key={`${src}-${imageIndex}`}
                    className="relative h-36 w-56 shrink-0 overflow-hidden rounded-xl bg-slate-200 shadow-sm ring-1 ring-navy/10 sm:h-44 sm:w-72"
                  >
                    <Image
                      src={src}
                      alt={imageIndex < row.length ? "Founder at a research, book, or industry event" : ""}
                      fill
                      sizes="(max-width: 640px) 224px, 288px"
                      className="object-cover"
                      aria-hidden={imageIndex >= row.length}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
