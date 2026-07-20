/**
 * JSON-LD helpers for local SEO pages.
 */

import { getSiteUrl } from "@/lib/seo";

const SITE_URL = getSiteUrl();

export function localBusinessNode(extra?: Record<string, unknown>) {
  return {
    "@type": "AutomotiveBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "RIGN",
    url: SITE_URL,
    email: "info@rign.uk",
    description:
      "Refined automotive — chrome delete, PPF, detailing, and paint correction. South Yorkshire based, UK-wide by appointment.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "South Yorkshire",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
    ...extra,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    provider: localBusinessNode(),
    areaServed: {
      "@type": "AdministrativeArea",
      name: opts.areaName || "South Yorkshire",
    },
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: localBusinessNode(),
    publisher: localBusinessNode(),
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
  };
}
