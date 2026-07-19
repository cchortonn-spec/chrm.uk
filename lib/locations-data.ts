/**
 * Priority town / location page content for local SEO.
 */

export type TownDef = {
  slug: string;
  name: string;
  href: string;
  /** County / wider area label */
  region: string;
  h1: string;
  metaDescription: string;
  intro: string;
  localContext: string;
  districts: string[];
  nearby: string[];
};

export const PRIORITY_TOWNS: TownDef[] = [
  {
    slug: "sheffield",
    name: "Sheffield",
    href: "/areas-we-cover/sheffield",
    region: "South Yorkshire",
    h1: "Chrome Delete & Detailing in Sheffield",
    metaDescription:
      "Mobile chrome delete, PPF, detailing and paint correction in Sheffield. RIGN — South Yorkshire based. Get Your Quote on WhatsApp.",
    intro:
      "Looking for chrome delete, PPF, detailing, or paint correction in Sheffield? RIGN is South Yorkshire based and mobile across the city — from the centre out to the suburbs and the edge of the Peak District approaches.",
    localContext:
      "Sheffield's mix of city streets, ring roads, and routes toward the Peak District means paint chips and tired trim are common. Whether you're near the city centre, Ecclesall, Hillsborough, or further out toward Meadowhall and the M1 corridor, we come to you. Quiet OEM+ finish — not a noisy mod shop aesthetic.",
    districts: [
      "City centre",
      "Ecclesall & Nether Edge",
      "Hillsborough",
      "Crookes & Walkley",
      "Dore & Totley",
      "Chapeltown & High Green",
      "Meadowhall corridor",
    ],
    nearby: ["Rotherham", "Barnsley", "Chesterfield", "Doncaster"],
  },
  {
    slug: "rotherham",
    name: "Rotherham",
    href: "/areas-we-cover/rotherham",
    region: "South Yorkshire",
    h1: "Chrome Delete & Detailing in Rotherham",
    metaDescription:
      "Chrome delete, detailing, PPF and paint correction in Rotherham. Mobile RIGN service across South Yorkshire. Photo quote via WhatsApp.",
    intro:
      "RIGN provides mobile chrome delete, paint protection film, detailing, and machine polishing across Rotherham and nearby villages — same specialist standard as our wider South Yorkshire coverage.",
    localContext:
      "From Rotherham town centre out toward Wickersley, Maltby, and the A630 / M1 links into Sheffield, we schedule mobile visits that fit around your day. Ideal if you want a blackout trim package or a proper detail without trailing into a distant workshop.",
    districts: [
      "Town centre",
      "Wickersley",
      "Maltby",
      "Dinnington",
      "Rawmarsh",
      "Bramley",
      "Whiston",
    ],
    nearby: ["Sheffield", "Doncaster", "Barnsley", "Chesterfield"],
  },
  {
    slug: "barnsley",
    name: "Barnsley",
    href: "/areas-we-cover/barnsley",
    region: "South Yorkshire",
    h1: "Chrome Delete & Detailing in Barnsley",
    metaDescription:
      "Mobile chrome delete, PPF, detailing and paint correction in Barnsley. RIGN — South Yorkshire. Send photos for a quote.",
    intro:
      "Based in South Yorkshire, RIGN brings chrome delete, PPF, detailing, and paint correction to Barnsley and surrounding towns — driveway or workplace visits by appointment.",
    localContext:
      "Barnsley sits on key routes between Sheffield, Wakefield, and the M1. Whether you're in town, toward Penistone, or out to Hoyland and Wombwell, we travel to you for trim blackout, clear film on high-impact panels, or a full machine polish.",
    districts: [
      "Town centre",
      "Penistone",
      "Hoyland",
      "Wombwell",
      "Cudworth",
      "Royston",
      "Dodworth",
    ],
    nearby: ["Sheffield", "Wakefield", "Rotherham", "Huddersfield"],
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    href: "/areas-we-cover/chesterfield",
    region: "Derbyshire / South Yorkshire border",
    h1: "Chrome Delete & Detailing in Chesterfield",
    metaDescription:
      "Chrome delete, detailing, PPF and paint correction in Chesterfield. Mobile from RIGN's South Yorkshire hub. WhatsApp quote.",
    intro:
      "Chesterfield is firmly in our regular travel radius from South Yorkshire. Book mobile chrome delete, PPF, detailing, or paint correction — same finish standard as Sheffield and Rotherham jobs.",
    localContext:
      "Close to the Peak District gateway and the A61 / M1 links north into Sheffield, Chesterfield is a natural fit for mobile refined automotive work. We cover the town and nearby villages without treating Derbyshire as an afterthought.",
    districts: [
      "Town centre",
      "Brimington",
      "Staveley",
      "Whittington",
      "Hasland",
      "Holmewood",
      "Dronfield (nearby)",
    ],
    nearby: ["Sheffield", "Barnsley", "Rotherham", "Mansfield"],
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    href: "/areas-we-cover/doncaster",
    region: "South Yorkshire",
    h1: "Chrome Delete & Detailing in Doncaster",
    metaDescription:
      "Mobile chrome delete, PPF, detailing and paint correction in Doncaster. RIGN South Yorkshire. Get Your Quote on WhatsApp.",
    intro:
      "Doncaster is part of our South Yorkshire hub coverage. RIGN offers mobile chrome delete, paint protection film, detailing, and paint correction across the town and surrounding villages.",
    localContext:
      "From the town centre out toward Bessacarr, Sprotbrough, and the A1(M) corridor, we schedule visits for blackout trim, targeted PPF, and machine polishing. Same quiet OEM+ standard — no workshop queue required.",
    districts: [
      "Town centre",
      "Bessacarr",
      "Sprotbrough",
      "Armthorpe",
      "Cantley",
      "Wheatley",
      "Rossington",
    ],
    nearby: ["Rotherham", "Sheffield", "Barnsley", "Pontefract"],
  },
];

/** Towns covered on the hub page only (no dedicated URL yet). */
export const HUB_ONLY_TOWNS: {
  name: string;
  body: string;
}[] = [
  {
    name: "Leeds",
    body: "West Yorkshire coverage by appointment — chrome delete, PPF, detailing, and paint correction when the job suits travel from our South Yorkshire base. Ask when you send photos.",
  },
  {
    name: "Huddersfield",
    body: "We travel into Huddersfield and the surrounding Colne Valley / M62 corridor by appointment for suitable trim and finish work.",
  },
  {
    name: "Wakefield",
    body: "Wakefield and nearby towns sit within easy reach of our Barnsley–Sheffield corridor. Mobile visits by appointment.",
  },
  {
    name: "Pontefract",
    body: "Pontefract and the surrounding Five Towns area — covered by appointment alongside Doncaster and Wakefield routes.",
  },
  {
    name: "Featherstone",
    body: "Featherstone and nearby villages — bookable when we're already in the Wakefield / Pontefract area or as a standalone appointment.",
  },
];

export function getTownBySlug(slug: string): TownDef | undefined {
  return PRIORITY_TOWNS.find((t) => t.slug === slug);
}
