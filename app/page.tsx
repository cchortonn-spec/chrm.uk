import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Hero from "@/components/Hero";
import MaterialTicker from "@/components/MaterialTicker";
import MistBand from "@/components/MistBand";
import SectionWrapper from "@/components/SectionWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";
import { bandBackdrops, recentFitsImages } from "@/lib/images";
import { MATERIAL } from "@/lib/material";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "RIGN | Refined Automotive",
  description:
    "Chrome delete, detailing, and paint correction. South Yorkshire based, UK-wide. Refined automotive — OEM+ finish, mobile by design.",
  canonicalPath: "/",
});

const services = [
  { title: "Chrome delete", hint: "OEM+ finish" },
  { title: "Detailing", hint: "Showroom clean" },
  { title: "Paint correction", hint: "Machine polish" },
  { title: "Badges & emblems", hint: "Quiet blackout" },
  { title: "Window surrounds", hint: "Continuous silhouette" },
  { title: "Grilles & trim", hint: "Unified face" },
];

const whyPoints = [
  {
    title: "One standard",
    body: "Every job — trim, detail, or correction — finished to the same quiet, dealership-grade bar.",
  },
  {
    title: "3M premium film",
    body: `${MATERIAL.shortLine} The best material, fitted properly.`,
  },
  {
    title: "Mobile by design",
    body: "We come to you. Less disruption. Same precision.",
  },
  {
    title: "Intentional finish",
    body: "Factory-look refinement. Nothing aftermarket about it.",
  },
];

const faqPreview = [
  {
    q: "Does chrome delete damage the paint?",
    a: "No. 3M cast-PVC film protects the surface beneath and can be removed later when fitted correctly.",
  },
  {
    q: "How long does it last?",
    a: "Up to 8 years of external durability with our premium 3M wrapping film — not a temporary blackout.",
  },
  {
    q: "Do you travel outside South Yorkshire?",
    a: "Yes. UK-wide by appointment for the right job.",
  },
];

