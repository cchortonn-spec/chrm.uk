import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Areas We Cover",
  description:
    "South Yorkshire coverage — Sheffield, Doncaster, Rotherham, Barnsley — and UK-wide by appointment.",
  canonicalPath: "/areas-we-cover",
});

const hub = ["Sheffield", "Doncaster", "Rotherham", "Barnsley", "Surrounding"];

export default function AreasWeCoverPage() {
  return (
    <PageShell
      eyebrow="Coverage"
      title="Areas we cover"
      description="South Yorkshire is home. The rest of the UK is by appointment — for the right job."
    >
      <SectionWrapper className="pb-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-medium text-foreground">
              South Yorkshire hub
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              Core coverage across the region and surrounding towns.
            </p>
            <ul className="mt-8 space-y-3">
              {hub.map((place) => (
                <li
                  key={place}
                  className="border-b border-border pb-3 text-sm text-foreground"
                >
                  {place}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium text-foreground">
              UK-wide by appointment
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              We travel for suitable work. We do not claim local presence
              everywhere — South Yorkshire is where the local SEO belongs.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
