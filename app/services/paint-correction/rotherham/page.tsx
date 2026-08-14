import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import {
  breadcrumbSchema,
  faqPageSchema,
  localBusinessNode,
  serviceSchema,
} from "@/lib/seo-schema";
import { generateMetadata as createMetadata } from "@/lib/seo";

const path = "/services/paint-correction/rotherham";

const faqs = [
  {
    q: "How do I know whether my car needs paint correction?",
    a: "Wash the car safely, then inspect the paint in direct sun or under one bright light. Fine circular swirls, wash marring, haze, holograms, and some shallow scratches may respond to machine polishing. Chips, peeling lacquer, dents, rust, and scratches through the colour need a repair assessment instead.",
  },
  {
    q: "Do you offer mobile paint correction across Rotherham?",
    a: "Yes, when the correction scope and proposed working area are suitable. RIGN covers Rotherham town centre and communities including Wickersley, Rawmarsh, Bramley, Whiston, Dinnington, Maltby, Parkgate, Swinton, and Wath by appointment. Send your postcode and a photo of the available space.",
  },
  {
    q: "Can machine polishing remove a scratch that catches my fingernail?",
    a: "A fingernail check is only an early clue, not permission to polish aggressively. A scratch that catches may be too deep to remove safely, although its appearance might still be softened. We assess the panel, surrounding clearcoat, edges, and previous paintwork before agreeing a realistic target.",
  },
  {
    q: "Should paint correction be done before applying protection?",
    a: "Usually, if you want defects improved before wax, sealant, coating, or paint protection film is applied. Protection does not correct swirls or replace missing paint. The right order depends on the current finish and the selected protection, so both should be discussed before work begins.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Paint Correction Rotherham | Machine Polishing",
  description:
    "Mobile paint correction in Rotherham for swirls, haze and suitable light scratches. Clear diagnosis, controlled machine polishing and photo quotes.",
  canonicalPath: path,
});

export default function RotherhamPaintCorrectionPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    ...localBusinessNode({
      areaServed: [
        { "@type": "City", name: "Rotherham" },
        { "@type": "AdministrativeArea", name: "South Yorkshire" },
      ],
    }),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Mobile Paint Correction in Rotherham",
            description:
              "Condition-led machine polishing for suitable paint defects on cars across Rotherham and nearby South Yorkshire communities.",
            url: path,
            areaName: "Rotherham",
          }),
          localBusiness,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/what-we-do" },
            {
              name: "Paint Correction",
              path: "/services/paint-correction",
            },
            { name: "Rotherham", path },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Machine polishing · Rotherham"
        title="Paint Correction in Rotherham, Built Around What the Paint Can Safely Give"
        description="RIGN provides mobile machine polishing across Rotherham for cars with swirl marks, haze, holograms, and suitable light scratches. We identify the defect first, agree a realistic improvement, and avoid chasing damage that needs paint repair."
      >
        <SectionWrapper className="pb-16">
          <div className="grid gap-8 border-y border-border py-10 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:py-14">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                The short answer
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Is machine polishing the right fix for your paint?
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
              <p>
                Paint correction is the right conversation when defects sit
                within a sound painted surface. After safe washing and
                decontamination, a controlled combination of machine, pad, and
                polish can refine a small amount of clearcoat. That levels the
                way light meets many swirls, fine scratches, buffer trails, and
                hazy areas, restoring clarity rather than covering the marks
                with a temporary glaze.
              </p>
              <p>
                It is not the right repair for a stone chip with colour missing,
                a dent, rust, peeling lacquer, or a scratch through the paint.
                Those defects need material or panel repair that polishing
                cannot provide. A responsible assessment may recommend
                correction across most of a car while leaving one deep mark for
                a bodyshop. A mixed answer is often more honest than promising
                one process will solve everything.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Read the finish
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Four things the paint can tell us before a polishing plan is chosen
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {[
              {
                number: "01",
                title: "Circular marks appear in direct light",
                body: "Repeated wash marring often becomes obvious around a single light source. The pattern may be widespread while still being shallow enough to improve. A test area reveals how the finish responds and whether a one-stage enhancement can meet the goal.",
              },
              {
                number: "02",
                title: "One panel looks different from the others",
                body: "Texture, colour, gloss, or defect behaviour can change after previous paintwork. That does not automatically prevent correction, but it means the panel should not be treated as though its history and clearcoat match every original panel.",
              },
              {
                number: "03",
                title: "The car is glossy but still lacks clarity",
                body: "A shiny product can sit over haze, holograms, or fine defects. Cleaning removes contamination; correction changes suitable defects in the clearcoat. Looking at clean, undressed paint helps separate a temporary shine from a genuinely refined finish.",
              },
              {
                number: "04",
                title: "A mark exposes colour, primer, or metal",
                body: "Polishing cannot replace a missing layer. An isolated chip or deeper scratch may need touch-in or body repair even when the surrounding panel would benefit from correction. We set the polishing boundary before work reaches that area.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="grid gap-4 py-7 md:grid-cols-[5rem_0.8fr_1.2fr] md:gap-8 md:py-9"
              >
                <span className="ghost-number text-3xl" aria-hidden>
                  {item.number}
                </span>
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          fullBleed
          secondary
          className="border-y border-border py-16"
        >
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Rotherham use, not a postcode package
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Tell us where the car goes and how you want it to look
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                <p>
                  Rotherham journeys can combine the M1 and M18 with the A630
                  Sheffield Parkway, town-centre streets, and routes through
                  Rawmarsh, Wickersley, Maltby, or Dinnington. The council also
                  identifies the A630, A633 Rawmarsh Hill, and A629 Wortley Road
                  among the borough&apos;s busy commuter routes. That local
                  detail shapes the questions we ask; it does not prove a car
                  needs polishing.
                </p>
                <p>
                  A motorway-used daily driver may arrive with bonded road film
                  that must be removed before the finish can be read. A weekend
                  car may be clean yet show old wash marring in strong sun. A
                  recently bought used car can carry filler, dealership-style
                  glaze, or previous polishing trails that only become obvious
                  after a thorough wash. The correction plan follows the
                  condition found underneath, not the route name or badge on
                  the bonnet.
                </p>
              </div>
            </div>
            <aside className="border-l border-border pl-6 md:pl-8">
              <h2 className="font-heading text-lg font-medium text-foreground">
                Checked local context
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                Rotherham Council lists the Parkway and several arterial roads
                in its clean-air work. We use that only as evidence of the
                borough&apos;s mixed commuter network—not as evidence that road
                use creates correctable paint defects.
              </p>
              <a
                href="https://www.rotherham.gov.uk/energy-climate-change/clean-air/4"
                className="mt-6 inline-block text-sm text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                Read the council&apos;s route information →
              </a>
            </aside>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                The first test matters
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                One-stage and multi-stage are outcomes, not upgrades
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
              <p>
                A test section gives practical evidence: how quickly the paint
                responds, whether the combination leaves its own haze, and how
                much improvement is possible without unnecessary cutting. A
                one-stage process may give a daily driver the clarity it needs.
                Separate cutting and refining stages may suit heavier but still
                correctable defects. More stages are not automatically safer or
                more appropriate.
              </p>
              <p>
                Clearcoat is finite, and panel edges, sharp body lines, soft
                paint, repainted sections, and previously corrected areas all
                deserve caution. We agree the visual priority before choosing
                the process: perhaps cleaner reflections across the whole car,
                stronger improvement on selected panels, or preparation before
                a suitable protective finish.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-14">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              From message to finish
            </p>
            <h2 className="mt-3 max-w-3xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              A correction appointment starts before a machine touches the car
            </h2>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Show the defects",
                  body: "Send whole-car views plus close-ups in direct daylight or under one bright light.",
                },
                {
                  number: "02",
                  title: "Share the history",
                  body: "Mention previous paintwork, polishing, coatings, or repairs if you know about them.",
                },
                {
                  number: "03",
                  title: "Confirm the setting",
                  body: "Include the postcode and a photo showing access, cover, lighting, and room around the car.",
                },
                {
                  number: "04",
                  title: "Agree the target",
                  body: "Choose a realistic finish goal after inspection and a test—not from a stage count alone.",
                },
              ].map((step) => (
                <li key={step.number} className="border-t border-border pt-5">
                  <span className="text-[11px] font-medium tracking-[0.16em] text-accent-label uppercase">
                    {step.number}
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
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Mobile coverage
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Rotherham appointments need a controllable working area
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Coverage includes Rotherham town centre, Wickersley, Rawmarsh,
                Bramley, Whiston, Dinnington, Maltby, Parkgate, Swinton, Wath,
                and nearby communities by appointment. Paint correction needs
                safe access, room to work around the vehicle, useful lighting,
                and weather conditions that will not compromise preparation or
                finish. Send a workspace photo with the postcode so suitability
                can be checked before a booking is offered.
              </p>
            </div>
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                After correction
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Keep the improved finish from returning to the same wash cycle
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Correction improves suitable existing defects; it does not make
                paint immune to new ones. Clean tools, controlled contact, and a
                sensible wash sequence matter after handover. Protection can
                support maintenance, but wax, sealant, coating, and targeted
                PPF solve different problems. We discuss the next layer only
                after the paint itself has been assessed.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Compare before booking
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Service detail, local coverage, and the repair boundary
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              {
                href: "/services/paint-correction",
                label: "Paint correction service",
                body: "See RIGN's wider machine-polishing approach and South Yorkshire coverage.",
              },
              {
                href: "/areas-we-cover/rotherham",
                label: "All Rotherham services",
                body: "Compare local chrome delete, detailing, targeted PPF, and correction.",
              },
              {
                href: "/guides/paint-correction-vs-full-respray",
                label: "Correction or respray?",
                body: "Use the defect-depth guide when the damage may need new paint.",
              },
            ].map((item) => (
              <li key={item.href} className="border-t border-border pt-5">
                <Link
                  href={item.href}
                  className="font-heading text-lg font-medium text-foreground transition-opacity hover:opacity-80"
                >
                  {item.label} →
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </SectionWrapper>

        <SectionWrapper className="pb-24">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Rotherham paint correction FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Questions to answer before choosing a polishing stage
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((item) => (
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
      </PageShell>
    </>
  );
}
