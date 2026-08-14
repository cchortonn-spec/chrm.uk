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

const path = "/services/paint-protection-film/barnsley";

const faqs = [
  {
    q: "Can I book a small PPF job in Barnsley?",
    a: "Yes. RIGN focuses on targeted paint protection film for specific vulnerable areas, such as door cups, sill tops, a loading lip, mirror caps, or a selected leading edge. Send clear photos of the whole car and the area you want to protect so we can confirm whether a small installation is practical.",
  },
  {
    q: "Does PPF stop every stone chip and scratch?",
    a: "No. PPF adds a sacrificial transparent layer that helps protect the paint beneath it, but no film can prevent every deep impact, sharp cut, or careless contact. Coverage also matters: an uncovered part of a panel remains unprotected. We agree the useful area and its limits before fitting.",
  },
  {
    q: "Can paint protection film go over an existing chip?",
    a: "The paint needs to be assessed first. Film does not replace missing colour or stabilise failing lacquer, and a visible defect can remain visible beneath clear PPF. Light surface marring may be correctable during preparation, while chips or unstable paint may need a separate repair decision.",
  },
  {
    q: "What do you need for a mobile PPF appointment in Barnsley?",
    a: "A clean, controlled working space with suitable access, lighting, and protection from unsuitable weather or airborne contamination. Include your Barnsley postcode and photos of the proposed space with your enquiry. We confirm the environment as well as the panel before accepting a mobile installation.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "PPF Barnsley | Targeted Paint Protection Film",
  description:
    "Targeted PPF fitting in Barnsley for door cups, sills, loading lips, mirrors and selected leading edges. Practical coverage advice and mobile quotes.",
  canonicalPath: path,
});

