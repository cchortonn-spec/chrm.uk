import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { HUB_ONLY_TOWNS, PRIORITY_TOWNS } from "@/lib/locations-data";
import { SERVICES } from "@/lib/services-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Areas We Cover — South Yorkshire & Surrounding",
  description:
    "Chrome delete, PPF, detailing and paint correction across Sheffield, Rotherham, Barnsley, Chesterfield, Doncaster, Leeds, Huddersfield, Wakefield, Pontefract, Featherstone and surrounding areas.",
  canonicalPath: "/areas-we-cover",
});

export default function AreasWeCoverPage() {
  return (
    <PageShell
      eyebrow="Coverage"
      title="Areas we cover"
      description="South Yorkshire is home. We travel the towns around it — and further into West Yorkshire and north Derbyshire by appointment — for chrome delete, PPF, detailing, and paint correction."
    >
      <SectionWrapper className="pb-16">
        <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
          Priority towns
        </p>
        <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          Dedicated local pages
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-secondary">
          Full coverage pages for our busiest South Yorkshire routes — open one
          for services, districts, and how we work in that town.
        </p>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {PRIORITY_TOWNS.map((town) => (
            <li key={town.slug}>
              <Link
                href={town.href}
                className="group flex flex-col gap-2 py-8 transition-opacity hover:opacity-90 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <h3 className="font-heading text-xl font-medium text-foreground md:text-2xl">
                    {town.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm text-foreground-secondary">
                    {town.intro.slice(0, 120).trim()}…
                  </p>
                </div>
                <span className="shrink-0 text-xs font-medium tracking-[0.14em] text-foreground-secondary uppercase group-hover:text-foreground">
                  View area →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper className="pb-16">
        <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
          Also covered
        </p>
        <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          Surrounding towns &amp; areas in between
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground-secondary md:text-base">
          We regularly take work through West Yorkshire and the gaps between our
          hub towns — Leeds, Huddersfield, Wakefield, Pontefract, Featherstone,
          and the villages sitting on those routes. If you&apos;re between two
          places on this page, ask. Mobile by design.
        </p>
        <div className="mt-12 space-y-10">
          {HUB_ONLY_TOWNS.map((town) => (
            <article
              key={town.name}
              className="border-t border-border pt-8"
            >
              <h3 className="font-heading text-lg font-medium text-foreground md:text-xl">
                {town.name}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-secondary">
                {town.body}
              </p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pb-16">
        <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground">
          Services across every area
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <Link
                href={service.href}
                className="inline-flex border border-white/15 px-4 py-2 text-[11px] font-medium tracking-[0.12em] text-foreground uppercase transition-opacity hover:opacity-80"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper className="pb-24">
        <h2 className="font-heading text-xl font-medium text-foreground">
          UK-wide by appointment
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground-secondary">
          We travel further for the right job. We don&apos;t pretend to be local
          everywhere — South Yorkshire is where the local SEO and day-to-day
          routes belong. Outside that, ask.
        </p>
      </SectionWrapper>
    </PageShell>
  );
}
