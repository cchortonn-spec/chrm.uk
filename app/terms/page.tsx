import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Website Use",
  description:
    "Terms of website use for rign.uk — quotes, content, liability, and governing law for England and Wales.",
  canonicalPath: "/terms",
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-10">
      <h2 className="font-heading text-xl font-medium tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground-secondary">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  /* Working draft from chrm-uk-legal-copy.md — recommend solicitor review before launch. */
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Website Use"
      description="How you may use rign.uk. Separate terms apply to booked work."
      showClosingCta={false}
    >
      <SectionWrapper className="pb-24">
        <p className="mb-12 text-xs tracking-[0.12em] text-foreground-secondary uppercase">
          Last updated: 18 July 2026
        </p>

        <div className="max-w-2xl space-y-10">
          <Section title="About us">
            <p>
              This website is operated by RIGN, based in South Yorkshire,
              England.
            </p>
          </Section>

          <Section title="Using this site">
            <p>
              This site is for finding out about our chrome delete services and
              getting in touch for a quote. You agree not to misuse the site,
              attempt to access it in unauthorised ways, or use it for any
              unlawful purpose.
            </p>
          </Section>

          <Section title="Quotes and pricing">
            <p>
              Prices shown on this site are indicative and based on typical
              jobs. Your actual quote is confirmed after we&apos;ve seen photos
              or inspected your vehicle, and may vary based on vehicle size,
              condition, and the work involved. A quote isn&apos;t a binding
              contract until you&apos;ve confirmed a booking with us.
            </p>
          </Section>

          <Section title="Content and intellectual property">
            <p>
              All content on this site — text, images, logo, and design —
              belongs to RIGN unless otherwise stated, and shouldn&apos;t be
              copied or reused without permission.
            </p>
          </Section>

          <Section title="Liability">
            <p>
              We provide this website &quot;as is&quot; and take reasonable
              care to keep information accurate and the site working properly,
              but don&apos;t guarantee it will always be error-free or
              uninterrupted. Nothing in these terms limits our liability where
              it can&apos;t legally be limited (e.g. for negligence causing
              personal injury).
            </p>
            <p className="border-l border-border pl-4 text-foreground-secondary">
              These are website terms only, covering use of rign.uk. Your
              separate terms of business (covering the actual paid work —
              deposits, cancellations, guarantees, liability for the physical
              job) should be a distinct document, given to customers and
              dealership clients at the point of booking.
            </p>
          </Section>

          <Section title="Third-party links">
            <p>
              This site may link to third-party sites (e.g. our Google Business
              Profile, social media). We&apos;re not responsible for the
              content of sites we don&apos;t control.
            </p>
          </Section>

          <Section title="Governing law">
            <p>These terms are governed by the law of England and Wales.</p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms:{" "}
              <a
                href="mailto:info@rign.uk"
                className="text-foreground underline-offset-4 hover:underline"
              >
                info@rign.uk
              </a>
            </p>
          </Section>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
