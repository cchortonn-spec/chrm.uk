import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { MATERIAL } from "@/lib/material";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "RIGN — refined automotive. Chrome delete, detailing, and paint correction. South Yorkshire based, UK-wide.",
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Refined automotive."
      description="Chrome delete, detailing, and paint correction. Quiet work. Mobile by design."
    >
      <SectionWrapper className="pb-24">
        <div className="max-w-2xl space-y-10">
          <div>
            <h2 className="font-heading text-xl font-medium text-foreground">
              How we work
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              Customers aren&apos;t buying a process. They&apos;re buying a
              cleaner, more refined version of the vehicle they already chose.
              OEM+. Never loud. Always intentional.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-foreground">
              What we do
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              Chrome delete, detailing, and machine polishing / paint
              correction — each finished to the same dealership-grade standard.
              Paint protection (PPF) is in development and isn&apos;t listed
              until it&apos;s ready.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-foreground">
              The material
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              For chrome delete we fit {MATERIAL.brand} {MATERIAL.name} —{" "}
              {MATERIAL.type}, {MATERIAL.thickness},{" "}
              {MATERIAL.adhesive.toLowerCase()}, rated for{" "}
              {MATERIAL.use.toLowerCase()} with{" "}
              {MATERIAL.durability.toLowerCase()}. The best film for the job.
              Dechroming options available.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-foreground">
              What mobile means
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              We travel to you — South Yorkshire as the hub, UK-wide by
              appointment. Fully insured. Dealership-grade standards at your
              location.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
