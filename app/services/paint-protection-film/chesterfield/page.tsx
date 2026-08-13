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

const path = "/services/paint-protection-film/chesterfield";

const faqs = [
  {
    q: "Do you fit paint protection film in Chesterfield?",
    a: "Yes. RIGN offers targeted PPF fitting across Chesterfield and nearby communities by appointment. We focus on useful smaller areas rather than automatically selling a full-front package. Send vehicle photos, the panels you are considering, your postcode, and details of the proposed working space so we can confirm whether the job suits a mobile visit.",
  },
  {
    q: "Will PPF hide stone chips that are already in the paint?",
    a: "No. Clear film protects the surface it covers, but it does not replace missing paint or make an existing chip disappear. The panel must be inspected and prepared first. Some defects may need touching in or correcting before film; covering them without a plan can preserve the defect as well as the surrounding paint.",
  },
  {
    q: "Which parts of my car are worth protecting with PPF?",
    a: "That depends on how the car is used. Bonnet leading edges and mirror caps face forward impact, door cups collect fingernail marks, sill tops and loading lips take contact, and lower sections can be vulnerable on regularly used cars. We recommend panels from the actual wear pattern and your priorities, not a fixed list.",
  },
  {
    q: "Is PPF the same as a chrome delete or colour wrap?",
    a: "No. PPF is a thicker transparent protective film intended to take wear before the paint does. Chrome delete uses coloured vehicle-wrapping film to change the look of bright trim. They can be planned together, but they use different materials and solve different problems.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "PPF Chesterfield | Targeted Paint Protection Film",
  description:
    "Targeted PPF fitting in Chesterfield for leading edges, mirrors, door cups, sills and loading areas. Honest panel advice and mobile photo quotes.",
  canonicalPath: path,
});

