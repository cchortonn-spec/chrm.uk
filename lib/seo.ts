import type { Metadata } from "next";

const SITE_NAME = "CHRM UK";
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

function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://chrmuk.com"
  );
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
  "/pricing",
  "/dealerships",
  "/areas-we-cover",
  "/faq",
  "/guides",
  "/contact",
  "/privacy",
  "/terms",
] as const;
