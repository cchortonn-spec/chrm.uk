import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "For Dealerships",
  description:
    "Trade chrome delete, detailing, and paint correction for dealerships — turnaround, bulk work, invoicing, consistent finish.",
  canonicalPath: "/dealerships",
});

const points = [
  {
    title: "Turnaround",
    body: "Scheduled mobile visits that fit your workshop rhythm — not the other way around.",
  },
  {
    title: "Repeat & bulk",
    body: "Same process, same finish, vehicle after vehicle. Built for trade volume.",
  },
  {
    title: "Invoicing",
    body: "Clear paperwork. Straightforward commercial terms. No retail theatre.",
  },
  {
    title: "Consistency",
    body: "One specialist standard across your stock — OEM+ every time.",
  },
];

export default function DealershipsPage() {
  return (
    <PageShell
      eyebrow="Trade"
      title="For dealerships"
      description="Trade service for dealerships — chrome delete, detailing, and paint correction. Reliable, consistent, ready for repeat work."
    >
      <SectionWrapper className="pb-24">
        <div className="grid gap-12 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="border-t border-border pt-8">
              <h2 className="font-heading text-lg font-medium text-foreground">
                {point.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
