import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { MATERIAL } from "@/lib/material";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Chrome delete, detailing, and machine polishing / paint correction — refined automotive services from RIGN.",
  canonicalPath: "/what-we-do",
});

const chromeDeleteSections = [
  {
    title: "Badge & emblem delete",
    body: "Factory badges and emblems, finished in satin or gloss black. Cleaner lines. Same presence.",
  },
  {
    title: "Window trim / surround delete",
    body: "Window surrounds blacked out for a continuous, showroom-quiet silhouette.",
  },
  {
    title: "Grille delete",
    body: "Front grille trim refined to match the rest of the exterior — no aftermarket shout.",
  },
  {
    title: "Bumper trim delete",
    body: "Lower and upper bumper chrome, brought into a single dark finish.",
  },
  {
    title: "Door handle delete",
    body: "Handles finished to sit with the body colour language — subtle, precise.",
  },
  {
    title: "Mirror cap delete",
    body: "Mirror caps blacked out for a cohesive OEM+ look across the vehicle.",
  },
];

export default function WhatWeDoPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="What we offer"
      description="Chrome delete leads. Detailing and paint correction sit beside it — one ladder, one standard."
    >
      <SectionWrapper className="pb-24">
        {/* Tier 1 — Chrome Delete (signature) */}
        <div className="mb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Signature
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Chrome delete
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-secondary md:text-base">
            Exterior trim, one component at a time — finished with{" "}
            {MATERIAL.brand} {MATERIAL.name}. {MATERIAL.durability}.
          </p>

          <div className="mt-10 mb-10 max-w-2xl border-b border-border pb-10">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              Material
            </p>
            <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-foreground">
              {MATERIAL.brand} {MATERIAL.name}
            </h3>
            <ul className="mt-6 space-y-2 text-sm text-foreground-secondary">
              <li>{MATERIAL.type}</li>
              <li>{MATERIAL.durability}</li>
              <li>{MATERIAL.use}</li>
              <li>{MATERIAL.thickness}</li>
              <li>{MATERIAL.adhesive}</li>
              <li>{MATERIAL.dechroming}</li>
            </ul>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {chromeDeleteSections.map((section) => (
              <article key={section.title} className="py-10 md:py-12">
                <h3 className="font-heading text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  {section.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Tier 2 — Detailing */}
        <div className="mb-16 border-t border-border pt-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Offered now
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Detailing
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-secondary md:text-base">
            Exterior and interior detailing held to the same standard as our
            chrome delete work — quiet, thorough, showroom-ready. Ask when you
            send photos.
          </p>
        </div>

        {/* Tier 3 — Machine polishing / paint correction */}
        <div className="border-t border-border pt-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Offered now
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Machine polishing / paint correction
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-secondary md:text-base">
            Swirl removal and paint correction via machine polish. Available
            now — we&apos;ll scope it properly from your photos before quoting.
          </p>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
