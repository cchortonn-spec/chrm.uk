import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { heroImage, heroImageMobile } from "@/lib/images";

type HeroProps = {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
};

/**
 * Full-bleed first viewport. Portrait photo on mobile, landscape on desktop.
 * Sized so the material ticker sits on the bottom edge before scroll.
 */
export default function Hero({
  headline = "Refined automotive.",
  subheadline = "Chrome delete, detailing, and paint correction. South Yorkshire based. UK-wide.",
  ctaLabel = "Get Your Quote",
}: HeroProps) {
  return (
    <section className="relative flex min-h-0 w-full flex-1 items-end overflow-hidden bg-background">
      {/* Mobile portrait hero */}
      <Image
        src={heroImageMobile.src}
        alt={heroImageMobile.alt}
        fill
        priority
        sizes="100vw"
        className="animate-gentle-scale object-cover object-center md:hidden"
      />
      {/* Desktop landscape hero */}
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="animate-gentle-scale hidden object-cover object-center md:block"
      />

      <div className="gloss-sheen absolute inset-0" aria-hidden />
      <div className="hero-glass absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-28 md:px-8 md:pb-14 md:pt-32">
        <h1 className="animate-fade-up max-w-xl font-heading text-[1.85rem] font-medium tracking-tight text-foreground [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="animate-fade-up animate-delay-1 mt-4 max-w-md text-sm leading-relaxed text-foreground-secondary [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] md:mt-5 md:text-lg">
          {subheadline}
        </p>
        <div className="animate-fade-up animate-delay-2 mt-8 flex flex-wrap items-center gap-5 md:mt-9 md:gap-6">
          <WhatsAppButton variant="hero" label={ctaLabel} />
          <Link
            href="/gallery"
            className="text-[11px] font-medium tracking-[0.16em] text-accent-label uppercase transition-colors duration-300 hover:text-foreground"
          >
            See our work →
          </Link>
        </div>
      </div>
    </section>
  );
}
