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

const path = "/areas-we-cover/leeds";

const faqs = [
  {
    q: "Does RIGN travel to Leeds for mobile automotive work?",
    a: "Yes, by appointment when the job and working location suit travel from our South Yorkshire base. Send your Leeds postcode, clear vehicle photos, the result you want, and a photo of the proposed working area. We confirm scope, access, and travel before offering a booking.",
  },
  {
    q: "Which RIGN services are available in Leeds?",
    a: "Leeds appointments can cover chrome delete, detailing, paint correction, and targeted paint protection film. The right option depends on whether you want to change exterior trim, clean and reset the vehicle, improve suitable clearcoat defects, or protect vulnerable painted areas.",
  },
  {
    q: "Can you work on a street or in a city-centre car park?",
    a: "Do not assume that every parking space is a suitable work area. Access, permission, room around the vehicle, surface condition, traffic, lighting, weather, and the planned service all matter. Send a location photo first so we can assess whether mobile work is responsible there.",
  },
  {
    q: "How do I get a quote for a Leeds appointment?",
    a: "Send four clear photos—front, rear, and both sides—plus closer images of the trim, paint defects, contamination, or panels you want assessed. Include the postcode, vehicle model, desired result, and location photo. That gives us enough context to ask the right follow-up questions.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Chrome Delete, Detailing & PPF Leeds",
  description:
    "Mobile chrome delete, detailing, targeted PPF and paint correction in Leeds by appointment. Honest scope, specialist finish and photo quotes.",
  canonicalPath: path,
});

