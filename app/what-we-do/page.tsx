import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { SERVICES } from "@/lib/services-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services — Chrome Delete, PPF, Detailing & Paint Correction",
  description:
    "RIGN services in South Yorkshire: chrome delete, paint protection film (PPF), detailing, and paint correction. Mobile from Sheffield & surrounding.",
  canonicalPath: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="What we offer"
      description="Chrome delete, PPF, detailing, and paint correction — each finished properly, without the noise. Choose a service below for full detail."
    >
      <SectionWrapper className="pb-24">
        <ul className="divide-y divide-border border-y border-border">
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <Link
                href={service.href}
                className="group flex flex-col gap-3 py-10 transition-opacity hover:opacity-90 md:flex-row md:items-end md:justify-between md:py-12"
              >
                <div className="max-w-xl">
                  <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                    {service.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary md:text-base">
                    {service.intro.slice(0, 160).trim()}…
                  </p>
                </div>
                <span className="shrink-0 text-xs font-medium tracking-[0.14em] text-foreground-secondary uppercase transition-colors group-hover:text-foreground">
                  View service →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-foreground-secondary">
          Looking for coverage? See{" "}
          <Link
            href="/areas-we-cover"
            className="text-foreground underline-offset-4 hover:underline"
          >
            areas we cover
          </Link>{" "}
          across South Yorkshire and surrounding towns.
        </p>
      </SectionWrapper>
    </PageShell>
  );
}
