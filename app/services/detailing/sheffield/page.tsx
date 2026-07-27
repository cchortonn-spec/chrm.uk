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

const path = "/services/detailing/sheffield";

const faqs = [
  {
    q: "Do you offer mobile car detailing throughout Sheffield?",
    a: "Yes. RIGN covers Sheffield city centre and districts including Ecclesall, Nether Edge, Hillsborough, Crookes, Walkley, Dore, Totley, Chapeltown, and the Meadowhall corridor. Send your postcode and photos when you enquire so we can confirm travel and whether the proposed working area suits the detail.",
  },
  {
    q: "Which detailing package should I book for my car?",
    a: "Start with the result you want and the car's current condition rather than a package name. Tell us about its use, the last thorough clean, interior stains, pet hair, tar, tree residue, dull paint, or any specific concern. We can then separate useful detailing work from optional steps that would not materially improve your car.",
  },
  {
    q: "Can detailing remove scratches and swirl marks?",
    a: "Cleaning and decontamination can reveal the paint more clearly, but they do not remove every defect. Light clearcoat marks may need paint correction, while chips, deep scratches, failing lacquer, and dents need a different repair. We explain that boundary before recommending extra work.",
  },
  {
    q: "What space is needed for a mobile detail in Sheffield?",
    a: "A safe, accessible off-street working area is normally the starting point. The exact requirement depends on the vehicle, weather, access, and agreed work. Send a photo of the proposed location with your postcode; we will confirm suitability before the appointment rather than arriving and compromising the job.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Mobile Car Detailing Sheffield",
  description:
    "Mobile car detailing in Sheffield, planned around your vehicle's condition. Exterior and interior care, honest scope and a refined finish.",
  canonicalPath: path,
});

