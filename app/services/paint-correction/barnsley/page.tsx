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

const path = "/services/paint-correction/barnsley";

const faqs = [
  {
    q: "Can paint correction remove every scratch from my car?",
    a: "No. Machine polishing can remove or reduce many defects within the clearcoat, including wash swirls, light scratches, haze, and some etching. A scratch through the clearcoat, missing paint, peeling lacquer, or rust needs a different repair. We would rather identify that limit before work than chase a risky result.",
  },
  {
    q: "Do you offer mobile machine polishing across Barnsley?",
    a: "Yes, subject to the job and a suitable working location. RIGN covers Barnsley town centre and areas including Dodworth, Penistone, Hoyland, Wombwell, Cudworth, Royston, and nearby villages. Send your postcode and describe the available space when you enquire.",
  },
  {
    q: "Do I need a one-stage or multi-stage paint correction?",
    a: "That depends on the paint condition, the result you want, and how much safe correction is available. A one-stage enhancement may suit light wash marring and lost gloss. Deeper or mixed defects may justify separate cutting and refining stages, but more stages are not automatically better.",
  },
  {
    q: "How should I photograph paint defects for a Barnsley quote?",
    a: "Send the usual front, rear, and both side views, then add close-ups in direct daylight or under a single bright light. Photograph each problem from two angles and say whether your fingernail catches on a scratch. Images guide the first conversation; the final process still depends on inspecting the paint itself.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Paint Correction Barnsley | Machine Polishing",
  description:
    "Mobile paint correction in Barnsley for swirls, haze and light scratches. Honest defect assessment, controlled machine polishing and photo quotes.",
  canonicalPath: path,
});

export default function BarnsleyPaintCorrectionPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    ...localBusinessNode({
      areaServed: [
        { "@type": "City", name: "Barnsley" },
        { "@type": "AdministrativeArea", name: "South Yorkshire" },
      ],
    }),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Mobile Paint Correction in Barnsley",
            description:
              "Condition-led paint correction and machine polishing for cars across Barnsley and nearby South Yorkshire communities.",
            url: path,
            areaName: "Barnsley",
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
            { name: "Barnsley", path },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Machine polishing · Barnsley"
        title="Paint Correction in Barnsley, Assessed Before It Is Polished"
        description="RIGN provides mobile paint correction across Barnsley for swirl marks, wash marring, haze, holograms, and suitable light scratches. The first step is deciding what can be improved safely—not promising that every mark will disappear."
      >
        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                  The direct answer
                </p>
                <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  Machine polishing corrects defects in clearcoat, not missing
                  paint
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                <p>
                  Paint correction uses a machine, pad, and abrasive polish to
                  refine a very small amount of clearcoat around a defect. When
                  the damaged area is levelled appropriately, light reflects
                  more evenly and the paint looks clearer. That can make wash
                  swirls, fine scratches, buffer trails, and dullness disappear
                  or become much less visible.
                </p>
                <p>
                  It cannot replace colour that has been chipped away or rebuild
                  lacquer that is peeling. Deep scratches, corrosion, dents,
                  and failed clearcoat belong in a repair conversation, not
                  beneath a more aggressive polishing pad. Our quote begins
                  with that distinction so the plan fits the paint rather than
                  a fixed package name.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Diagnose before choosing a stage
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Three paint conditions that need three different answers
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                label: "Likely correction territory",
                title: "Swirls, haze, and shallow marks",
                body: "Fine circular wash marks, light straight scratches, old buffer trails, and a generally cloudy finish often sit within the clearcoat. After washing and decontamination, a test area shows which pad and polish improve them without unnecessary cutting.",
              },
              {
                label: "Improve, but do not chase",
                title: "Mixed or isolated deeper defects",
                body: "A panel can contain light swirls alongside one scratch that is too deep to remove safely. The proportionate plan may be to restore clarity across the panel and soften the deeper mark, leaving enough clearcoat rather than sacrificing it for one line.",
              },
              {
                label: "Not a polishing repair",
                title: "Chips, peeling lacquer, and exposed layers",
                body: "If a chip shows primer, a scratch has broken through colour, or lacquer is flaking, polishing cannot put material back. Those areas need the right paint or body-repair route first. Correction may still help sound neighbouring panels later.",
              },
            ].map((item) => (
              <article key={item.title} className="border-t border-border pt-6">
                <p className="text-[10px] font-medium tracking-[0.16em] text-accent-label uppercase">
                  {item.label}
                </p>
                <h3 className="mt-3 font-heading text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
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
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Barnsley road context
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Start by removing what the road has left on the paint
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Cars around Barnsley move between town streets, the A61, A628,
                M1 approaches, and rural routes toward places such as Penistone
                and Cawthorne. In winter, Barnsley Council prioritises a network
                of main roads and links between towns and villages for
                gritting. A car used across those routes can arrive with road
                film around its lower doors, sills, wheel arches, and rear
                panels.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                That contamination must be cleaned and, where necessary,
                decontaminated before paint is judged. Polishing dirt into the
                finish would add defects rather than correct them. The local
                road detail is published on Barnsley Council&apos;s{" "}
                <a
                  href="https://www.barnsley.gov.uk/services/roads-travel-and-parking/gritting/"
                  className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  gritting information
                </a>
                ; it informs sensible preparation, not a claim that road use
                automatically means your car needs machine polishing.
              </p>
            </div>
            <aside className="border-l border-border pl-6 md:pl-8">
              <h2 className="font-heading text-lg font-medium text-foreground">
                Look at clean paint in useful light
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground-secondary">
                <li>Direct sun reveals circular wash marring</li>
                <li>A single inspection light exposes holograms and haze</li>
                <li>Two viewing angles show how deep a scratch appears</li>
                <li>Panel edges and body lines need extra caution</li>
                <li>Previous repairs may respond differently panel to panel</li>
              </ul>
            </aside>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Controlled correction
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                More cutting is not automatically a better result
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Clearcoat is finite. A sensible process starts with inspection
                and a test area, then uses a combination capable of reaching
                the agreed improvement without removing more material than the
                job requires. Softer paint, hard paint, repainted panels, tight
                curves, and sharp edges do not all behave the same way.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                A one-stage enhancement can be the right answer when the aim is
                better gloss and reduced light marring. A separate cutting and
                refining process may suit heavier but correctable defects. The
                decision should follow the car&apos;s condition and your goal,
                not the assumption that the longest package is always best.
              </p>
            </div>
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Mobile appointment
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                The working space matters for inspection and finish
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Machine polishing needs more control than a quick exterior
                clean. When you enquire, include the postcode and explain the
                proposed working area. Access, space around the car, weather,
                lighting, and the agreed correction scope all affect whether a
                mobile appointment is suitable.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Coverage includes Barnsley town centre, Dodworth, Penistone,
                Hoyland, Wombwell, Cudworth, Royston, and surrounding
                communities by appointment. If the location or conditions
                would compromise the process, we will adjust the plan rather
                than pretend every correction can be completed anywhere.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-12">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
              <div>
                <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                  Before you ask for a quote
                </p>
                <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  Build a useful picture of the car
                </h2>
              </div>
              <ol className="grid gap-5 text-sm leading-relaxed text-foreground-secondary sm:grid-cols-2">
                {[
                  "Send front, rear, and both side views so we understand the vehicle as a whole.",
                  "Add close-ups of the marks that concern you, photographed from more than one angle.",
                  "Say whether the car has had previous paintwork or correction, if you know.",
                  "Describe the result you want: general clarity, sale preparation, or specific defect improvement.",
                ].map((item, index) => (
                  <li key={item} className="border-t border-border pt-4">
                    <span className="ghost-number mr-3" aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Read around the decision
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Service, local coverage, and repair limits
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/paint-correction",
                label: "Paint correction service",
                body: "See the wider South Yorkshire process, FAQs, and related finish work.",
              },
              {
                href: "/areas-we-cover/barnsley",
                label: "All Barnsley services",
                body: "Check local chrome delete, PPF, detailing, and paint-correction coverage.",
              },
              {
                href: "/guides/paint-correction-vs-full-respray",
                label: "Correction or respray?",
                body: "Use the defect-depth guide when polishing may not be the complete answer.",
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
            Barnsley paint correction FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Questions worth answering before the machine comes out
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
