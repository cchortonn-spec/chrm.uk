import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { heroImage } from "@/lib/images";

type HeroProps = {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
};

/**
 * Full-bleed first viewport. Text floats directly over the photo —
 * no boxed card. A soft glossy sheen sweeps the image for a premium feel.
 */
export default function Hero({
  headline = "Refined automotive.",
  subheadline = "Chrome delete as the signature. Detailing and paint correction alongside. South Yorkshire based. UK-wide.",
  ctaLabel = "Get Your Quote",
}: HeroProps) {
  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-background">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="animate-gentle-scale object-cover object-center"
      />

      {/* Glossy sheen sweep */}
      <div className="gloss-sheen absolute inset-0" aria-hidden />

      {/* Depth gradient so text stays legible */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-24">
        <h1 className="animate-fade-up max-w-xl font-heading text-3xl font-medium tracking-tight text-foreground [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="animate-fade-up animate-delay-1 mt-5 max-w-md text-base leading-relaxed text-foreground-secondary [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] md:text-lg">
          {subheadline}
        </p>
        <div className="animate-fade-up animate-delay-2 mt-9 flex flex-wrap items-center gap-4">
          <WhatsAppButton variant="hero" label={ctaLabel} />
          <Link
            href="/gallery"
            className="text-xs font-medium tracking-[0.14em] text-accent-label uppercase transition-colors duration-300 hover:text-foreground"
          >
            See our work →
          </Link>
        </div>
      </div>
    </section>
  );
}
