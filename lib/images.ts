/**
 * Site image catalog — paths under public/Images of cars/
 * WebP preferred for display. JPEG originals kept on disk for safety.
 */

const BASE = "/Images of cars";

export type SiteImage = {
  src: string;
  alt: string;
  caption: string;
};

export type SiteImageWithSize = SiteImage & {
  width: number;
  height: number;
};

export const heroImage: SiteImage = {
  src: `${BASE}/chrome-delete-audi-suv-rign-studio-south-yorkshire.webp`,
  alt: "Audi SUV in the RIGN studio — premium automotive care, South Yorkshire",
  caption: "RIGN studio — refined automotive",
};

/** Portrait hero for mobile — fills the phone screen without awkward crop */
export const heroImageMobile: SiteImage = {
  src: `${BASE}/chrome-delete-black-suv-mobile-hero-south-yorkshire.webp`,
  alt: "Black luxury SUV in studio — refined automotive finish, South Yorkshire",
  caption: "Mobile hero",
};

/** RIGN brand mark — white on transparent, used site-wide except the header */
export const brandMark = {
  src: "/rign-logo/rign-mark.png",
  alt: "RIGN",
} as const;

/** Dark cinematic vehicle backdrops for home MistBand sections — each unique */
export const bandBackdrops = {
  dealerships: `${BASE}/chrome-delete-range-rover-sport-svr-south-yorkshire.webp`,
  areas: `${BASE}/heroimagejpg.webp`,
  faq: `${BASE}/chrome-delete-mercedes-amg-gt-south-yorkshire.webp`,
} as const;

/** Home page — quiet recent-fits strip (completed work only, no before/after composites) */
export const recentFitsImages: SiteImageWithSize[] = [
  {
    src: `${BASE}/chrome-delete-range-rover-sport-svr-south-yorkshire.webp`,
    alt: "Chrome delete on Range Rover Sport SVR — South Yorkshire",
    caption: "Range Rover Sport SVR — blacked-out exterior",
    width: 1024,
    height: 682,
  },
  {
    src: `${BASE}/chrome-delete-mercedes-amg-gt-south-yorkshire.webp`,
    alt: "Chrome delete on Mercedes-AMG GT 4-Door — South Yorkshire",
    caption: "Mercedes-AMG GT 4-Door",
    width: 736,
    height: 837,
  },
  {
    src: `${BASE}/chrome-delete-porsche-panamera-south-yorkshire.webp`,
    alt: "Chrome delete on Porsche Panamera — South Yorkshire",
    caption: "Porsche Panamera — studio finish",
    width: 480,
    height: 640,
  },
  {
    src: `${BASE}/chrome-delete-audi-grille-blackout-south-yorkshire.webp`,
    alt: "Audi grille chrome delete blackout — South Yorkshire",
    caption: "Audi — grille blackout",
    width: 1200,
    height: 675,
  },
  {
    src: `${BASE}/chrome-delete-range-rover-sport-matte-south-yorkshire.webp`,
    alt: "Chrome delete on matte Range Rover Sport — South Yorkshire",
    caption: "Range Rover Sport — matte black finish",
    width: 1024,
    height: 683,
  },
];

/** Gallery grid — excludes hero (used on home only) */
export const galleryImages: SiteImage[] = [
  {
    src: `${BASE}/chrome-delete-range-rover-sport-svr-south-yorkshire.webp`,
    alt: "Chrome delete on Range Rover Sport SVR — South Yorkshire",
    caption: "Range Rover Sport SVR — blacked-out exterior",
  },
  {
    src: `${BASE}/chrome-delete-range-rover-sport-matte-south-yorkshire.webp`,
    alt: "Chrome delete on matte Range Rover Sport — South Yorkshire",
    caption: "Range Rover Sport — matte black finish",
  },
  {
    src: `${BASE}/chrome-delete-range-rover-sport-black-south-yorkshire.webp`,
    alt: "Chrome delete on black Range Rover Sport — South Yorkshire",
    caption: "Range Rover Sport — stealth black pack",
  },
  {
    src: `${BASE}/chrome-delete-mercedes-amg-gt-south-yorkshire.webp`,
    alt: "Chrome delete on Mercedes-AMG GT 4-Door — South Yorkshire",
    caption: "Mercedes-AMG GT 4-Door",
  },
  {
    src: `${BASE}/chrome-delete-mercedes-e63-detail-south-yorkshire.webp`,
    alt: "Chrome delete detail on Mercedes-AMG E 63 — South Yorkshire",
    caption: "Mercedes-AMG E 63 — rear detail",
  },
  {
    src: `${BASE}/chrome-delete-porsche-panamera-south-yorkshire.webp`,
    alt: "Chrome delete on Porsche Panamera — South Yorkshire",
    caption: "Porsche Panamera — studio finish",
  },
  {
    src: `${BASE}/chrome-delete-audi-grille-blackout-south-yorkshire.webp`,
    alt: "Audi grille chrome delete blackout — South Yorkshire",
    caption: "Audi — grille blackout",
  },
  {
    src: `${BASE}/chrome-delete-audi-wheel-detail-south-yorkshire.webp`,
    alt: "Audi wheel and trim detail chrome delete — South Yorkshire",
    caption: "Audi — wheel & trim detail",
  },
  {
    src: `${BASE}/chrome-delete-lexus-grille-south-yorkshire.webp`,
    alt: "Lexus spindle grille chrome delete — South Yorkshire",
    caption: "Lexus — grille & emblem",
  },
  {
    src: `${BASE}/chrome-delete-suv-window-surround-south-yorkshire.webp`,
    alt: "SUV window surround chrome delete — South Yorkshire",
    caption: "SUV — window surround delete",
  },
  {
    src: `${BASE}/chrome-delete-side-mirror-trim-south-yorkshire.webp`,
    alt: "Side mirror and trim chrome delete detail — South Yorkshire",
    caption: "Side mirror & trim detail",
  },
  {
    src: `${BASE}/chrome-delete-window-trim-before-after-south-yorkshire.webp`,
    alt: "Window trim chrome delete before and after — South Yorkshire",
    caption: "Window trim — before & after",
  },
  {
    src: `${BASE}/chrome-delete-tesla-model-3-before-after-south-yorkshire.webp`,
    alt: "Tesla Model 3 chrome delete before and after — South Yorkshire",
    caption: "Tesla Model 3 — before & after",
  },
];
