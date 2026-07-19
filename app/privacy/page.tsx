import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How RIGN collects and uses personal data on rign.uk — contact enquiries, vehicle photos, and analytics under UK GDPR.",
  canonicalPath: "/privacy",
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

export default function PrivacyPage() {
  /* Working draft from chrm-uk-legal-copy.md — recommend solicitor review before launch. */
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="What personal data we collect through rign.uk, why, and your rights."
      showClosingCta={false}
    >
      <SectionWrapper className="pb-24">
        <p className="mb-12 text-xs tracking-[0.12em] text-foreground-secondary uppercase">
          Last updated: 18 July 2026
        </p>

        <div className="max-w-2xl space-y-10">
          <Section title="Who we are">
            <p>
              RIGN (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) provides
              mobile chrome delete services for vehicles, based in South
              Yorkshire, operating across the UK. This policy explains what
              personal data we collect through rign.uk, why, and what
              rights you have over it.
            </p>
            <p>
              Contact for any privacy query:{" "}
              <a
                href="mailto:info@rign.uk"
                className="text-foreground underline-offset-4 hover:underline"
              >
                info@rign.uk
              </a>
            </p>
          </Section>

          <Section title="What we collect">
            <p>
              <span className="text-foreground">When you contact us</span>{" "}
              (WhatsApp, contact form, or email): your name, phone number,
              email address, any message or vehicle details you send, and any
              photos you send us of your vehicle.
            </p>
            <p>
              <span className="text-foreground">When you browse the site</span>
              : standard analytics data via Google Analytics 4 and Microsoft
              Clarity — pages visited, approximate location (town/city level,
              from IP address), device type, and how you interact with the
              site. This is only collected if you consent to analytics cookies
              (see Cookies below, and Cookie Settings in the footer).
            </p>
            <p>
              <span className="text-foreground">
                Vehicle photos and number plates
              </span>
              : photos you send us to get a quote may show your vehicle&apos;s
              number plate. A number plate can be used to identify a
              vehicle&apos;s registered keeper, so we treat these images as
              personal data. We use quote photos only to prepare your quote and
              carry out the work you&apos;ve asked for.
            </p>
            <p>
              <span className="text-foreground">
                Before/after photos in our gallery
              </span>
              : we may want to use photos of completed work in our gallery or
              on social media. We will not do this without asking first — if
              you&apos;d rather your vehicle wasn&apos;t shown publicly, or
              you&apos;d like a photo removed after it&apos;s posted, just tell
              us and we&apos;ll sort it.
            </p>
          </Section>

          <Section title="Why we collect it">
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to your enquiry and provide a quote</li>
              <li>To carry out and manage a booked job</li>
              <li>
                To understand how people use the site and improve it
                (analytics — only with consent)
              </li>
              <li>To meet our legal and accounting obligations</li>
            </ul>
          </Section>

          <Section title="Who we share it with">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="text-foreground">Resend</span> — the service
                that delivers contact form emails to our inbox
              </li>
              <li>
                <span className="text-foreground">Google</span> (Analytics,
                Search Console) — if you&apos;ve consented to analytics cookies
              </li>
              <li>
                <span className="text-foreground">Microsoft</span> (Clarity) —
                if you&apos;ve consented to analytics cookies
              </li>
            </ul>
            <p>
              We don&apos;t sell your data, and we don&apos;t share it with
              anyone for their own marketing purposes.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              Enquiry and job data is kept for as long as needed to provide the
              service and meet accounting/legal requirements (typically up to 6
              years for financial records). Analytics data is retained per
              Google Analytics&apos; and Microsoft Clarity&apos;s standard
              retention settings.
            </p>
          </Section>

          <Section title="Your rights">
            <p>Under UK GDPR, you can ask us to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Confirm what data we hold about you and give you a copy</li>
              <li>Correct inaccurate data</li>
              <li>
                Delete your data (subject to legal/accounting requirements to
                retain some records)
              </li>
              <li>Restrict or object to how we use your data</li>
              <li>Move your data to another provider</li>
            </ul>
            <p>
              To exercise any of these, email{" "}
              <a
                href="mailto:info@rign.uk"
                className="text-foreground underline-offset-4 hover:underline"
              >
                info@rign.uk
              </a>
              . You can also complain to the Information Commissioner&apos;s
              Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-4 hover:underline"
              >
                ico.org.uk
              </a>{" "}
              if you think we&apos;ve mishandled your data.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We&apos;ll update the date at the top of this page when this
              policy changes. Significant changes will be flagged clearly on
              the site.
            </p>
          </Section>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
