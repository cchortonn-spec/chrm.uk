import type { Metadata } from "next";

const SITE_NAME = "RIGN";
const DEFAULT_OG_IMAGE = "/og-default.jpg"; // TODO: replace when branding assets land

export type PageSeoConfig = {
  title: string;
  description: string;
  /** Path only, e.g. "/gallery" — used for canonical + OG url */
  canonicalPath: string;
  /** Optional absolute or site-relative OG image path */
  ogImage?: string;
  /** Set false for pages that should not be indexed (rare) */
  index?: boolean;
};

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL
    ?.trim()
    .replace(/\/$/, "");

  if (!configuredUrl || configuredUrl === "https://rign.uk") {
    return "https://www.rign.uk";
  }

  return configuredUrl;
}

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const siteUrl = getSiteUrl();
  return `${siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

/**
 * Build per-page Metadata so every route gets its own title, description,
 * Open Graph, and Twitter tags. Do NOT hardcode OG tags in layout.tsx —
 * that caused shared/duplicated OG tags across pages on a previous build.
 */
export function generateMetadata(page: PageSeoConfig): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = toAbsoluteUrl(page.canonicalPath || "/");
  const ogImage = toAbsoluteUrl(page.ogImage || DEFAULT_OG_IMAGE);
  const fullTitle =
    page.canonicalPath === "/" || page.canonicalPath === ""
      ? page.title
      : `${page.title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description: page.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        {
          url: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    manifest: "/site.webmanifest",
    appleWebApp: {
      capable: true,
      title: SITE_NAME,
      statusBarStyle: "black-translucent",
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [ogImage],
    },
    robots: {
      index: page.index ?? true,
      follow: page.index ?? true,
    },
  };
}

/** Shared list of public routes — used by sitemap.ts */
export const SITE_ROUTES = [
  "/",
  "/gallery",
  "/about",
  "/what-we-do",
  "/services/chrome-delete",
  "/services/chrome-delete/sheffield",
  "/services/paint-protection-film",
  "/services/detailing",
  "/services/detailing/rotherham",
  "/services/paint-correction",
  "/services/paint-correction/barnsley",
  "/pricing",
  "/dealerships",
  "/areas-we-cover",
  "/areas-we-cover/sheffield",
  "/areas-we-cover/rotherham",
  "/areas-we-cover/barnsley",
  "/areas-we-cover/chesterfield",
  "/areas-we-cover/doncaster",
  "/faq",
  "/guides",
  "/guides/south-yorkshire-car-meets-and-shows",
  "/guides/best-drives-and-car-spots-south-yorkshire",
  "/guides/what-is-chrome-delete",
  "/guides/ppf-vs-chrome-delete",
  "/guides/paint-correction-vs-full-respray",
  "/contact",
  "/privacy",
  "/terms",
] as const;