export default function LeedsAreaPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    ...localBusinessNode({
      areaServed: [
        { "@type": "City", name: "Leeds" },
        { "@type": "AdministrativeArea", name: "West Yorkshire" },
      ],
    }),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Mobile Automotive Refinement Services in Leeds",
            description:
              "Chrome delete, detailing, targeted paint protection film, and paint correction in Leeds by appointment from RIGN's South Yorkshire base.",
            url: path,
            areaName: "Leeds",
          }),
          localBusiness,
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas we cover", path: "/areas-we-cover" },
            { name: "Leeds", path },
          ]),
        ]}
      />

      <PageShell
        eyebrow="West Yorkshire · By appointment"
        title="Chrome Delete, Detailing, PPF & Paint Correction in Leeds"
        description="RIGN covers Leeds for suitable mobile appointments from our South Yorkshire base. We first check the vehicle, the result you want, and the proposed working space—then recommend only the service that fits."
      >
        <SectionWrapper className="pb-16">
          <div className="grid gap-8 border-y border-border py-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16 md:py-14">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Answer first
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Can you book RIGN in Leeds?
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
              <p>
                Yes—Leeds is covered by appointment for{" "}
                <Link
                  href="/services/chrome-delete"
                  className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  chrome delete
                </Link>
                , detailing, paint correction, and smaller or targeted PPF
                work. Because we travel from South Yorkshire, the sensible
                first step is a remote assessment rather than pretending every
                enquiry should become a visit.
              </p>
              <p>
                Send the postcode, four whole-car photos, close-ups of the area
                that concerns you, and a picture of the proposed workspace. We
                use those details to confirm whether the service, access, and
                travel make sense together. You get a clearer scope before
                booking and the vehicle gets the preparation its finish
                deserves.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Start with the outcome
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Four services solve four different problems
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground-secondary md:text-base">
            “Make the car look better” can describe several jobs. Choosing by
            the visible problem keeps the recommendation proportionate and
            prevents styling film, cleaning, polishing, and protection from
            being treated as interchangeable.
          </p>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Chrome delete",
                href: "/services/chrome-delete",
                body: "For changing bright exterior trim to a quieter black or dark finish without painting it. We identify the exact window surrounds, grille details, roof rails, badges, or other trim in scope before quoting.",
              },
              {
                number: "02",
                title: "Detailing",
                href: "/services/detailing",
                body: "For safely cleaning and resetting exterior or interior areas around the vehicle's real condition. Tell us about road film, bonded contamination, pet hair, stains, or neglected areas so the brief is useful rather than package-led.",
              },
              {
                number: "03",
                title: "Paint correction",
                href: "/services/paint-correction",
                body: "For improving suitable swirl marks, haze, and light clearcoat defects through controlled machine polishing. It cannot honestly promise away chips, dents, deep scratches, failed lacquer, or damage that needs paint repair.",
              },
              {
                number: "04",
                title: "Targeted PPF",
                href: "/services/paint-protection-film",
                body: "For adding clear sacrificial film to selected painted areas that face wear or impact. RIGN positions PPF around focused, simpler coverage—not automatically a full-car installation or a cure for damage already present.",
              },
            ].map((service) => (
              <article
                key={service.number}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-6"
              >
                <span className="ghost-number text-sm" aria-hidden>
                  {service.number}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-medium text-foreground">
                    <Link
                      href={service.href}
                      className="transition-opacity hover:opacity-80"
                    >
                      {service.title} →
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {service.body}
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Leeds driving context
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Inspect for the journeys the car actually makes
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                <p>
                  Leeds driving can combine city streets with the M621 and
                  onward links toward the M1 and M62. National Highways
                  describes the M621 as a route serving Leeds city centre and
                  its surrounding area. That mix does not prove that every car
                  needs the same treatment; it tells us to ask how yours is
                  used before recommending one.
                </p>
                <p>
                  A motorway commuter may show most concern around leading
                  edges, lower panels, wheels, and the rear of the vehicle. A
                  car used mainly for short urban trips may instead need cabin,
                  glass, tight trim edges, or safe maintenance prioritised. A
                  weekend car could need only a focused visual change. Photos
                  and honest use history are more valuable than a postcode-led
                  package.
                </p>
              </div>
            </div>
            <aside className="border-l border-border pl-6 md:pl-8">
              <h2 className="font-heading text-lg font-medium text-foreground">
                Checked local source
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                National Highways records the completed junction improvements
                along the M621 and explains the route&apos;s connection to
                central Leeds. Check current travel information separately when
                arranging an appointment.
              </p>
              <a
                href="https://nationalhighways.co.uk/our-roads/yorkshire-and-north-east/m621-junctions-1-to-7/"
                className="mt-6 inline-block text-sm text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                Read the M621 route information →
              </a>
            </aside>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Mobile means prepared
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                The workspace is part of the job
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
              <p>
                Coverage can include central Leeds and communities such as
                Headingley, Horsforth, Roundhay, Chapel Allerton, Pudsey,
                Morley, and Garforth, subject to appointment and practical
                access. Being inside the coverage area does not automatically
                make a roadside bay, shared car park, or tight driveway
                suitable.
              </p>
              <p>
                We check permission, room around the car, the surface, nearby
                traffic, lighting, weather exposure, and what the agreed
                service needs. A straightforward trim assessment and a
                correction process do not place identical demands on a
                location. If the setting would compromise the work, changing
                the plan is better than forcing it.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-14">
            <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
              A useful first message
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              Give us enough detail to make the journey worthwhile
            </h2>
            <ol className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Show the whole car",
                  body: "Send front, rear, and both side views in clear light.",
                },
                {
                  number: "02",
                  title: "Show the concern",
                  body: "Add close-ups of trim, marks, contamination, or proposed PPF panels.",
                },
                {
                  number: "03",
                  title: "Explain the result",
                  body: "Describe what you want changed, improved, cleaned, or protected.",
                },
                {
                  number: "04",
                  title: "Confirm the setting",
                  body: "Include the Leeds postcode and a photo of the available workspace.",
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
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Keep researching
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Compare the wider coverage and the finish options
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              {
                href: "/areas-we-cover",
                label: "All areas we cover",
                body: "See RIGN's South Yorkshire hub and wider appointment coverage.",
              },
              {
                href: "/guides/ppf-vs-chrome-delete",
                label: "PPF vs chrome delete",
                body: "Understand the difference between paint protection and trim styling.",
              },
              {
                href: "/guides/paint-correction-vs-full-respray",
                label: "Correction vs respray",
                body: "Choose between improving clearcoat and repairing paint damage.",
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
            Leeds service FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            What to know before requesting a visit
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
