"use client";

import { useEffect, useState } from "react";
import { companyVideos } from "@/data/videos";

export function VideoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    if (isHovered || hasFocus || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % companyVideos.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [activeIndex, hasFocus, isHovered]);

  const video = companyVideos[activeIndex];
  const previous = () =>
    setActiveIndex((current) => (current - 1 + companyVideos.length) % companyVideos.length);
  const next = () => setActiveIndex((current) => (current + 1) % companyVideos.length);

  return (
    <div
      role="region"
      aria-label="Musiri Pumps video gallery"
      className="mx-auto max-w-4xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasFocus(false);
        }
      }}
    >
      <div className="overflow-hidden rounded-lg border border-navy/10 bg-navy shadow-sm">
        <div className="aspect-video">
          <iframe
            key={video.id}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
            title={`Musiri Pumps video ${activeIndex + 1}`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-medium text-steel">
          Video {activeIndex + 1} of {companyVideos.length}
        </p>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-teal underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
        >
          Watch on YouTube
        </a>
        <div className="flex items-center gap-2" aria-label="Choose a video">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous video"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-lg text-navy hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next video"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-lg text-navy hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2" aria-label="Select a video">
        {companyVideos.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show video ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
              activeIndex === index ? "w-8 bg-teal" : "w-2.5 bg-navy/25 hover:bg-navy/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
