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

const path = "/services/chrome-delete/sheffield";

const faqs = [
  {
    q: "Do you offer mobile chrome delete across Sheffield?",
    a: "Yes. RIGN covers Sheffield city centre and districts including Ecclesall, Hillsborough, Crookes, Dore, Chapeltown, and the Meadowhall corridor. Send your postcode and four vehicle photos so we can confirm the location and quote the exact trim.",
  },
  {
    q: "Which parts of a car can be dechromed?",
    a: "Common choices include window surrounds, grille accents, badges, bumper strips, door handles, and mirror details. We assess each component from photos because the right approach depends on its shape, condition, and how it meets the surrounding panels.",
  },
  {
    q: "Should I choose satin black or gloss black in Sheffield?",
    a: "Gloss black usually feels closest to modern factory black packs, while satin gives a quieter contrast and can be more forgiving visually between washes. The best choice depends on your paint, wheels, grilles, and existing gloss-black parts.",
  },
  {
    q: "How much does a chrome delete cost in Sheffield?",
    a: "Cost depends on the number and complexity of the pieces rather than the town alone. A window-surround delete is a different job from wrapping badges, grille trim, handles, and bumper details together. Four clear photos let us give a relevant price without padding the quote.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Chrome Delete Sheffield | Mobile Dechroming",
  description:
    "Mobile chrome delete in Sheffield for window trim, grilles, badges and more. Premium 3M film, satin or gloss OEM+ finish. Send four photos.",
  canonicalPath: path,
});

export default function SheffieldChromeDeletePage() {
  const localBusiness = {
    "@context": "https://schema.org",
    ...localBusinessNode({
      areaServed: [
        { "@type": "City", name: "Sheffield" },
        { "@type": "AdministrativeArea", name: "South Yorkshire" },
      ],
    }),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Mobile Chrome Delete in Sheffield",
            description:
              "Mobile chrome delete and dechroming for cars in Sheffield using premium 3M vehicle wrapping film.",
            url: path,
            areaName: "Sheffield",
          }),
          localBusiness,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/what-we-do" },
            { name: "Chrome Delete", path: "/services/chrome-delete" },
            { name: "Sheffield", path },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Mobile service · Sheffield"
        title="Chrome Delete in Sheffield: Mobile Dechroming with an OEM+ Finish"
        description="Yes — RIGN provides mobile chrome delete across Sheffield. We wrap factory brightwork such as window surrounds, grille details, badges, handles, and bumper trim in premium 3M film, then finish the edges for a restrained satin- or gloss-black result."
      >
        <SectionWrapper className="pb-16">
          <div className="grid gap-10 border-y border-border py-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:py-14">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                The short answer
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                A black pack look without replacing the trim
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                Chrome delete changes the visual line of a car without changing
                its body colour. Instead of buying replacement mouldings or
                painting original parts, exterior wrapping film is formed over
                selected brightwork. The result is reversible when the film is
                removed correctly, which makes it a sensible option for a
                daily-driven car as well as a newer performance model.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                The useful question is not simply “can everything be blacked
                out?” It is “which chrome interrupts the car&apos;s design?”
                Sometimes window surrounds are enough. On another car, a small
                grille strip or rear badge is the detail that leaves the job
                looking unfinished. We scope those choices from photos before
                agreeing the work.
              </p>
            </div>
            <aside className="border-l border-border pl-6 md:pl-8">
              <h2 className="font-heading text-lg font-medium text-foreground">
                Common Sheffield briefs
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground-secondary">
                <li>Window surrounds in satin or gloss black</li>
                <li>Grille and lower-bumper brightwork</li>
                <li>Front, rear, and side badges</li>
                <li>Door-handle and mirror accents</li>
                <li>A coordinated partial or full trim package</li>
              </ul>
            </aside>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="max-w-3xl">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              Sheffield-specific
            </p>
            <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              Finish choice for a car used in the real city
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
              Sheffield driving can move quickly from stop-start streets to the
              Parkway, Penistone Road, and exposed routes on the Peak District
              side of the city. In winter, the council&apos;s priority gritting
              network includes major roads such as Sheffield Parkway and
              Penistone Road, with link and rural routes including Crookesmoor
              Road and Loxley Road. That does not make one film colour “better,”
              but it does make realistic aftercare important: road film and
              salt show differently on gloss and satin surfaces.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
              Gloss black reflects more sharply and often matches factory
              grilles, mirror caps, and black-pack parts. Satin black softens
              reflections and gives a quieter break against metallic paint. We
              look at the whole car—including wheels, glass surrounds, roof
              rails, and existing black trim—before recommending either. You
              can check the roads named above in Sheffield City Council&apos;s{" "}
              <a
                href="https://www.sheffield.gov.uk/roads-pavements/winter-road-maintenance-and-gritting/gritting-routes-and-prioritisation"
                className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                published gritting priorities
              </a>
              .
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper fullBleed secondary className="border-y border-border py-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Before film
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Preparation decides whether the finish reads as factory
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Bright trim gathers wax, traffic film, and residue around tight
                edges. Those boundaries need careful cleaning before film is
                laid. We also check for lifting coatings, damaged trim, and
                shapes that need a different fitting approach. Hiding a poor
                substrate under black vinyl is not the same as producing a
                clean chrome delete.
              </p>
            </div>
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Mobile fitting
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Your location is confirmed before the appointment
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                RIGN covers the city centre and Sheffield districts including
                Ecclesall, Nether Edge, Hillsborough, Crookes, Dore, Totley,
                Chapeltown, High Green, and the Meadowhall corridor. When you
                enquire, send the postcode with your vehicle photos. We can
                then confirm the brief, travel, and whether the proposed
                working location suits the agreed job before a slot is booked.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            From enquiry to handover
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            How a Sheffield chrome delete is scoped
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Photograph the car",
                body: "Send front, rear, and both sides. Add close-ups if one piece of trim is difficult to see.",
              },
              {
                title: "Choose the visual line",
                body: "We identify the pieces that matter, discuss satin or gloss, and price the agreed scope.",
              },
              {
                title: "Prepare and fit",
                body: "The selected trim is cleaned, film is formed to the component, and edges are finished carefully.",
              },
              {
                title: "Check and care",
                body: "We inspect the complete line with you and explain straightforward washing and aftercare.",
              },
            ].map((step, index) => (
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
          <div className="border-y border-border py-10">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              Plan the job before asking for a price
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground-secondary md:text-base">
              Look at the car from several metres away and note where the bright
              trim breaks an otherwise dark outline. Decide whether you want a
              complete black-pack effect or only the most distracting pieces
              changed. Then take photos in daylight. Clear images produce a
              more useful conversation than a generic “full dechrome” request,
              because two cars with the same badge can have very different
              amounts of trim and edge complexity.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Continue researching
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Useful next pages
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/chrome-delete",
                label: "Chrome delete service",
                body: "Materials, components, process, and wider South Yorkshire coverage.",
              },
              {
                href: "/areas-we-cover/sheffield",
                label: "All Sheffield services",
                body: "Detailing, paint correction, PPF, and local mobile coverage.",
              },
              {
                href: "/guides/what-is-chrome-delete",
                label: "What is chrome delete?",
                body: "A plain guide to dechroming, reversibility, and professional fitting.",
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
            Sheffield chrome delete FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Questions before you book
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
