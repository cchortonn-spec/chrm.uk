import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "What affects the quote — scope of work, vehicle size, and finish. Send photos for a clear price.",
  canonicalPath: "/pricing",
});

const factors = [
  {
    title: "Number of components",
    body: "A single badge is different work from a full surround, grille, and handle set.",
  },
  {
    title: "Vehicle size & complexity",
    body: "Larger platforms and intricate trim paths take more time and material.",
  },
  {
    title: "Finish",
    body: "Satin and gloss black each have their place — chosen to suit the vehicle, not a trend.",
  },
];

export default function PricingPage() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="What affects cost"
      description="Transparent ranges land with final content. Until then — the factors that shape a quote."
    >
      <SectionWrapper className="pb-24">
        <div className="grid gap-12 md:grid-cols-3">
          {factors.map((factor) => (
            <div key={factor.title}>
              <h2 className="font-heading text-lg font-medium text-foreground">
                {factor.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                {factor.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-lg text-sm text-foreground-secondary">
          Send four photos for a precise price. No calculator. No guesswork from
          a form alone.
        </p>
      </SectionWrapper>
    </PageShell>
  );
}
