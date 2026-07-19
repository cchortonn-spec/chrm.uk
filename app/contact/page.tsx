import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get a chrome delete quote — send four photos on WhatsApp, or use the contact form.",
  canonicalPath: "/contact",
});

const photoSteps = [
  { label: "Front", hint: "Straight on" },
  { label: "Back", hint: "Straight on" },
  { label: "Driver side", hint: "Full profile" },
  { label: "Passenger side", hint: "Full profile" },
];

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Get Your Quote"
      description="Send four photos and tell us what you want done. Takes about thirty seconds."
      showClosingCta={false}
    >
      <SectionWrapper className="pb-16">
        <div className="mb-12">
          <WhatsAppButton variant="hero" label="Get Your Quote" />
        </div>

        <p className="text-[11px] font-medium tracking-[0.2em] text-foreground-secondary uppercase">
          Four photos
        </p>
        <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {photoSteps.map((step) => (
            <div
              key={step.label}
              className="flex min-h-[160px] flex-col justify-end bg-background-secondary p-6"
            >
              <p className="font-heading text-lg font-medium text-foreground">
                {step.label}
              </p>
              <p className="mt-1 text-xs tracking-[0.08em] text-foreground-secondary uppercase">
                {step.hint}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        fullBleed
        secondary
        className="section-space border-t border-border"
      >
        <div className="max-w-lg">
          <h2 className="font-heading text-xl font-medium text-foreground">
            Prefer email?
          </h2>
          <p className="mt-3 text-sm text-foreground-secondary">
            Form wiring lands in Step 3. Until then —{" "}
            <a
              href="mailto:info@rign.uk"
              className="text-foreground underline-offset-4 hover:underline"
            >
              info@rign.uk
            </a>
          </p>

          <form className="mt-10 space-y-5" action="#" method="post">
            <div>
              <label htmlFor="name" className="text-xs tracking-[0.1em] uppercase">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                disabled
                placeholder="Coming soon"
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-secondary/50 disabled:opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs tracking-[0.1em] uppercase"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                disabled
                placeholder="Coming soon"
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-secondary/50 disabled:opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs tracking-[0.1em] uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                disabled
                placeholder="Coming soon"
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-secondary/50 disabled:opacity-50"
              />
            </div>
            <button
              type="button"
              disabled
              className="border border-border px-6 py-3 text-xs font-medium tracking-[0.12em] text-foreground-secondary uppercase opacity-50"
            >
              Submit
            </button>
          </form>

          <p className="mt-10 text-sm text-foreground-secondary">
            South Yorkshire based · UK-wide by appointment
          </p>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
