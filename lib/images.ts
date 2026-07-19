/**
 * Site image catalog — paths under public/Images of cars/
 * Home page uses the `new/` set (portrait + landscape).
 */

const BASE = "/Images of cars";
const NEW = `${BASE}/new`;

export type SiteImage = {
  src: string;
  alt: string;
  caption: string;
};

export type SiteImageWithSize = SiteImage & {
  width: number;
  height: number;
};

/** Desktop hero — landscape */
export const heroImage: SiteImage = {
  src: `${NEW}/merc-landscape.webp`,
  alt: "Black Mercedes in studio — refined automotive finish, South Yorkshire",
  caption: "RIGN studio — Mercedes",
};

/** Portrait hero for mobile — fills the phone screen without awkward crop */
export const heroImageMobile: SiteImage = {
  src: `${NEW}/merc-portrait.webp`,
  alt: "Black Mercedes in studio — refined automotive finish, South Yorkshire",
  caption: "Mobile hero",
};

/** RIGN brand mark — white on transparent, used site-wide except the header */
export const brandMark = {
  src: "/rign-logo/rign-mark.png",
  alt: "RIGN",
} as const;

/** Dark cinematic vehicle backdrops for home MistBand sections — each unique */
export const bandBackdrops = {
  dealerships: `${NEW}/rsq7-landscape.webp`,
  areas: `${NEW}/audi-s8-landscape.webp`,
  faq: `${NEW}/black-car-detail-landscape.webp`,
} as const;

/**
 * Home auto-slideshow — portrait set for phones (≈9:16), landscape for desktop (≈16:9).
 * Displayed in fixed aspect frames so every slide matches.
 */
export const homeSlideshowMobile: SiteImage[] = [
  {
    src: `${NEW}/merc-portrait.webp`,
    alt: "Black Mercedes — studio finish",
    caption: "Mercedes",
  },
  {
    src: `${NEW}/merc2-portrait.webp`,
    alt: "Black Mercedes rear — studio finish",
    caption: "Mercedes rear",
  },
  {
    src: `${NEW}/rsq7-portrait.webp`,
    alt: "Audi RS Q7 — chrome delete finish",
    caption: "RS Q7",
  },
  {
    src: `${NEW}/golf-r-portrait.webp`,
    alt: "Golf R — paint correction",
    caption: "Golf R",
  },
  {
    src: `${NEW}/bmw-portrait.webp`,
    alt: "BMW — refined finish",
    caption: "BMW",
  },
];

export const homeSlideshowDesktop: SiteImage[] = [
  {
    src: `${NEW}/merc-landscape.webp`,
    alt: "Black Mercedes — studio landscape",
    caption: "Mercedes",
  },
  {
    src: `${NEW}/rsq7-landscape.webp`,
    alt: "Audi RS Q7 — studio landscape",
    caption: "RS Q7",
  },
  {
    src: `${NEW}/black-car-detail-landscape.webp`,
    alt: "Black car detail under studio lights",
    caption: "Detail",
  },
  {
    src: `${NEW}/audi-s8-landscape.webp`,
    alt: "Audi S8 — clean studio finish",
    caption: "Audi S8",
  },
  {
    src: `${NEW}/paint-correction-landscape.webp`,
    alt: "Paint correction before and after",
    caption: "Paint correction",
  },
];

/** Gallery grid — legacy set (gallery page); home uses new/ only */
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
