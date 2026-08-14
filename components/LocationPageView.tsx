import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import type { TownDef } from "@/lib/locations-data";
import { PRIORITY_TOWNS } from "@/lib/locations-data";
import { SERVICES } from "@/lib/services-data";
import {
  breadcrumbSchema,
  localBusinessNode,
} from "@/lib/seo-schema";

type LocationPageViewProps = {
  town: TownDef;
};

export default function LocationPageView({ town }: LocationPageViewProps) {
  const otherTowns = PRIORITY_TOWNS.filter((t) => t.slug !== town.slug);

  const localBusiness = {
    "@context": "https://schema.org",
    ...localBusinessNode({
      areaServed: [
        { "@type": "City", name: town.name },
        { "@type": "AdministrativeArea", name: "South Yorkshire" },
      ],
    }),
  };

  return (
    <>
      <JsonLd
        data={[
          localBusiness,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas we cover", path: "/areas-we-cover" },
            { name: town.name, path: town.href },
          ]),
        ]}
      />

      <PageShell
        eyebrow={town.region}
        title={town.h1}
        description={town.intro}
      >
        <SectionWrapper className="pb-16">
          <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Local coverage in {town.name}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground-secondary md:text-base">
            {town.localContext}
          </p>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Services in {town.name}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            What we offer here
          </h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {SERVICES.map((service) => {
              const href = service.townPages?.[town.slug] || service.href;

              return (
                <li key={service.slug}>
                  <Link
                    href={href}
                    className="group flex items-baseline justify-between gap-6 py-6 transition-opacity hover:opacity-90"
                  >
                    <span className="font-heading text-lg font-medium text-foreground md:text-xl">
                      {service.name}
                    </span>
                    <span className="shrink-0 text-[11px] tracking-[0.14em] text-foreground-secondary uppercase group-hover:text-foreground">
                      Details →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Areas within {town.name} we cover
          </h2>
          <p className="mt-4 max-w-xl text-sm text-foreground-secondary">
            Mobile across the town and nearby districts — ask if your area
            isn&apos;t listed.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {town.districts.map((place) => (
              <li
                key={place}
                className="border-b border-border pb-3 text-sm text-foreground"
              >
                {place}
              </li>
            ))}
          </ul>
        </SectionWrapper>

        <SectionWrapper className="pb-24">
          <h2 className="font-heading text-xl font-medium text-foreground">
            Nearby towns
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {otherTowns
              .filter((t) => town.nearby.includes(t.name))
              .map((t) => (
                <li key={t.slug}>
                  <Link
                    href={t.href}
                    className="inline-flex border border-white/15 px-4 py-2 text-[11px] font-medium tracking-[0.12em] text-foreground uppercase transition-opacity hover:opacity-80"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-8 text-sm text-foreground-secondary">
            <Link
              href="/areas-we-cover"
              className="underline-offset-4 hover:underline"
            >
              Full areas we cover →
            </Link>
          </p>
        </SectionWrapper>
      </PageShell>
    </>
  );
}
