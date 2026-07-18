import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description:
    "Chrome delete FAQ — paint safety, longevity, removal, cost, and UK travel from South Yorkshire.",
  canonicalPath: "/faq",
});

const faqs = [
  {
    q: "Does chrome delete damage the paint underneath?",
    a: "No. We use 3M premium cast-PVC wrapping film with a grey permanent adhesive. It is designed for exterior use and protects the surface beneath. When removed correctly, the original finish remains.",
  },
  {
    q: "How long does a chrome delete wrap last?",
    a: "Up to 8 years of durability with our 3M 90-micron premium vehicle wrapping film — external grade, not a short-lived blackout.",
  },
  {
    q: "What film do you use?",
    a: "3M Premium Vehicle Wrapping Film — cast-PVC, 90 micron, grey permanent adhesive, rated for external use. Dechroming options are available.",
  },
  {
    q: "Can it be removed later?",
    a: "Yes. That is part of the point — a reversible refinement, not a permanent modification.",
  },
  {
    q: "How much does chrome delete cost?",
    a: "It depends on components, vehicle size, and finish. Send four photos for an accurate quote.",
  },
  {
    q: "Do you travel outside South Yorkshire?",
    a: "Yes. UK-wide by appointment when the job warrants it.",
  },
];

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Questions."
      description="Direct answers. No padding."
    >
      <SectionWrapper className="pb-24">
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <div key={item.q} className="py-10">
              <h2 className="font-heading text-lg font-medium text-foreground md:text-xl">
                {item.q}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