export default function BarnsleyPpfPage() {
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
            name: "Targeted Paint Protection Film in Barnsley",
            description:
              "Purpose-led PPF fitting for smaller vulnerable painted areas on cars across Barnsley and nearby South Yorkshire communities.",
            url: path,
            areaName: "Barnsley",
          }),
          localBusiness,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/what-we-do" },
            {
              name: "Paint Protection Film",
              path: "/services/paint-protection-film",
            },
            { name: "Barnsley", path },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Targeted paint protection · Barnsley"
        title="PPF in Barnsley for the Parts of Your Car That Take the Contact"
        description="RIGN fits smaller, purpose-led PPF pieces across Barnsley. We start with the mark or impact you want to prevent, inspect the paint, and protect the useful area rather than automatically turning a local problem into a full-front package."
      >
        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-14">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              The direct answer
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
              <div>
                <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  Targeted PPF makes sense when you can name the area and the
                  wear it faces
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                  <p>
                    Paint protection film is a transparent urethane layer
                    applied over prepared paint. It becomes the replaceable
                    surface that takes everyday abrasion and smaller impacts
                    before the finish underneath. Some PPF topcoats can
                    self-heal fine marks in the film with warmth, but the
                    material is protection rather than an invisible repair.
                  </p>
                  <p>
                    A good small-job brief is specific: fingernail marks are
                    gathering behind a door handle; bags cross the same painted
                    boot edge; shoes catch a sill; or one forward-facing detail
                    takes repeated road use. Those are clearer reasons to
                    discuss PPF than covering panels simply because a package
                    list includes them.
                  </p>
                </div>
              </div>
              <aside className="border-l border-border pl-6 md:pl-8">
                <h2 className="font-heading text-lg font-medium text-foreground">
                  Three checks before a quote
                </h2>
                <ol className="mt-5 space-y-4 text-sm leading-relaxed text-foreground-secondary">
                  <li>
                    <span className="mr-3 text-accent-label">01</span>
                    What contact or impact are you trying to reduce?
                  </li>
                  <li>
                    <span className="mr-3 text-accent-label">02</span>
                    Is the paint beneath the proposed film sound?
                  </li>
                  <li>
                    <span className="mr-3 text-accent-label">03</span>
                    Where can the film finish neatly and honestly?
                  </li>
                </ol>
              </aside>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Begin with the evidence
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Match the film to the way the mark is being made
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {[
              {
                symptom: "Fine marks behind the handle",
                area: "Door cups",
                answer:
                  "Repeated contact from fingernails, rings, and keys is concentrated in a small recess. A shaped clear piece can give that contact a sacrificial surface without changing the door colour.",
              },
              {
                symptom: "Scuffs where people or cargo cross the paint",
                area: "Sill tops and loading lips",
                answer:
                  "Shoes, shopping, tools, cases, pushchairs, and pet equipment can follow the same route into a vehicle. The protected strip should follow the real crossing point, not cover an unrelated area for symmetry.",
              },
              {
                symptom: "Repeated exposure at the front or outer edge",
                area: "Selected leading edges and mirror caps",
                answer:
                  "A smaller forward-facing piece can be considered when one detail receives regular road exposure. Its coverage boundary must be understood: adjacent uncovered paint does not gain protection by association.",
              },
              {
                symptom: "An occasional bump at a known corner",
                area: "Bumper corners and painted touchpoints",
                answer:
                  "A discreet section may help with light everyday contact, provided the shape can be installed and finished cleanly. It is not a defence against every parking impact or a substitute for repairing existing damage.",
              },
            ].map((item) => (
              <article
                key={item.area}
                className="grid gap-3 py-7 md:grid-cols-[0.8fr_0.6fr_1.6fr] md:gap-8 md:py-9"
              >
                <p className="text-xs font-medium tracking-[0.12em] text-accent-label uppercase">
                  {item.symptom}
                </p>
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {item.area}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {item.answer}
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Barnsley driving and parking
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Town-centre contact and longer road use create different briefs
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
              <p>
                Barnsley Council lists town-centre multi-storey, surface, and
                on-street parking, with live space signs on approaches
                including Dodworth Road, Huddersfield Road, Old Mill Lane, and
                Sheffield Road. A car used for frequent stops may show its
                clearest repeat wear around handles, door edges, sills, or a
                loading area—not necessarily across the whole front.
              </p>
              <p>
                Other local use extends along the A61 and A628 and toward the
                M1. National Highways describes the A628 and A61/A616 as part
                of the wider Southern Trans-Pennine corridor. Regular faster
                journeys may move the priority toward a selected forward-facing
                edge or mirror. These route and parking facts do not prove that
                any particular car needs PPF; they help us ask where yours
                actually receives contact.
              </p>
              <p className="text-sm">
                Sources checked:{" "}
                <a
                  href="https://www.barnsley.gov.uk/services/roads-travel-and-parking/parking/car-parks-and-on-street-parking/"
                  className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Barnsley Council parking information
                </a>{" "}
                and{" "}
                <a
                  href="https://nationalhighways.co.uk/our-roads/yorkshire-and-north-east/southern-trans-pennine-improvements/"
                  className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  National Highways&apos; corridor overview
                </a>
                .
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Clear film shows what is underneath
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Protect sound paint, do not seal in a surprise
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                The proposed section is washed, decontaminated where needed,
                and inspected before installation. Old adhesive, rough
                touch-up, overspray, chips, scratches, lifting lacquer, or
                previous paintwork can affect what remains visible and whether
                fitting is sensible. Clear film follows the surface; it does
                not rebuild it.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Light marring may justify preparation or{" "}
                <Link
                  href="/services/paint-correction"
                  className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  paint correction
                </Link>{" "}
                first. Missing paint, corrosion, or unstable lacquer needs the
                appropriate repair conversation. The order matters because the
                finish you can see before fitting is the finish the transparent
                film will preserve.
              </p>
            </div>
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Small coverage, precise expectations
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Every piece needs a useful edge and an honest limit
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                A targeted installation protects only the area it covers.
                Shape, access, panel geometry, and the position of natural
                edges all affect where a piece can finish. Before work, we
                agree the intended coverage and explain any visible boundary
                rather than suggesting a small section behaves like
                whole-panel protection.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                PPF can help with lighter abrasion and impacts, but it cannot
                make a panel invulnerable. A deep strike can mark both film and
                paint. That limit is part of choosing a proportionate smaller
                job: the piece should protect a recognisable risk without
                pretending to remove every possibility of damage.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-12">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              Your photo brief
            </p>
            <h2 className="mt-3 max-w-3xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              Make the first message about the vulnerable area
            </h2>
            <ol className="mt-9 grid gap-6 md:grid-cols-4">
              {[
                "Send front, rear, and both side views so the vehicle and proposed area have context.",
                "Add a straight-on close-up and an angled close-up that reveals the current surface condition.",
                "Describe what touches or strikes the area, how often it happens, and the outcome you want.",
                "Include your postcode plus photos of the access, lighting, and shelter at the proposed workspace.",
              ].map((item, index) => (
                <li key={item} className="border-t border-border pt-5">
                  <span className="ghost-number block" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-foreground-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-foreground-secondary md:text-base">
              Mobile coverage includes Barnsley town centre, Dodworth,
              Penistone, Hoyland, Wombwell, Cudworth, Royston, and nearby
              communities by appointment. The postcode confirms travel; the
              panel and working conditions determine whether the installation
              is suitable.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Keep comparing
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Protection, local coverage, or a visual change?
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/paint-protection-film",
                label: "PPF service",
                body: "See how RIGN approaches smaller paint-protection jobs across South Yorkshire.",
              },
              {
                href: "/areas-we-cover/barnsley",
                label: "All Barnsley services",
                body: "Compare local PPF with chrome delete, detailing, and paint correction.",
              },
              {
                href: "/guides/ppf-vs-chrome-delete",
                label: "PPF or chrome delete?",
                body: "Separate transparent paint protection from a coloured trim styling change.",
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
            Barnsley PPF FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Practical questions about smaller protection jobs
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
