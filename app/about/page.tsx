import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { MATERIAL } from "@/lib/material";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "RIGN — refined automotive. Chrome delete as the signature craft, with detailing and paint correction alongside.",
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Refined automotive."
      description="Chrome delete is the signature — the proof of craft. Detailing and paint correction sit beside it. One standard. Mobile by design."
    >
      <SectionWrapper className="pb-24">
        <div className="max-w-2xl space-y-10">
          <div>
            <h2 className="font-heading text-xl font-medium text-foreground">
              Why chrome delete leads
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              Customers aren&apos;t buying vinyl. They&apos;re buying a cleaner,
              more refined version of the vehicle they already chose. OEM+.
              Never loud. Always intentional. That&apos;s the standard everything
              else is judged against.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-foreground">
              The fuller offering
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              Alongside chrome delete we offer detailing and machine polishing /
              paint correction — held to the same dealership-grade finish. Paint
              protection (PPF) is in development and isn&apos;t listed until
              it&apos;s ready.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-foreground">
              The material
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              We fit {MATERIAL.brand} {MATERIAL.name} — {MATERIAL.type},{" "}
              {MATERIAL.thickness}, {MATERIAL.adhesive.toLowerCase()}, rated for{" "}
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
