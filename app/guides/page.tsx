import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Guides",
  description:
    "Long-form chrome delete guides — scaffold only. Depth first, when ready.",
  canonicalPath: "/guides",
});

export default function GuidesPage() {
  return (
    <PageShell
      eyebrow="Guides"
      title="Guides"
      description="Long-form writing lands here when there is real depth to publish — not thin posts for the sake of a blog."
    >
      <SectionWrapper className="pb-24">
        <div className="border border-border bg-background-secondary px-6 py-16 text-center md:px-12">
          <p className="text-sm text-foreground-secondary">
            Coming in a later phase. Pillar content only — no shallow filler.
          </p>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