export default function ChesterfieldPpfPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    ...localBusinessNode({
      areaServed: [
        { "@type": "City", name: "Chesterfield" },
        { "@type": "AdministrativeArea", name: "Derbyshire" },
        { "@type": "AdministrativeArea", name: "South Yorkshire" },
      ],
    }),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Targeted Paint Protection Film in Chesterfield",
            description:
              "Smaller, purpose-led PPF installations for vulnerable painted areas on cars in Chesterfield and nearby Derbyshire communities.",
            url: path,
            areaName: "Chesterfield",
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
            { name: "Chesterfield", path },
          ]),
        ]}
      />

      <PageShell
        eyebrow="Targeted protection · Chesterfield"
        title="Paint Protection Film in Chesterfield, Chosen Panel by Panel"
        description="RIGN fits targeted PPF in Chesterfield for the parts of a car that face real contact and impact. Rather than defaulting to a full-front package, we identify the vulnerable area, check the paint beneath it, and quote the smaller job that makes sense."
      >
        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                  The direct answer
                </p>
                <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  PPF is worth considering where a specific painted area keeps
                  taking the wear
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                  <p>
                    Paint protection film is a transparent urethane layer fitted
                    over sound paint. It takes everyday abrasion and smaller
                    impacts before they reach the finish underneath. Modern film
                    can also self-heal minor marks in its own top surface with
                    warmth, but that does not make the panel invincible and it
                    does not repair damage already beneath the film.
                  </p>
                  <p>
                    The useful starting point is therefore not “how much of the
                    car can we cover?” It is “which area are you trying to
                    preserve?” A loading lip scratched by luggage needs a
                    different piece from a bonnet leading edge used on longer
                    journeys. Door cups, mirror caps, sill tops, and selected
                    lower sections each answer a different problem.
                  </p>
                </div>
              </div>
              <aside className="border-l border-border pl-6 md:pl-8">
                <h2 className="font-heading text-lg font-medium text-foreground">
                  What PPF does—and does not do
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground-secondary">
                  <li>Creates a sacrificial clear layer over sound paint</li>
                  <li>Helps reduce chips and surface wear on the covered area</li>
                  <li>Can self-heal minor marks within the film&apos;s topcoat</li>
                  <li>Does not fill an existing chip or rebuild failed lacquer</li>
                  <li>Cannot prevent every deep impact or careless wash mark</li>
                </ul>
              </aside>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Chesterfield use
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Let the journeys choose the panels
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
              <p>
                Chesterfield Borough Council describes the town as about ten
                minutes from M1 junctions 29 and 29A. That access makes it normal
                for a local car to mix shorter town use with regular motorway
                journeys toward Sheffield, Nottingham, or beyond. Other drivers
                head west on routes toward the Peak District. We use that travel
                pattern as a question, not a sales claim.
              </p>
              <p>
                Frequent forward-facing road use may make a bonnet edge or
                mirror pair more relevant than a rear loading strip. A family
                SUV used for shopping, pushchairs, walking equipment, or dogs
                may show its clearest wear at the boot lip, door cups, and sill
                tops instead. A weekend car may need only one exposed detail
                protected. The official{" "}
                <a
                  href="https://www.chesterfield.gov.uk/explore-chesterfield/getting-here-and-getting-around/"
                  className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Chesterfield travel information
                </a>{" "}
                supports the road context; the marks on your own car decide the
                actual recommendation.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          fullBleed
          secondary
          className="border-y border-border py-16"
        >
          <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            Start with the contact point
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Four smaller PPF briefs with four different reasons
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Forward impact",
                title: "Leading edges and mirrors",
                body: "Consider the surfaces that first meet airborne grit on regular faster journeys. A targeted edge or mirror installation protects less area than a full-front package, so expectations and panel boundaries need to be clear.",
              },
              {
                label: "Daily contact",
                title: "Door cups and edges",
                body: "Fingernails, rings, keys, and repeated opening can mark small areas. Precisely placed film can take that contact without changing the visible colour of the door.",
              },
              {
                label: "Getting in and out",
                title: "Sill tops and lower sections",
                body: "Shoes and clothing can brush painted entry points. We look for the actual contact line before deciding the size and shape of the protected section.",
              },
              {
                label: "Loading",
                title: "Boot and bumper lips",
                body: "Bags, cases, tools, pet equipment, and pushchairs can cross the same painted edge repeatedly. A discreet strip can be more proportionate than covering unrelated panels.",
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

        <SectionWrapper className="py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                What sits underneath
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Clear film makes preparation visible
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                PPF is not an opaque cover-up. The panel is cleaned and assessed
                before fitting because contamination, old adhesive, chips,
                scratches, overspray, or previous paintwork can affect the
                result. Light correctable marring may justify preparation first;
                missing paint or unstable lacquer needs a repair decision rather
                than simply being sealed beneath film.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                If the paint is generally dull or swirled, read how{" "}
                <Link
                  href="/services/paint-correction"
                  className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  paint correction
                </Link>{" "}
                differs from protection. Correction changes the finish that is
                already there; PPF adds a layer over the finish once it is ready.
              </p>
            </div>
            <div>
              <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                Mobile suitability
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                The working environment is checked before booking
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Film fitting needs controlled preparation, access around the
                panel, and conditions that do not undermine a clean result.
                Include your postcode and describe the proposed space when you
                ask for a quote. We will consider the panel, access, weather,
                lighting, and environment before confirming whether the
                Chesterfield appointment is suitable.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary md:text-base">
                Coverage includes the town centre, Brimington, Staveley,
                Whittington, Hasland, Holmewood, Dronfield, and nearby
                communities by arrangement. A location being within range does
                not automatically make every setting right for every install;
                the fitting conditions still come first.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16">
          <div className="border-y border-border py-10 md:py-12">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
              <div>
                <p className="accent-mark text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
                  Photo quote
                </p>
                <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  Show the panel, the damage, and the wider car
                </h2>
              </div>
              <ol className="grid gap-5 text-sm leading-relaxed text-foreground-secondary sm:grid-cols-2">
                {[
                  "Send front, rear, and both side views so the vehicle and proposed coverage are clear.",
                  "Add straight-on and angled close-ups of every panel you want to protect.",
                  "Point out existing chips, scratches, repainted areas, or lifting lacquer rather than hiding them.",
                  "Include your postcode, normal vehicle use, and a description of the available working space.",
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
            Continue
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Compare the protection, place, and finish
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/paint-protection-film",
                label: "PPF service",
                body: "See the wider targeted-protection process and South Yorkshire coverage.",
              },
              {
                href: "/areas-we-cover/chesterfield",
                label: "All Chesterfield services",
                body: "Check local chrome delete, detailing, correction, and PPF coverage.",
              },
              {
                href: "/guides/ppf-vs-chrome-delete",
                label: "PPF or chrome delete?",
                body: "Compare clear paint protection with a visual trim change before combining them.",
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
            Chesterfield PPF FAQ
          </p>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Questions to answer before choosing coverage
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
