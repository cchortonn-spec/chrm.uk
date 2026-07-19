import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { GUIDES } from "@/lib/guides-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Guides — Chrome Delete, PPF & South Yorkshire Car Scene",
  description:
    "Practical guides from RIGN: chrome delete explained, PPF vs blackout trim, South Yorkshire car meets, and local drives. Built for owners who want a refined finish.",
  canonicalPath: "/guides",
});

export default function GuidesPage() {
  return (
    <PageShell
      eyebrow="Guides"
      title="Guides"
      description="Straight writing on chrome delete, PPF, and the South Yorkshire car scene — so you can decide what to book, and so the local culture has a proper home online."
    >
      <SectionWrapper className="pb-24">
        <ul className="divide-y divide-border border-y border-border">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={guide.href}
                className="group flex flex-col gap-3 py-10 transition-opacity hover:opacity-90 md:py-12"
              >
                <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  {guide.title}
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                  {guide.excerpt}
                </p>
                <span className="text-xs font-medium tracking-[0.14em] text-foreground-secondary uppercase group-hover:text-foreground">
                  Read guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </PageShell>
  );
}
