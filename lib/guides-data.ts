/**
 * Guide / article content for the local car-culture SEO hub.
 */

export type GuideDef = {
  slug: string;
  href: string;
  title: string;
  metaDescription: string;
  datePublished: string;
  dateModified?: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
  faqs?: { q: string; a: string }[];
  faqHeading?: string;
  sources?: { href: string; label: string }[];
  schemaService?: {
    name: string;
    description: string;
    areaName?: string;
  };
  relatedLinks: { href: string; label: string }[];
};

export const GUIDES: GuideDef[] = [
  {
    slug: "south-yorkshire-car-meets-and-shows",
    href: "/guides/south-yorkshire-car-meets-and-shows",
    title: "South Yorkshire Car Meets & Shows Worth Knowing About",
    metaDescription:
      "A plain guide to South Yorkshire car meets, shows, and the local scene — Sheffield, Rotherham, Barnsley and surrounding. From RIGN.",
    datePublished: "2026-07-19",
    excerpt:
      "South Yorkshire has a proper car culture — from casual Sunday meets to bigger show weekends. Here's a practical overview for owners who care how their car looks when it turns up.",
    sections: [
      {
        heading: "Why the local scene matters",
        body: "Sheffield, Rotherham, Barnsley, Doncaster, and the towns between them all feed into a busy northern car scene. Meets pop up at retail parks, coffee stops, and show grounds through spring and summer. If you're polishing trim, correcting paint, or running a chrome delete, this is where the finish gets noticed — under real light, next to other cars, not just on a phone screen.",
      },
      {
        heading: "Types of events you'll see",
        body: "Expect a mix: informal evening meets, charity shows, club gatherings, and larger multi-marque days. Dates move year to year, so treat social channels and local club pages as the live source — not a static calendar. Peak District drive-outs and café stops on the edge of Sheffield are also part of the culture for many owners.",
      },
      {
        heading: "Showing up with a quiet finish",
        body: "The cars that stand out locally aren't always the loudest. A clean blackout trim package, corrected paint, and honest detailing photograph well and hold up next to modified builds. If you're prepping for a meet season, start with photos and a clear brief — chrome delete, detail, or polish — and build from there.",
      },
      {
        heading: "Dealerships and the retail corridor",
        body: "South Yorkshire's dealer and specialist corridors (Sheffield, Rotherham, Doncaster and the M1 strip) keep a steady flow of nearly-new and used prestige stock. Owners often want a subtler look than the factory chrome package — that's where mobile trim and finish work fits without needing a full wrap shop visit.",
      },
    ],
    relatedLinks: [
      { href: "/services/chrome-delete", label: "Chrome delete" },
      { href: "/services/detailing", label: "Detailing" },
      { href: "/areas-we-cover/sheffield", label: "Sheffield coverage" },
      { href: "/areas-we-cover", label: "All areas we cover" },
    ],
  },
  {
    slug: "best-drives-and-car-spots-south-yorkshire",
    href: "/guides/best-drives-and-car-spots-south-yorkshire",
    title: "Best Local Drives & Car-Friendly Spots in South Yorkshire",
    metaDescription:
      "Local drives and car-friendly spots around Sheffield, the Peak fringe, and South Yorkshire — practical notes for owners. From RIGN.",
    datePublished: "2026-07-19",
    excerpt:
      "You don't need a track day to enjoy a car around here. These are the kinds of routes and stops locals actually use — and why finish quality matters when the light hits.",
    sections: [
      {
        heading: "Peak District fringe from Sheffield",
        body: "Head west from Sheffield toward the Peak National Park approaches and you get fast changes in elevation, stone walls, and open light. It's popular for weekend drives. Road grit and rural debris are real — which is why targeted PPF on leading edges and a solid wash routine matter if you do this often.",
      },
      {
        heading: "Urban loops and evening meets",
        body: "City and town loops through Sheffield, Rotherham, and Barnsley are where most midweek meets happen. Car parks and retail stops change — follow local groups for the current pin. Under LED and sodium light, swirls and uneven chrome show up quickly; machine polishing and a consistent detail pay off here.",
      },
      {
        heading: "Cross-border into Derbyshire & West Yorkshire",
        body: "Chesterfield, Wakefield, Huddersfield, and the routes toward Leeds sit within a short hop of our South Yorkshire base. If you're travelling for a show or a Sunday drive, we can often schedule mobile work around your side of the border by appointment.",
      },
      {
        heading: "Attractions to the look, not the noise",
        body: "Local attractions and heritage spots (industrial museums, parks, and town centres) are popular photo backdrops. A refined OEM+ exterior — blacked-out trim, clean glass, corrected paint — photographs calmer than loud graphics. That's the RIGN lane.",
      },
    ],
    relatedLinks: [
      { href: "/services/paint-protection-film", label: "Paint protection film" },
      { href: "/services/paint-correction", label: "Paint correction" },
      { href: "/areas-we-cover/chesterfield", label: "Chesterfield" },
      { href: "/areas-we-cover/barnsley", label: "Barnsley" },
    ],
  },
  {
    slug: "what-is-chrome-delete",
    href: "/guides/what-is-chrome-delete",
    title: "What Is Chrome Delete — and Why Is It Trending?",
    metaDescription:
      "What chrome delete means, why blackout trim is trending, and how professional 3M film fitting works in South Yorkshire. Guide from RIGN.",
    datePublished: "2026-07-19",
    excerpt:
      "Chrome delete is the professional blackout of exterior bright trim. Here's what it is, what it isn't, and why so many modern cars are getting the treatment.",
    sections: [
      {
        heading: "The short answer",
        body: "Chrome delete (dechroming / blackout trim) covers factory chrome and brightwork with satin or gloss black vinyl film — badges, window surrounds, grille accents, door handles, mirror caps, and more. Done properly with exterior-grade film, it's reversible and looks intentional rather than aftermarket.",
      },
      {
        heading: "Why it's growing",
        body: "Premium SUVs, EVs, and dark paint colours photograph and sit better with continuous dark trim. Social media and OEM \"black edition\" packages normalised the look. UK demand for professional dechroming services is projected to keep rising through the next decade as owners hold cars longer and refresh styling instead of buying new.",
      },
      {
        heading: "DIY kits vs professional fit",
        body: "Pre-cut kits exist online. Edges, heat, and adhesive quality separate a tidy OEM+ finish from peeling corners six months later. We fit 3M premium cast-PVC wrapping film — up to 8 year durability, 90 micron, external grade — across South Yorkshire.",
      },
      {
        heading: "Is it right for your car?",
        body: "If you want quieter presence without a colour change wrap, chrome delete is usually the highest-impact, lowest-commitment upgrade. Send four photos and we'll tell you which components are worth doing on your specific model.",
      },
    ],
    relatedLinks: [
      { href: "/services/chrome-delete", label: "Chrome delete service" },
      { href: "/pricing", label: "Pricing approach" },
      { href: "/areas-we-cover/sheffield", label: "Sheffield" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    slug: "ppf-vs-chrome-delete",
    href: "/guides/ppf-vs-chrome-delete",
    title: "PPF vs Chrome Delete — Which Is Right for Your Car?",
    metaDescription:
      "PPF vs chrome delete explained simply — protection vs blackout trim, when to combine them, and how RIGN scopes jobs in South Yorkshire.",
    datePublished: "2026-07-19",
    excerpt:
      "People mix these up. Paint protection film and chrome delete do different jobs. Here's how to choose — or combine them — without wasting money.",
    sections: [
      {
        heading: "Chrome delete = look",
        body: "Chrome delete changes the appearance of bright trim. It does not stop stone chips on the bonnet. Use it when you want a blackout silhouette and a quieter face on the car.",
      },
      {
        heading: "PPF = protection",
        body: "Paint protection film is clear armour for paint. We focus on smaller, practical PPF jobs — high-impact edges and panels — rather than forcing a full-front package. Use it when Yorkshire roads and grit are eating your clearcoat.",
      },
      {
        heading: "When to combine both",
        body: "Common brief: blackout the trim, then clear-film the bumper corners or bonnet edge. You get the aesthetic and the defence. We'll recommend only what earns its keep from your photos.",
      },
      {
        heading: "What about detailing and polish?",
        body: "Detailing cleans and presents. Paint correction removes swirls before you protect or show the car. Neither replaces PPF or chrome delete — they sit alongside. Start with the outcome you care about most, then build the package.",
      },
    ],
    relatedLinks: [
      { href: "/services/paint-protection-film", label: "PPF service" },
      { href: "/services/chrome-delete", label: "Chrome delete" },
      { href: "/services/paint-correction", label: "Paint correction" },
      { href: "/services/detailing", label: "Detailing" },
    ],
  },
  {
    slug: "paint-correction-vs-full-respray",
    href: "/guides/paint-correction-vs-full-respray",
    title: "Paint Correction vs Full Respray: Which Does Your Car Need?",
    metaDescription:
      "Paint correction vs full respray explained: learn which marks can be polished, which need new paint, and how to choose without over-treating your car.",
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    excerpt:
      "Choose paint correction when the existing paint is sound but marked by swirls, haze, or shallow clear-coat scratches. Choose paint repair or a respray when colour is missing, lacquer is failing, rust is present, or damage reaches the layers below.",
    sections: [
      {
        heading: "The short answer: correct sound paint, repaint failed paint",
        body: "Paint correction and a respray solve different problems. Correction carefully refines the clear coat already on the car; it can restore gloss and reduce swirls, wash marring, haze, light oxidation, and some shallow scratches. A respray adds new paint after preparation and is the appropriate route when the existing paint system is no longer intact. If you can see primer or bare metal, find peeling lacquer, or have a deep chip where paint is missing, polishing cannot put that material back. The sensible choice begins with the depth and condition of the defect, not with which treatment sounds more comprehensive.",
      },
      {
        heading: "What paint correction actually changes",
        body: "Most modern gloss finishes have a clear protective layer above the colour coat. Fine defects interrupt that surface and scatter light, which is why a dark car can look grey or webbed in direct sun even though its colour is still present. Machine polishing uses a measured combination of pad, compound, pressure, and working time to refine the clear coat around those defects. The goal is a clearer, more even reflection while preserving as much paint as possible. It is not the same as filling a scratch with new colour, and it should not mean chasing every last mark regardless of how much clear coat that would remove.",
      },
      {
        heading: "The limits: chips, deep scratches, rust, and peeling lacquer",
        body: "A stone chip is a small area of missing paint. A scratch that exposes a different colour beneath, primer, or metal has also passed beyond what polishing can replace. Failed lacquer may look cloudy at first, then lift or peel around an edge; polishing an unstable surface can make matters worse rather than cure it. Rust, dents, cracked paint, and damage linked to a collision belong with a suitable body-repair professional. Correction may soften the appearance of a deeper mark, but a responsible assessment distinguishes improvement from complete removal. RIGN will not promise that a machine polisher can rebuild a layer that is no longer there.",
      },
      {
        heading: "When a panel repair or respray is the better route",
        body: "New paint becomes relevant when the colour or protective layers have failed, when previous repairs are visibly mismatched, or when damage is too broad for a contained correction. That does not always mean repainting the entire car. A bodyshop may recommend a localised repair, one-panel refinish, or a wider blend depending on the location, paint type, and surrounding condition. If several panels have widespread failure, a larger respray can provide a consistent result. RIGN specialises in paint correction rather than bodyshop refinishing, so if inspection shows missing or failed paint, the honest recommendation is repair first and correction only where it remains useful afterwards.",
      },
      {
        heading: "Sometimes the right answer is a mixed plan",
        body: "Cars rarely arrive with one perfectly uniform problem. One door may have a deep key mark that needs paint, while the bonnet and remaining panels are simply swirled from years of washing. In that case, repainting every sound panel would be unnecessary, but polishing the deep mark alone would not solve it. A bodyshop can repair the damaged area, then paint correction can refine the healthy surrounding finish once the new paint has fully cured according to the repairer's guidance. This staged approach keeps the treatment proportionate and helps the repaired panel sit more naturally beside the rest of the car.",
      },
      {
        heading: "How to inspect a mark without making it worse",
        body: "Start with a clean panel in bright, indirect light. Look from several angles and note whether the mark is a fine line in the gloss, a chip with a clear edge, a cloudy patch, or a lifted lacquer boundary. A mark that becomes much less visible when wet is often within the clear surface, but that is only an indicator, not a guarantee. A fingernail that catches firmly can suggest a deeper defect, yet it is not a substitute for inspecting the paint properly. Avoid aggressive sanding or repeated compound tests: every abrasive step removes material, and a careless experiment can turn a correctable defect into a paint repair.",
      },
      {
        heading: "What to send for an honest first assessment",
        body: "Send one photo of the whole vehicle, one showing the complete affected panel, and close-ups from two angles. Mention whether the finish is gloss, matte, satin, metallic, or pearlescent; matte and satin finishes should not be polished like conventional gloss paint because doing so can permanently change their appearance. Tell us about previous paintwork if you know of any, and explain the result you want: better everyday clarity, preparation before protection, or a near-show finish. Photos cannot reveal everything, but they help separate likely clear-coat defects from obvious missing paint before anyone recommends the wrong service.",
      },
    ],
    faqs: [
      {
        q: "Can paint correction remove every scratch?",
        a: "No. It can remove or reduce defects that sit safely within the clear coat. Scratches through the colour layer, primer, or metal need paint repair rather than more polishing.",
      },
      {
        q: "Does a deep scratch mean the whole car needs a respray?",
        a: "Usually not. A suitable bodyshop may be able to repair or refinish the affected area or panel. The correct scope depends on the damage, paint type, and how well a local repair can be blended.",
      },
      {
        q: "Should correction happen before or after bodyshop paintwork?",
        a: "Repair missing or failed paint first. Allow fresh paint to cure for the period specified by the bodyshop, then assess whether correction on the surrounding original paint would improve consistency.",
      },
      {
        q: "Can RIGN tell from photos whether I need correction or a respray?",
        a: "Photos can identify obvious chips, peeling lacquer, and widespread swirls, so they are a useful first step. Final advice may still require an in-person inspection because lighting and camera processing can hide defect depth.",
      },
    ],
    faqHeading: "Paint correction and respray questions",
    schemaService: {
      name: "Paint Correction Assessment in South Yorkshire",
      description:
        "Condition-led assessment and machine polishing for sound automotive paint with swirls, haze, and clear-coat defects.",
      areaName: "South Yorkshire",
    },
    relatedLinks: [
      {
        href: "/services/paint-correction",
        label: "Paint correction service",
      },
      { href: "/pricing", label: "How RIGN prices work" },
      { href: "/guides/ppf-vs-chrome-delete", label: "PPF vs chrome delete" },
    ],
  },
  {
    slug: "buying-a-prestige-car-south-yorkshire",
    href: "/guides/buying-a-prestige-car-south-yorkshire",
    title: "Buying a Prestige Car in South Yorkshire: A Finish Guide",
    metaDescription:
      "A South Yorkshire guide to inspecting a prestige car's paint and trim, planning after-purchase detailing, chrome delete, correction, or PPF.",
    datePublished: "2026-07-24",
    dateModified: "2026-07-24",
    excerpt:
      "South Yorkshire gives prestige-car buyers a useful mix of manufacturer showrooms and independent specialists. Wherever you buy, inspect the actual car in dry daylight, separate mechanical history from cosmetic condition, and choose finish work only after you know what the paint and trim need.",
    sections: [
      {
        heading: "The short answer: buy the car first, then plan the finish",
        body: "A showroom can help you choose, finance, service, or collect a car; an independent appearance specialist solves a different set of questions. If you are buying a prestige or performance car in South Yorkshire, first confirm the vehicle's history, condition, paperwork, and suitability. Then decide whether the exterior needs careful detailing, measured paint correction, a change to bright trim, or protection on vulnerable panels. Do not let a glossy handover bay decide that for you. Strong indoor lighting can flatter some areas and expose others, while wet paint can disguise marks. The useful sequence is inspection, any necessary body repair, finish refinement, and protection or styling last.",
      },
      {
        heading: "How the local dealership landscape is shaped",
        body: "The region is not centred on one prestige-car destination. Sheffield's Lower Don Valley and Meadowhall side of the city place retail and specialist sites close to the M1 and the Sheffield–Rotherham boundary. Doncaster's Wheatley Hall Road is another established motor-retail corridor, reached from the A630 and wider M18 and A1(M) network. Barnsley and Rotherham buyers also sit within practical reach of both areas, while Chesterfield opens another set of choices just south of the county. That spread matters when comparing stock: the nearest car is not automatically the best example, and a longer first viewing can be more useful than choosing a specification from photographs alone.",
      },
      {
        heading: "Inspect paint and trim before you agree the handover",
        body: "Citizens Advice recommends viewing a used car in daylight and, preferably, when it is dry because damage is harder to spot when the body is wet. Walk around the full car rather than checking only the panels shown prominently in an advert. Look across the paint from several angles for swirls, sanding haze, isolated deep scratches, stone chips, cloudy lacquer, uneven colour, or panels that reflect differently. Check the bright trim, gloss-black pieces, badges, grille details, and window surrounds for lifting edges or a finish that changes from one side to the other. These observations do not replace a mechanical or independent vehicle inspection; they simply stop cosmetic assumptions becoming an unexpected job after collection.",
      },
      {
        heading: "Work out what is factory, repaired, wrapped, or protected",
        body: "Prestige cars can arrive with factory black styling packs, dealer-fitted accessories, previous vinyl work, ceramic coatings, repainted panels, or existing paint protection film. Those surfaces cannot all be treated in the same way. Ask what has been added, request any available invoices or preparation records, and inspect edges around trims and panels. A machine polisher suitable for conventional gloss clear coat may permanently alter matte paint, satin paint, or some wrapped surfaces. Paint protection film should be assessed for contamination, edge condition, and what lies underneath before more film is added. If the history is unclear, start with identification and a cautious test area rather than an aggressive one-size process.",
      },
      {
        heading: "Choose the service by outcome, not by the badge",
        body: "Detailing is the sensible starting point when the car mainly needs a thorough clean, decontamination, and presentable finish. Paint correction is for sound gloss paint affected by swirls, wash marring, haze, or shallow clear-coat defects; it cannot replace missing colour, cure rust, or rebuild peeling lacquer. Chrome delete changes the appearance of exterior brightwork with satin or gloss film, but it does not protect the bonnet from stone impacts. PPF does the opposite job: clear film protects selected painted areas but does not repair defects already beneath it. The make or purchase price does not change those boundaries. Condition and the result you want should determine the work.",
      },
      {
        heading: "Set the order before booking several jobs",
        body: "When a newly bought car needs more than one service, order prevents wasted work. Resolve dents, corrosion, failed paint, or bodyshop repairs first. Let fresh paint cure for the period specified by the repairer. Detail and inspect the car, then correct suitable paint before covering it with PPF. Plan chrome-delete components alongside that work so adjoining edges and removable trim can be scoped properly. Before changing a financed, leased, approved-used, or warrantied vehicle, check the agreement and ask the relevant provider whether it places restrictions on modifications. Tell your insurer about changes when required by your policy. RIGN can advise on finish work, but those contractual decisions remain with the owner and provider.",
      },
      {
        heading: "A useful collection-to-quote checklist",
        body: "Before leaving the seller, photograph the car in even daylight: one full view from each side, the front, the rear, and close-ups of marks or trim you may want changed. Record any known paint repairs, existing film, coatings, matte or satin surfaces, and accessories. After collection, wash only with a safe method if you need a clearer assessment; do not attack a mark with a harsh hand compound. For a RIGN quote, explain the outcome in plain language—cleaner presentation, fewer visible swirls, darkened bright trim, or protection for panels that take repeated road debris. Also say where mobile work would take place, because lighting, power, weather cover, space, and a clean working area affect what can be completed safely.",
      },
      {
        heading: "Independent means independent",
        body: "RIGN is an independent automotive appearance specialist, not a representative of any dealership or vehicle manufacturer. The local retail areas described here are included to help South Yorkshire buyers understand where stock is commonly found and how to assess a car's finish; they are not endorsements, referrals, or claims of a commercial relationship. The same condition-led advice applies whether a car comes from a manufacturer showroom, an independent retailer, or a private seller. A good handover should leave you clear about what you bought. Any later styling or protection plan should be equally clear about what it can change, what it cannot repair, and which surfaces need to be preserved.",
      },
    ],
    faqs: [
      {
        q: "Should I book paint correction before collecting a used prestige car?",
        a: "Wait until the actual car has been inspected unless its condition is already documented clearly. Missing paint, peeling lacquer, dents, or deep damage may need a body-repair route before correction is considered.",
      },
      {
        q: "Can RIGN inspect a car's mechanical condition before I buy it?",
        a: "No. RIGN's scope is automotive appearance work. Use the vehicle history, MOT and recall checks, seller documentation, a proper test drive, and an independent mechanical inspection where needed.",
      },
      {
        q: "Can a factory chrome pack be changed after purchase?",
        a: "Many exterior bright-trim pieces can be wrapped in satin or gloss black, but the exact scope depends on the component shape, surface condition, and existing finish. Photos are the right first step for a component-by-component quote.",
      },
      {
        q: "Is PPF worth adding to an approved-used car?",
        a: "It can be useful on sound painted areas exposed to repeated chips or contact, but approved-used status alone does not answer the question. Inspect the paint first and choose panels according to how the car will actually be used.",
      },
    ],
    faqHeading: "Prestige-car buying and finish questions",
    sources: [
      {
        href: "https://www.citizensadvice.org.uk/consumer/buying-or-repairing-a-car/buying-a-used-car/",
        label: "Citizens Advice — buying a used car",
      },
      {
        href: "https://www.sheffield.gov.uk/planning-development/master-action-plans/lower-don-valley-masterplan",
        label: "Sheffield City Council — Lower Don Valley Master Plan",
      },
      {
        href: "https://www.gov.uk/check-vehicle-recall",
        label: "GOV.UK — check vehicle recalls and MOT history",
      },
    ],
    schemaService: {
      name: "Vehicle Finish Assessment in South Yorkshire",
      description:
        "Independent, condition-led assessment for detailing, paint correction, chrome delete, and targeted paint protection film after vehicle purchase.",
      areaName: "South Yorkshire",
    },
    relatedLinks: [
      { href: "/services/chrome-delete", label: "Chrome delete service" },
      { href: "/services/paint-correction", label: "Paint correction service" },
      { href: "/areas-we-cover", label: "Areas RIGN covers" },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideDef | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
