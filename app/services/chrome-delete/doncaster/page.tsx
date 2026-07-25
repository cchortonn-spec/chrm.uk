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

const path = "/services/chrome-delete/doncaster";

const faqs = [
  {
    q: "Do you offer mobile chrome delete across Doncaster?",
    a: "Yes, subject to the job and a suitable working location. RIGN covers Doncaster city centre and areas including Bessacarr, Cantley, Sprotbrough, Wheatley, Armthorpe, and Rossington. Send your postcode with four vehicle photos so we can confirm the scope and location before booking.",
  },
  {
    q: "How much does a chrome delete cost in Doncaster?",
    a: "The price depends on the car and the pieces being wrapped, not the Doncaster postcode. Straight window trim is a different fitting brief from a grille, handles, badges, and several curved bumper details. Clear photos let us identify the actual components and quote the agreed package.",
  },
  {
    q: "Can chrome delete film be removed later?",
    a: "Chrome delete is a reversible styling option when suitable automotive film is fitted to sound trim and later removed correctly. The age and condition of the original surface still matter, so damaged, loose, or previously refinished pieces need to be identified before fitting.",
  },
  {
    q: "Does a chrome delete protect the trim underneath?",
    a: "The film creates a physical layer over the covered brightwork, but chrome delete should be chosen as a styling service rather than sold as complete impact protection. It cannot repair corrosion, peeling coatings, deep damage, or loose trim, and it is not the same product as paint protection film.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Chrome Delete Doncaster | Mobile Dechroming",
  description:
    "Mobile chrome delete in Doncaster for window trim, grilles, badges and accents. Choose a precise satin or gloss black package from four photos.",
  canonicalPath: path,
});

