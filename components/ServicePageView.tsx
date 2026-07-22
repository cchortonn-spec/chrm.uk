import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import type { ServiceDef } from "@/lib/services-data";
import { SERVICES } from "@/lib/services-data";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/seo-schema";

/** Town links shown on every service page (priority towns). */
const TOWN_LINKS = [
  { slug: "sheffield", href: "/areas-we-cover/sheffield", label: "Sheffield" },
  {
    slug: "rotherham",
    href: "/areas-we-cover/rotherham",
    label: "Rotherham",
  },
  { slug: "barnsley", href: "/areas-we-cover/barnsley", label: "Barnsley" },
  {
    slug: "chesterfield",
    href: "/areas-we-cover/chesterfield",
    label: "Chesterfield",
  },
  {
    slug: "doncaster",
    href: "/areas-we-cover/doncaster",
    label: "Doncaster",
  },
];

type ServicePageViewProps = {
  service: ServiceDef;
};

export default function ServicePageView({ service }: ServicePageViewProps) {
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.h1,
            description: service.metaDescription,
            url: service.href,
          }),
          faqPageSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/what-we-do" },
            { name: service.name, path: service.href },
          ]),
        ]}
      />

      <PageShell
        eyebrow={service.eyebrow}
        title={service.h1}
        description={service.intro}
      >
        <SectionWrapper className="pb-10">
          <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black">
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
              priority
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="divide-y divide-border border-y border-border">
            {service.sections.map((section) => (
              <article key={section.title} className="py-10 md:py-12">
                <h2 className="font-heading text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Process
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            How it works
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2">
            {service.process.map((step, index) => (
              <li key={step.title} className="border-t border-border pt-6">
                <span className="ghost-number text-sm" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Areas
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {service.shortName} near you
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-secondary">
            Mobile across our South Yorkshire hub and surrounding towns.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {TOWN_LINKS.map((town) => {
              const href = service.townPages?.[town.slug] || town.href;

              return (
                <li key={town.slug}>
                  <Link
                    href={href}
                    className="inline-flex border border-white/15 px-4 py-2 text-[11px] font-medium tracking-[0.12em] text-foreground uppercase transition-opacity hover:opacity-80"
                  >
                    {town.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm text-foreground-secondary">
            <Link
              href="/areas-we-cover"
              className="underline-offset-4 hover:underline"
            >
              See all areas we cover →
            </Link>
          </p>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Common questions
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {service.faqs.map((item) => (
              <div key={item.q} className="py-8 md:py-10">
                <h3 className="font-heading text-lg font-medium text-foreground md:text-xl">
                  {item.q}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-24">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Also offered
          </p>
          <ul className="mt-6 flex flex-wrap gap-4 text-sm text-foreground-secondary">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="transition-colors hover:text-foreground"
                >
                  {s.name} →
                </Link>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </PageShell>
    </>
  );
}
