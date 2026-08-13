import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import type { GuideDef } from "@/lib/guides-data";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  localBusinessNode,
  serviceSchema,
} from "@/lib/seo-schema";

type GuideArticleViewProps = {
  guide: GuideDef;
};

export default function GuideArticleView({ guide }: GuideArticleViewProps) {
  const schemaData: Record<string, unknown>[] = [
    articleSchema({
      title: guide.title,
      description: guide.metaDescription,
      path: guide.href,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
    }),
  ];

  if (guide.schemaService) {
    schemaData.push(
      serviceSchema({
        ...guide.schemaService,
        url: guide.href,
      }),
      {
        "@context": "https://schema.org",
        ...localBusinessNode(),
      }
    );
  }

  if (guide.faqs?.length) {
    schemaData.push(faqPageSchema(guide.faqs));
  }

  schemaData.push(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
      { name: guide.title, path: guide.href },
    ])
  );

  const reviewedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(
    new Date(`${guide.dateModified || guide.datePublished}T00:00:00.000Z`)
  );

  return (
    <>
      <JsonLd data={schemaData} />

      <PageShell
        eyebrow="Guide"
        title={guide.title}
        description={guide.excerpt}
      >
        <SectionWrapper className="pb-16">
          <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-foreground-secondary uppercase">
            Reviewed <time dateTime={guide.dateModified || guide.datePublished}>{reviewedDate}</time>
          </p>
          <div className="divide-y divide-border border-y border-border">
            {guide.sections.map((section) => (
              <article key={section.heading} className="py-10 md:py-12">
                <h2 className="font-heading text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        {guide.faqs?.length ? (
          <SectionWrapper className="pb-20">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              FAQ
            </p>
            <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              {guide.faqHeading || "Questions about this guide"}
            </h2>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {guide.faqs.map((item) => (
                <div key={item.q} className="py-8 md:py-10">
                  <h3 className="font-heading text-lg font-medium text-foreground md:text-xl">
                    {item.q}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </SectionWrapper>
        ) : null}

        {guide.sources?.length ? (
          <SectionWrapper className="pb-20">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              Sources
            </p>
            <h2 className="mt-3 font-heading text-xl font-medium text-foreground">
              Research checked for this guide
            </h2>
            <ul className="mt-6 max-w-3xl divide-y divide-border border-y border-border">
              {guide.sources.map((source) => (
                <li key={source.href} className="py-4">
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground-secondary underline decoration-white/25 underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {source.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </SectionWrapper>
        ) : null}

        <SectionWrapper className="pb-24">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Next steps
          </p>
          <h2 className="mt-3 font-heading text-xl font-medium text-foreground">
            Related
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {guide.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex border border-white/15 px-4 py-2 text-[11px] font-medium tracking-[0.12em] text-foreground uppercase transition-opacity hover:opacity-80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-foreground-secondary">
            <Link href="/guides" className="underline-offset-4 hover:underline">
              All guides →
            </Link>
          </p>
        </SectionWrapper>
      </PageShell>
    </>
  );
}