export default function SheffieldDetailingPage() {
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
            name: "Mobile Car Detailing in Sheffield",
            description:
              "Condition-led mobile exterior and interior car detailing across Sheffield and surrounding South Yorkshire communities.",
            url: path,
            areaName: "Sheffield",
          }),
          localBusiness,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/what-we-do" },
            { name: "Detailing", path: "/services/detailing" },
            { name: "Sheffield", path },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Mobile service · Sheffield"
        title="Mobile Car Detailing in Sheffield, Chosen by Condition"
        description="RIGN provides mobile car detailing across Sheffield. The useful answer is not one oversized package for every vehicle: we inspect the exterior, cabin, wheels, and glass, then agree the work that will make a visible difference to your car."
      >
        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-14">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              Answer first
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                What does a car detail include?
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                <p>
                  A considered detail is a sequence of safe cleaning and
                  finishing steps selected for the vehicle in front of us. It
                  can cover bodywork, wheels, glass, cabin surfaces, seats,
                  footwells, and the boot, but not every car needs equal time in
                  every area. A motorway commuter, an occasionally used
                  performance car, and a family SUV arrive with different
                  contamination and priorities.
                </p>
                <p>
                  We therefore ask what you want to change, review useful
                  photos, and set expectations before the appointment. The aim
                  is a cleaner, more coherent finish and an interior that feels
                  properly reset—not a long checklist used to make a simple
                  job sound complicated.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Four-zone check
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Scope the car by where the problems actually are
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Paint and exterior trim",
                body: "Look for road film, tar spots, bird residue, tree sap, dull paint, and dirt trapped around badges or panel edges. Cleaning may resolve contamination; visible defects that remain after cleaning need a separate conversation.",
              },
              {
                number: "02",
                title: "Wheels and lower areas",
                body: "Wheels, tyres, arches, sills, lower doors, and the rear of the car often carry a different level of grime from upper panels. Photos of these areas help us judge whether the exterior needs a maintenance clean or a deeper reset.",
              },
              {
                number: "03",
                title: "Cabin and load space",
                body: "Footwells, seat edges, cupholders, touchpoints, child-seat areas, and the boot show how a car is really used. Mention spills, pet hair, smoke, or an odour at enquiry stage so the interior brief is honest.",
              },
              {
                number: "04",
                title: "Glass and final presentation",
                body: "Clear glass, tidy shuts, balanced tyre finish, and residue-free surfaces affect the complete result. These details matter, but dressings should not be used to disguise damaged materials or create an artificially greasy finish.",
              },
            ].map((zone) => (
              <article
                key={zone.number}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-6"
              >
                <span className="ghost-number text-sm" aria-hidden>
                  {zone.number}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-medium text-foreground">
                    {zone.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {zone.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          fullBleed
          secondary
          className="border-y border-border py-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Sheffield road context
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                City streets and higher routes can soil a car differently
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Sheffield journeys can combine stop-start urban roads, the
                Parkway and M1 connection, and more exposed routes toward the
                city&apos;s western edge. Sheffield City Council uses separate
                winter forecasts for areas above and below 200 metres and says
                more than 60% of the road network is gritted through its
                priority system. For detailing, that is a practical reminder to
                inspect the whole vehicle after winter use, not just wash the
                bonnet and doors that are easiest to see.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Salt-laden road film and general grime can build around lower
                panels, wheel faces, arches, the rear bumper, and tight edges.
                One detail cannot promise corrosion prevention, and a strong
                chemical is not automatically a better answer. Timely cleaning,
                suitable products, thorough rinsing, and a realistic
                maintenance rhythm are the responsible approach.
              </p>
            </div>
            <aside className="border-l border-border pl-6 md:pl-8">
              <h2 className="font-heading text-lg font-medium text-foreground">
                Checked local source
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                The council explains when Sheffield roads are treated and names
                priority routes such as Sheffield Parkway, Penistone Road,
                Crookesmoor Road, and Loxley Road.
              </p>
              <a
                href="https://www.sheffield.gov.uk/roads-pavements/winter-road-maintenance-and-gritting/gritting-routes-and-prioritisation"
                className="mt-6 inline-block text-sm text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                Read Sheffield&apos;s gritting priorities →
              </a>
            </aside>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Set the boundary
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Cleaning, decontamination, and correction are different decisions
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Safe cleaning",
                body: "Removes loose and bonded everyday dirt from the agreed exterior and interior areas. This is the foundation of every detail and may be all a regularly maintained car needs.",
              },
              {
                title: "Decontamination",
                body: "Targets bonded material that remains after normal washing, where the paint and planned finish make that step appropriate. It prepares a truer surface for inspection and finishing.",
              },
              {
                title: "Paint correction",
                body: "Uses controlled machine polishing to improve suitable clearcoat defects. It is not simply a more expensive wash, and it should only follow inspection of clean paint and an honest discussion of limits.",
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
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-foreground-secondary md:text-base">
            If scratches, haze, or swirl marks are your main concern, read our{" "}
            <Link
              href="/services/paint-correction"
              className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              paint correction service
            </Link>{" "}
            before requesting a generic “full detail.” It explains when
            polishing is relevant and why deep damage cannot be safely promised
            away.
          </p>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="grid gap-10 border-y border-border py-10 md:grid-cols-2 md:gap-16 md:py-14">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Choose the moment
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Book around use, not a calendar slogan
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
              <p>
                A daily driver may benefit from a reset after the worst winter
                contamination has passed. A car prepared for sale needs honest
                presentation and clear photographs, not hidden defects. A
                vehicle returning from regular countryside or motorway use may
                need attention around its front, lower areas, wheels, and rear
                before the cabin requires deep work.
              </p>
              <p>
                Tell us what is happening next for the car. That context helps
                set priorities and avoids spending appointment time on an area
                that is already in good condition.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Mobile suitability
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                The location is checked with the vehicle
              </h2>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-foreground-secondary md:text-base">
                Coverage includes Sheffield city centre and areas such as
                Ecclesall, Nether Edge, Hillsborough, Crookes, Walkley, Dore,
                Totley, Chapeltown, High Green, and the Meadowhall corridor,
                subject to appointment. Mobile work still needs a suitable
                setting. Send the postcode, a photo of the proposed space, and
                clear vehicle images. We will confirm access, travel, weather
                considerations, and whether the planned work is sensible there
                before booking.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                If the location or conditions do not support the agreed result,
                changing the plan is better than forcing the appointment. That
                is part of protecting the finish and setting a fair expectation.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Continue
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Check the service, area, and next level of finish
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/detailing",
                label: "Detailing service",
                body: "See RIGN's wider exterior, interior, and booking approach.",
              },
              {
                href: "/areas-we-cover/sheffield",
                label: "All Sheffield services",
                body: "Explore local chrome delete, PPF, and paint correction coverage.",
              },
              {
                href: "/guides/best-drives-and-car-spots-south-yorkshire",
                label: "Prepare for a local drive",
                body: "Plan a South Yorkshire route with practical car-care considerations.",
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
            Sheffield detailing FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Questions to answer before booking
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
