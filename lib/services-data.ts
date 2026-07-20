/**
 * Shared service definitions for SEO service pages.
 */

import { MATERIAL } from "@/lib/material";

export type ServiceFaq = { q: string; a: string };

export type ServiceDef = {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  /** Dedicated local landing pages, keyed by town slug. */
  townPages?: Record<string, string>;
  /** H1 / meta title fragment */
  h1: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faqs: ServiceFaq[];
  imageSrc: string;
  imageAlt: string;
};

const NEW = "/Images of cars/new";

export const SERVICES: ServiceDef[] = [
  {
    slug: "chrome-delete",
    name: "Chrome Delete",
    shortName: "Chrome delete",
    href: "/services/chrome-delete",
    townPages: {
      sheffield: "/services/chrome-delete/sheffield",
    },
    h1: "Chrome Delete in South Yorkshire",
    metaDescription:
      "Professional chrome delete in South Yorkshire — Sheffield, Rotherham, Barnsley, Chesterfield & surrounding. 3M film, OEM+ finish. Get a quote.",
    eyebrow: "Exterior trim",
    intro:
      "Chrome delete (also called dechroming or blackout trim) replaces shiny chrome and bright trim with a refined satin or gloss black finish. Based in South Yorkshire, we fit premium 3M cast-PVC wrapping film on badges, window surrounds, grilles, door handles, and more — mobile to you across Sheffield, Rotherham, Barnsley, Chesterfield, Doncaster, and nearby towns.",
    sections: [
      {
        title: "What is chrome delete?",
        body: `Chrome delete is a professional vinyl wrap of exterior brightwork — emblems, window trim, grille accents, bumper trim, door handles, and mirror caps — so the car reads as one continuous, quieter silhouette. We use ${MATERIAL.brand} ${MATERIAL.name}: ${MATERIAL.type}, ${MATERIAL.thickness}, ${MATERIAL.adhesive}, rated for ${MATERIAL.use.toLowerCase()} with ${MATERIAL.durability.toLowerCase()}.`,
      },
      {
        title: "Why choose RIGN for chrome delete",
        body: "One specialist standard — not a side job bolted onto a valeting van. We scope from photos, fit carefully, and finish to a dealership-grade OEM+ look. Mobile by design across South Yorkshire and by appointment further afield.",
      },
      {
        title: "Badge & emblem delete",
        body: "Factory badges and emblems finished in satin or gloss black. Cleaner lines. Same presence.",
      },
      {
        title: "Window trim / surround delete",
        body: "Window surrounds blacked out for a continuous, showroom-quiet silhouette.",
      },
      {
        title: "Grille, bumper, handles & mirrors",
        body: "Front grille trim, bumper chrome, door handles, and mirror caps brought into a single dark finish — subtle, precise, no aftermarket shout.",
      },
    ],
    process: [
      {
        title: "Send four photos",
        body: "Front, back, both sides. Tell us which components you want deleted.",
      },
      {
        title: "We quote & schedule",
        body: "Clear price. We come to you across South Yorkshire (and further by appointment).",
      },
      {
        title: "Prep & fit",
        body: "Surfaces cleaned, film cut and applied with 3M premium wrap — edges finished properly.",
      },
      {
        title: "Handover",
        body: "Walkthrough of care tips. Reversible later when removed correctly.",
      },
    ],
    faqs: [
      {
        q: "Does chrome delete damage the paint underneath?",
        a: "No. We use 3M premium cast-PVC wrapping film with a grey permanent adhesive. It protects the surface beneath. When removed correctly, the original finish remains.",
      },
      {
        q: "How long does a chrome delete wrap last?",
        a: "Up to 8 years of durability with our 3M 90-micron premium vehicle wrapping film — external grade, not a short-lived blackout.",
      },
      {
        q: "How much does chrome delete cost in South Yorkshire?",
        a: "It depends on components, vehicle size, and finish. Send four photos for an accurate quote — no one-size price list that doesn't fit your car.",
      },
      {
        q: "Do you offer chrome delete in Sheffield and nearby towns?",
        a: "Yes. South Yorkshire is our hub — Sheffield, Rotherham, Barnsley, Chesterfield, Doncaster, and surrounding areas. UK-wide by appointment for the right job.",
      },
    ],
    imageSrc: `${NEW}/merc-landscape.webp`,
    imageAlt: "Black Mercedes with refined exterior trim — chrome delete finish, South Yorkshire",
  },
  {
    slug: "paint-protection-film",
    name: "Paint Protection Film",
    shortName: "PPF",
    href: "/services/paint-protection-film",
    h1: "Paint Protection Film (PPF) in South Yorkshire",
    metaDescription:
      "PPF / paint protection film in South Yorkshire — smaller panels, rocker covers, high-impact areas. Mobile fitting from Sheffield & surrounding. Quote via WhatsApp.",
    eyebrow: "Protection",
    intro:
      "Paint protection film (PPF) is a clear, self-healing urethane layer that shields paint from stone chips, road grit, and light scratches. At RIGN we focus on practical, smaller PPF jobs — high-impact panels and edges — so you get real protection without a full-front package you may not need. Mobile across South Yorkshire.",
    sections: [
      {
        title: "What is PPF?",
        body: "PPF (sometimes called clear bra) is a transparent film bonded to paint. It absorbs impact from chips and can self-heal fine swirl marks from heat. Ideal for bumper corners, bonnet leading edges, mirrors, door cups, and sills — the parts that take the hit on Yorkshire roads.",
      },
      {
        title: "Smaller jobs, done properly",
        body: "We specialise in focused PPF installs rather than forcing a full-vehicle wrap. That keeps cost sensible and turnaround faster — perfect if you want protection where it counts after a chrome delete or detail.",
      },
      {
        title: "Why pair PPF with chrome delete or detailing",
        body: "Many clients combine a blackout trim package with clear film on high-wear zones. You get the look and the armour. Ask when you send photos — we'll recommend what's worth protecting on your car.",
      },
    ],
    process: [
      {
        title: "Photos & areas",
        body: "Tell us which panels you want covered — or ask us to recommend high-impact zones.",
      },
      {
        title: "Quote",
        body: "Clear pricing for the panels agreed. No surprise upsells.",
      },
      {
        title: "Surface prep",
        body: "Paint must be clean and corrected where needed so film sits flat.",
      },
      {
        title: "Install & check",
        body: "Film applied, edges sealed, finish inspected before we leave.",
      },
    ],
    faqs: [
      {
        q: "Is PPF the same as a vinyl wrap?",
        a: "No. PPF is clear protective film designed to absorb chips. Colour wraps and chrome delete film are different products with different jobs.",
      },
      {
        q: "Do you do full-front PPF packages?",
        a: "We focus on smaller, targeted PPF jobs. If you need a full-front install, ask — we'll tell you honestly whether it's the right fit for us or point you the right way.",
      },
      {
        q: "How long does PPF last?",
        a: "Quality film, fitted well, typically lasts several years depending on exposure and care. We'll confirm care guidance at handover.",
      },
      {
        q: "Can I get PPF near Sheffield?",
        a: "Yes. We're South Yorkshire based and mobile — Sheffield, Rotherham, Barnsley, Chesterfield, Doncaster, and surrounding towns.",
      },
    ],
    imageSrc: `${NEW}/black-car-detail-landscape.webp`,
    imageAlt: "Dark vehicle paint detail under studio lights — paint protection ready",
  },
  {
    slug: "detailing",
    name: "Detailing",
    shortName: "Detailing",
    href: "/services/detailing",
    h1: "Car Detailing in South Yorkshire",
    metaDescription:
      "Mobile car detailing in South Yorkshire — Sheffield, Rotherham, Barnsley & surrounding. Exterior and interior, showroom-ready. Get Your Quote on WhatsApp.",
    eyebrow: "Care",
    intro:
      "Detailing is more than a wash. It's a structured clean and finish — exterior and interior — so the car looks intentional again. RIGN offers quiet, thorough mobile detailing across South Yorkshire: Sheffield, Rotherham, Barnsley, Chesterfield, Doncaster, and towns in between.",
    sections: [
      {
        title: "Exterior detailing",
        body: "Safe wash, decontamination where needed, glass, wheels, and a finish that sits quiet under light — not a foam-party for Instagram. We prep properly before any polish or film work too.",
      },
      {
        title: "Interior detailing",
        body: "Vacuum, plastics, leather or fabric care, and glass — staged so the cabin matches the exterior standard. Tell us about pets, kids, or long-term neglect when you enquire so we scope realistically.",
      },
      {
        title: "Why mobile detailing from RIGN",
        body: "Same specialist standard as our chrome delete and correction work. We come to you — driveway, workplace, or agreed spot — across the South Yorkshire corridor and nearby West Yorkshire / Derbyshire towns by appointment.",
      },
    ],
    process: [
      {
        title: "Tell us the brief",
        body: "Exterior only, interior, or both. Photos help if the car needs heavy work.",
      },
      {
        title: "Book a slot",
        body: "We schedule around your location in South Yorkshire.",
      },
      {
        title: "Detail on site",
        body: "Methodical stages. No rush finish.",
      },
      {
        title: "Aftercare",
        body: "Simple guidance so the result lasts longer between visits.",
      },
    ],
    faqs: [
      {
        q: "Do you offer mobile car detailing near me in South Yorkshire?",
        a: "Yes. Mobile detailing is core to how we work — Sheffield and surrounding towns, plus further UK travel by appointment.",
      },
      {
        q: "Is detailing the same as a hand wash?",
        a: "No. Detailing is staged cleaning and finishing. A basic wash is one step inside a proper detail.",
      },
      {
        q: "Can detailing be combined with chrome delete or paint correction?",
        a: "Often yes. Many jobs start with a detail so trim film or polishing sits on a clean surface. Mention everything you want when you send photos.",
      },
      {
        q: "How much does a detail cost?",
        a: "Depends on vehicle size and condition. Send photos or a short description for a straight quote.",
      },
    ],
    imageSrc: `${NEW}/audi-s8-landscape.webp`,
    imageAlt: "Clean Audi in studio — detailing finish, South Yorkshire",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    shortName: "Paint correction",
    href: "/services/paint-correction",
    h1: "Paint Correction & Machine Polishing in South Yorkshire",
    metaDescription:
      "Paint correction and machine polishing in South Yorkshire — swirl removal, clarity restored. Sheffield, Rotherham, Barnsley & surrounding. Photo quote.",
    eyebrow: "Finish",
    intro:
      "Paint correction (machine polishing) removes swirls, light scratches, and haze so clearcoat looks sharp again under real light. From our South Yorkshire base we assess honestly from photos — then polish to a controlled finish, not a one-pass \"shine\" that hides defects.",
    sections: [
      {
        title: "What is paint correction?",
        body: "Machine polishing levels microscopic peaks and valleys in clearcoat. Single-stage work improves clarity; multi-stage correction goes further on neglected or soft paint. We scope based on what your photos show and what you want to achieve.",
      },
      {
        title: "Machine polishing done properly",
        body: "Pads, compounds, and technique matched to the paint. We don't chase perfection that removes too much clearcoat. Expect clear communication about what's realistic for your car.",
      },
      {
        title: "Before chrome delete, PPF, or sale",
        body: "Correction often sits before protection film or after a deep detail. Selling soon? A corrected finish photographs better and reads cleaner on the forecourt — ask if that's your goal.",
      },
    ],
    process: [
      {
        title: "Photo assessment",
        body: "We look at swirls, holograms, and overall condition from your images.",
      },
      {
        title: "Agreed stage",
        body: "Single-stage enhancement or deeper correction — priced before we start.",
      },
      {
        title: "Wash & polish",
        body: "Clean canvas, then controlled machine work panel by panel.",
      },
      {
        title: "Inspect & protect",
        body: "Check under light. Optional sealant or link into PPF on high-wear zones.",
      },
    ],
    faqs: [
      {
        q: "Will machine polishing remove all scratches?",
        a: "It removes or reduces swirls and many light marks. Deep scratches into basecoat may still need touch-up or other work — we'll say so upfront.",
      },
      {
        q: "How long does paint correction take?",
        a: "From a few hours for a light enhancement to a full day or more for multi-stage work. Your quote will include timing.",
      },
      {
        q: "Do you offer paint correction in Barnsley and Chesterfield?",
        a: "Yes — mobile across South Yorkshire including Barnsley, Chesterfield, Sheffield, Rotherham, Doncaster, and surrounding areas.",
      },
      {
        q: "Should I correct paint before chrome delete?",
        a: "Not always required for trim-only film, but if body paint will be on show we often recommend a detail or light polish first. We'll advise from your photos.",
      },
    ],
    imageSrc: `${NEW}/paint-correction-landscape.webp`,
    imageAlt: "Paint correction finish on dark vehicle — South Yorkshire",
  },
];

export function getServiceBySlug(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
