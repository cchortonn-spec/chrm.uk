"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  homeSlideshowDesktop,
  homeSlideshowMobile,
  type SiteImage,
} from "@/lib/images";

const INTERVAL_MS = 3000;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function AutoSlides({
  images,
  className,
  sizes,
}: {
  images: SiteImage[];
  className: string;
  sizes: string;
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    () => false
  );

  useEffect(() => {
    if (reduceMotion || images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [images.length, reduceMotion]);

  return (
    <div
      className={`work-slideshow relative overflow-hidden bg-black ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={i === 0}
          className={`object-cover object-center transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          draggable={false}
        />
      ))}
    </div>
  );
}

/**
 * Full-width work strip — portrait frame on mobile, landscape on desktop.
 * Auto-advances every 3s. No arrows, dots, or swipe.
 */
export default function WorkSlideshow() {
  return (
    <section className="smoke-section border-y border-white/10 bg-background-secondary/50">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
          Our work
        </p>
        <h2 className="mt-4 max-w-xl font-heading text-3xl font-medium tracking-tight md:text-4xl">
          Finished properly.
        </h2>

        {/* Mobile: 1080×1920 (9:16) */}
        <div className="mt-10 md:hidden">
          <AutoSlides
            images={homeSlideshowMobile}
            className="aspect-[9/16] w-full max-w-md mx-auto select-none touch-none pointer-events-none"
            sizes="100vw"
          />
        </div>

        {/* Desktop: 1920×1080 (16:9) */}
        <div className="mt-10 hidden md:block">
          <AutoSlides
            images={homeSlideshowDesktop}
            className="aspect-video w-full select-none touch-none pointer-events-none"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
}
