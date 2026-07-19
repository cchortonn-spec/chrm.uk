/**
 * Film / material specs used across the site.
 * RIGN installs premium 3M vehicle wrapping film for chrome delete.
 */
export const MATERIAL = {
  brand: "3M",
  logoSrc: "/brands/3m-logo.png",
  name: "Premium Vehicle Wrapping Film",
  type: "Cast-PVC",
  durability: "Up to 8 year durability",
  use: "External use",
  thickness: "90 micron",
  adhesive: "Grey, permanent adhesive",
  dechroming: "Dechroming options available",
  shortLine:
    "3M premium cast-PVC wrapping film — up to 8 year durability, 90 micron, external grade.",
} as const;

/** Items for the home-page material ticker (logo rendered separately) */
export const MATERIAL_TICKER_ITEMS = [
  MATERIAL.name,
  MATERIAL.type,
  MATERIAL.durability,
  MATERIAL.use,
  MATERIAL.thickness,
  MATERIAL.adhesive,
  MATERIAL.dechroming,
] as const;