export default function DoncasterChromeDeletePage() {
  const localBusiness = {
    "@context": "https://schema.org",
    ...localBusinessNode({
      areaServed: [
        { "@type": "City", name: "Doncaster" },
        { "@type": "AdministrativeArea", name: "South Yorkshire" },
      ],
    }),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Mobile Chrome Delete in Doncaster",
            description:
              "Mobile chrome delete and dechroming for selected exterior vehicle trim across Doncaster and nearby South Yorkshire communities.",
            url: path,
            areaName: "Doncaster",
          }),
          localBusiness,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/what-we-do" },
            { name: "Chrome Delete", path: "/services/chrome-delete" },
            { name: "Doncaster", path },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Mobile dechroming · Doncaster"
        title="Chrome Delete in Doncaster, Planned Around Your Car"
        description="RIGN provides mobile chrome delete across Doncaster, wrapping selected factory brightwork in satin or gloss black automotive film. The useful first step is deciding which trim should change—not automatically covering every reflective piece."
      >
        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                  The direct answer
                </p>
                <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  Build one clean visual line instead of ordering a vague
                  “full dechrome”
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                <p>
                  Chrome delete covers chosen exterior brightwork—often window
                  surrounds, grille details, badges, handles, or bumper
                  accents—with dark wrapping film. It changes how the shape of
                  the vehicle reads while leaving the original component in
                  place. For many cars, changing the window line and one grille
                  accent creates a more coherent result than blacking out every
                  small badge.
                </p>
                <p>
                  That is why a Doncaster quote begins with four whole-car
                  photos: front, rear, driver side, and passenger side. They
                  show whether one reflective piece connects with another and
                  whether existing gloss-black parts already set the finish.
                  Close-ups are added only where a component, edge, or previous
                  damage needs a better look.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Scope by visual group
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Which parts of a car are worth including in a chrome delete?
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "The glass line",
                body: "Window surrounds and nearby pillar trim form one continuous outline. Treating that outline as a group avoids a dark side profile interrupted by one unexplained chrome section.",
              },
              {
                number: "02",
                title: "The front and rear balance",
                body: "Grille bars, lower-bumper accents, exhaust surrounds, and boot trim are viewed from different angles. The front does not always need to copy the rear; each should feel resolved in its own view.",
              },
              {
                number: "03",
                title: "The small repeat details",
                body: "Badges, handles, vents, and mirror accents can repeat a finish already present elsewhere. A small piece earns its place in the package when it supports that pattern rather than simply adding more black.",
              },
            ].map((item) => (
              <article key={item.number} className="border-t border-border pt-6">
                <span className="ghost-number text-sm" aria-hidden>
                  {item.number}
                </span>
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
          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Doncaster road use
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Local driving changes the care routine, not the purpose of the
                film
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Doncaster journeys can combine city traffic with the A630,
                A1(M), M18, and roads through surrounding communities. That mix
                does not dictate whether satin or gloss looks better, but it
                supports a simple aftercare point: trim on a regularly used car
                will collect traffic film and needs gentle, routine washing.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                It does not mean a Doncaster car automatically needs a chrome
                delete, and styling film is not a substitute for PPF. Choose
                dechroming because the darker line suits the vehicle. Then care
                for it as a fitted exterior finish rather than treating it as
                maintenance-free armour.
              </p>
            </div>
            <aside className="border-l border-border pl-6 md:pl-8">
              <h2 className="font-heading text-lg font-medium text-foreground">
                Straightforward aftercare
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground-secondary">
                <li>Wash away road film rather than letting it build at edges</li>
                <li>Avoid aiming high-pressure water directly into film joins</li>
                <li>Use suitable products instead of harsh solvent cleaners</li>
                <li>Flag a lifted or damaged edge before it becomes worse</li>
                <li>Follow the fitting-specific guidance given at handover</li>
              </ul>
            </aside>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Finish choice
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Satin or gloss black: match what is already on the car
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {[
              {
                finish: "Gloss black",
                answer:
                  "The sharper reflection often connects naturally with factory gloss grilles, mirror caps, roof panels, and black-pack details. It can look cohesive when those elements already dominate the car.",
              },
              {
                finish: "Satin black",
                answer:
                  "The softer reflection produces a quieter contrast and can separate the trim from both body paint and glass. It needs its own appropriate wash care rather than gloss-enhancing products.",
              },
              {
                finish: "A restrained partial package",
                answer:
                  "Keeping selected badges or functional details in their original finish can preserve useful contrast. A partial plan is not an unfinished full delete when every retained piece is a deliberate choice.",
              },
            ].map((item) => (
              <article
                key={item.finish}
                className="grid gap-3 py-7 md:grid-cols-[0.35fr_0.65fr] md:gap-10 md:py-9"
              >
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {item.finish}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-secondary md:text-base">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Before fitting
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Sound edges matter more than a flattering photo
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                A whole-car image defines the design, but close-ups reveal
                whether the proposed pieces are suitable. We look for loose
                trim, flaking finishes, corrosion, deep scoring, old adhesive,
                and awkward seals. Film follows the component beneath it; it
                does not rebuild a failed coating or make a damaged edge sound.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Some badges and trim shapes also need a different fitting plan
                from a long window surround. Identifying those differences
                before the appointment makes the quote clearer and avoids
                pretending that every reflective surface is the same job.
              </p>
            </div>
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Mobile coverage
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Confirm the Doncaster location with the vehicle
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Mobile appointments cover Doncaster city centre, Bessacarr,
                Cantley, Sprotbrough, Wheatley, Armthorpe, Rossington, and nearby
                communities by arrangement. The postcode tells us where the car
                is; a short description of the proposed working area tells us
                whether the fitting environment suits the agreed trim package.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Access, space around the vehicle, weather exposure, cleanliness,
                and the complexity of the components all matter. If a location
                would compromise preparation or edge finishing, the sensible
                answer is to change the plan before the booking rather than
                force the work on the day.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Continue from here
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Compare the service, local coverage, and alternatives
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/chrome-delete",
                label: "Chrome delete service",
                body: "Read about materials, component choices, process, and wider coverage.",
              },
              {
                href: "/areas-we-cover/doncaster",
                label: "All Doncaster services",
                body: "See local detailing, paint correction, and targeted PPF coverage.",
              },
              {
                href: "/guides/ppf-vs-chrome-delete",
                label: "Chrome delete or PPF?",
                body: "Separate a styling decision from a transparent paint-protection job.",
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
            Doncaster chrome delete FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Practical questions before you send the photos
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
