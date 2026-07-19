/**
 * Guide / article content for the local car-culture SEO hub.
 */

export type GuideDef = {
  slug: string;
  href: string;
  title: string;
  metaDescription: string;
  datePublished: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
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
];

export function getGuideBySlug(slug: string): GuideDef | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
