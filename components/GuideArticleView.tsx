import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import type { GuideDef } from "@/lib/guides-data";
import { articleSchema, breadcrumbSchema } from "@/lib/seo-schema";

type GuideArticleViewProps = {
  guide: GuideDef;
};

export default function GuideArticleView({ guide }: GuideArticleViewProps) {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: guide.title,
            description: guide.metaDescription,
            path: guide.href,
            datePublished: guide.datePublished,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: guide.href },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Guide"
        title={guide.title}
        description={guide.excerpt}
      >
        <SectionWrapper className="pb-16">
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
