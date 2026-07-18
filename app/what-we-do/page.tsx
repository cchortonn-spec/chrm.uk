import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { MATERIAL } from "@/lib/material";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "What We Chrome-Delete",
  description:
    "Badge, window trim, grille, bumper, door handle, and mirror cap chrome delete — specialist exterior trim styling.",
  canonicalPath: "/what-we-do",
});

const sections = [
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
      title="What we chrome-delete"
      description={`Exterior trim, one component at a time — finished with ${MATERIAL.brand} ${MATERIAL.name}. ${MATERIAL.durability}.`}
    >
      <SectionWrapper className="pb-24">
        <div className="mb-14 max-w-2xl border-b border-border pb-10">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Material
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {MATERIAL.brand} {MATERIAL.name}
          </h2>
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
          {sections.map((section) => (
            <article key={section.title} className="py-12 md:py-14">
              <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
