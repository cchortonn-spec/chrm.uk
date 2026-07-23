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

const path = "/services/detailing/rotherham";

const faqs = [
  {
    q: "Do you offer mobile car detailing throughout Rotherham?",
    a: "Yes. RIGN covers Rotherham town centre and surrounding areas including Wickersley, Rawmarsh, Dinnington, Maltby, Bramley, Whiston, Parkgate, Swinton, and Wath. Send your postcode when you enquire so we can confirm travel and whether the proposed working area suits the detail.",
  },
  {
    q: "Is car detailing the same as a hand wash?",
    a: "No. A hand wash removes surface dirt. A proper detail is a planned sequence that can include wheels, safe bodywork cleaning, decontamination where needed, glass, interior surfaces, and a suitable final finish. The exact scope should match the car's condition rather than a generic checklist.",
  },
  {
    q: "Can you remove every stain and scratch during a detail?",
    a: "Not honestly. Some stains have permanently changed a material, while scratches below the clearcoat need more than cleaning. We assess the condition first and explain what detailing can improve, what may need paint correction, and what should be left to a repair specialist.",
  },
  {
    q: "How much does mobile detailing cost in Rotherham?",
    a: "Price depends on vehicle size, condition, interior needs, and the agreed exterior work. Photos of the bodywork, wheels, front seats, rear seats, and boot help us give a relevant quote instead of pricing every car as though it needs the same treatment.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Mobile Car Detailing Rotherham",
  description:
    "Mobile car detailing in Rotherham for considered exterior and interior care. Local coverage, honest condition-led quotes and a refined finish.",
  canonicalPath: path,
});

export default function RotherhamDetailingPage() {
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
            name: "Mobile Car Detailing in Rotherham",
            description:
              "Condition-led mobile exterior and interior car detailing across Rotherham and surrounding South Yorkshire communities.",
            url: path,
            areaName: "Rotherham",
          }),
          localBusiness,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/what-we-do" },
            { name: "Detailing", path: "/services/detailing" },
            { name: "Rotherham", path },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Mobile service · Rotherham"
        title="Mobile Car Detailing in Rotherham, Planned Around Your Car"
        description="RIGN provides mobile car detailing across Rotherham for drivers who want more than a quick wash. We assess the vehicle first, agree useful exterior and interior work, and complete a methodical detail at a confirmed suitable location."
      >
        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-14">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              Answer first
            </p>
            <div className="mt-4 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
              <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                What does a proper mobile detail actually include?
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                <p>
                  It starts with condition, not a fixed list. A lightly used car
                  may need careful exterior cleaning, wheels, glass, and a
                  considered final finish. A family car with ingrained interior
                  dirt needs a different balance of time. A vehicle being
                  prepared for polishing needs clean paint and honest inspection
                  rather than a dressing that hides defects.
                </p>
                <p>
                  That is why we ask what bothers you about the car and request
                  useful photos before quoting. The aim is not to perform the
                  greatest number of steps. It is to choose the steps that
                  visibly improve this vehicle, then complete them without a
                  rushed handover.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Rotherham road use
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Winter road film changes the sensible detailing brief
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Rotherham&apos;s network connects town driving with the M1 and
                M18 corridors and outlying communities. In winter, the council
                says its gritting programme treats 545 km of classified and busy
                roads—48% of the local highway network. That is useful context
                for a daily-driven car: salt residue can collect around sills,
                wheel arches, lower doors, wheels, and the rear of the vehicle,
                so those areas deserve attention rather than a fast pass over
                the most visible panels.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                The{" "}
                <a
                  href="https://www.rotherham.gov.uk/transport-streets/gritting/9"
                  className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  council publishes how its winter gritting works
                </a>
                . The AA also notes that road salt can accelerate rust and
                recommends regular washing during salted periods. That does not
                mean promising that one detail prevents corrosion. It means
                cleaning should be timely, careful, and focused on the places
                where winter contamination actually gathers.
              </p>
            </div>
            <aside className="border-l border-border pl-6 md:pl-8">
              <h2 className="font-heading text-lg font-medium text-foreground">
                Useful photos for a quote
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground-secondary">
                <li>Front, rear, and both complete sides</li>
                <li>Both front wheels and one rear wheel</li>
                <li>Dashboard and front footwells</li>
                <li>Rear seats, rear footwells, and boot</li>
                <li>Close-ups of stains, tar, sap, or problem areas</li>
              </ul>
              <a
                href="https://www.theaa.com/breakdown-cover/advice/car-care"
                className="mt-7 inline-block text-sm text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                Read the AA&apos;s car-body care guidance →
              </a>
            </aside>
          </div>
        </SectionWrapper>

        <SectionWrapper fullBleed secondary className="border-y border-border py-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Choose by outcome
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Three different reasons to book should not become one generic package
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Restore the daily driver",
                body: "Prioritise accumulated exterior dirt, wheels, glass, cabin touchpoints, footwells, and the practical areas that make the car feel neglected. Tell us about pets, child seats, frequent motorway use, or long gaps between cleans before the appointment.",
              },
              {
                title: "Prepare for a better finish",
                body: "When the paint looks dull or swirled, cleaning is the inspection stage—not a claim that every defect will wash away. Once contamination is removed, we can separate marks that detailing improves from paint defects that may need machine polishing.",
              },
              {
                title: "Present the car for sale",
                body: "Focus on honest presentation: clear glass, clean wheels, orderly interior surfaces, and bodywork that photographs without loose dirt masking its condition. Detailing can improve presentation, but it should never be used to disguise damage from a buyer.",
              },
            ].map((item) => (
              <article key={item.title} className="border-t border-border pt-6">
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Mobile appointments
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                The working location is part of the plan
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Mobile does not mean setting up anywhere without checking. Send
                the postcode and describe the proposed space when you enquire.
                We confirm whether the location, access, weather, and agreed
                work are compatible before booking. If the setting is not
                suitable, the responsible answer is to adjust the plan rather
                than compromise the finish or work unsafely.
              </p>
            </div>
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Local coverage
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Town, suburbs, and surrounding communities
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Coverage includes Rotherham town centre, Wickersley, Rawmarsh,
                Dinnington, Maltby, Bramley, Whiston, Parkgate, Swinton, and
                Wath, subject to appointment and a suitable working location.
                If your village is not listed, send the postcode; our wider
                South Yorkshire route often makes nearby bookings practical.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-12">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              What to mention before we price the work
            </h2>
            <div className="mt-8 grid gap-5 text-sm leading-relaxed text-foreground-secondary sm:grid-cols-2">
              <p>
                Describe when the car was last properly cleaned, how it is used,
                and the result you care about most. Mention pet hair, spills,
                smoke odour, child seats, tree sap, tar, or months of motorway
                driving rather than leaving surprises until arrival.
              </p>
              <p>
                Also say if you are considering{" "}
                <Link
                  href="/services/paint-correction"
                  className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  paint correction
                </Link>
                . A detail and a correction are related but different jobs, and
                the order matters when clearer paint—not only a cleaner
                car—is the goal.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Continue
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Check the service and local coverage
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/detailing",
                label: "Detailing service",
                body: "See the wider exterior, interior, booking, and aftercare approach.",
              },
              {
                href: "/areas-we-cover/rotherham",
                label: "All Rotherham services",
                body: "Explore chrome delete, PPF, detailing, and paint correction locally.",
              },
              {
                href: "/guides/best-drives-and-car-spots-south-yorkshire",
                label: "South Yorkshire driving guide",
                body: "Read practical preparation and car-care considerations before a drive.",
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
            Rotherham detailing FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Questions to settle before booking
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