const trustItems = [
  "Fully insured",
  "Mobile service",
  "UK-wide",
  "South Yorkshire based",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 3M material ticker — small strip under hero */}
      <MaterialTicker />

      {/* Trust line — glass pills */}
      <section className="smoke-section border-b border-white/10 bg-background-secondary/80">
        <SectionWrapper className="section-space-sm">
          <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {trustItems.map((item) => (
              <li
                key={item}
                className="glass glass-pill px-4 py-2 text-[10px] font-medium tracking-[0.18em] text-foreground-secondary uppercase sm:text-[11px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </section>

      {/* Services — typographic list */}
      <section className="smoke-section">
        <SectionWrapper className="section-space">
          <BrandMark size="sm" className="mb-8 opacity-70" />
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Services
          </p>
          <h2 className="mt-4 max-w-xl font-heading text-3xl font-medium tracking-tight md:text-4xl">
            What we offer
          </h2>
          <p className="mt-4 max-w-md text-base text-foreground-secondary">
            Exterior trim, detailing, and paint correction — refined work,
            finished properly.
          </p>
          <ul className="mt-14 grid gap-x-12 sm:grid-cols-2">
            {services.map((item) => (
              <li
                key={item.title}
                className="divider-row flex items-baseline justify-between gap-6 py-5 md:py-6"
              >
                <span className="text-base tracking-[0.02em] text-foreground md:text-lg">
                  {item.title}
                </span>
                <span className="shrink-0 text-[11px] tracking-[0.14em] text-accent-label uppercase">
                  {item.hint}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/what-we-do"
              className="glass glass-pill inline-flex px-5 py-2.5 text-xs font-medium tracking-[0.14em] text-foreground uppercase transition-opacity hover:opacity-80"
            >
              View all services →
            </Link>
          </div>
        </SectionWrapper>
      </section>

      {/* Recent fits — quiet photo strip, no captions */}
      <section className="smoke-section section-space border-y border-white/10 bg-background-secondary/50">
        <SectionWrapper>
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Recent fits
          </p>
          <div className="mt-10 flex flex-wrap items-start gap-3 md:gap-4">
            {recentFitsImages.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 50vw, 280px"
                className="h-64 w-auto max-w-full sm:h-72 md:h-80"
              />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/gallery"
              className="text-xs font-medium tracking-[0.14em] text-foreground-secondary uppercase transition-colors hover:text-foreground"
            >
              See more →
            </Link>
          </div>
        </SectionWrapper>
      </section>

      {/* Why RIGN — ghost-numbered editorial list */}
      <section className="smoke-section">
        <SectionWrapper className="section-space">
          <BrandMark size="sm" className="mb-8 opacity-70" />
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Why RIGN
          </p>
          <h2 className="mt-4 max-w-lg font-heading text-3xl font-medium tracking-tight md:text-4xl">
            Engineered. Intentional. Premium.
          </h2>
          <ul className="mt-14">
            {whyPoints.map((point, index) => (
              <li
                key={point.title}
                className="divider-row flex gap-6 py-8 md:gap-10 md:py-10"
              >
                <span className="ghost-number shrink-0" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 pt-1">
                  <h3 className="font-heading text-xl font-medium tracking-tight text-foreground md:text-2xl">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground-secondary">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </section>

      {/* Dealerships — Range Rover SVR backdrop */}
      <MistBand
        className="border-t border-white/10"
        src={bandBackdrops.dealerships}
      >
        <SectionWrapper className="section-space">
          <Link
            href="/dealerships"
            className="group flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Trade
              </p>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                For dealerships
              </h2>
              <p className="mt-4 max-w-md text-base text-foreground-secondary">
                Consistent finish. Reliable turnaround. Built for repeat work.
              </p>
            </div>
            <span className="text-xs font-medium tracking-[0.14em] text-foreground-secondary uppercase transition-colors group-hover:text-foreground">
              Learn more →
            </span>
          </Link>
        </SectionWrapper>
      </MistBand>

      {/* Areas — black SUV hero backdrop */}
      <MistBand className="border-y border-white/10" src={bandBackdrops.areas}>
        <SectionWrapper className="section-space">
          <Link
            href="/areas-we-cover"
            className="group flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Coverage
              </p>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                Areas we cover
              </h2>
              <p className="mt-4 max-w-md text-base text-foreground-secondary">
                South Yorkshire hub. UK-wide by appointment.
              </p>
            </div>
            <span className="text-xs font-medium tracking-[0.14em] text-foreground-secondary uppercase transition-colors group-hover:text-foreground">
              See areas →
            </span>
          </Link>
        </SectionWrapper>
      </MistBand>

      {/* FAQ — Mercedes-AMG backdrop */}
      <MistBand src={bandBackdrops.faq}>
        <SectionWrapper className="section-space">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                FAQ
              </p>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight md:text-4xl">
                Straight answers
              </h2>
            </div>
            <Link
              href="/faq"
              className="glass glass-pill inline-flex px-5 py-2.5 text-xs font-medium tracking-[0.14em] text-foreground-secondary uppercase transition-colors hover:text-foreground"
            >
              All questions →
            </Link>
          </div>
          <div className="mt-14 border-t border-white/10">
            {faqPreview.map((item) => (
              <div
                key={item.q}
                className="border-b border-white/10 py-7 md:py-9"
              >
                <h3 className="font-heading text-lg font-medium text-foreground md:text-xl">
                  {item.q}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground-secondary">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </MistBand>

      {/* Closing CTA — open statement, no box */}
      <section className="section-space border-t border-white/10">
        <SectionWrapper>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <BrandMark size="md" className="opacity-80" />
            </div>
            <h2 className="font-heading text-3xl font-medium tracking-tight md:text-4xl">
              Send four photos.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-foreground-secondary">
              Front, back, both sides. Tell us what you want done. We&apos;ll
              come back with a price.
            </p>
            <div className="mt-10 flex justify-center">
              <WhatsAppButton variant="hero" label="Get Your Quote" />
            </div>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
