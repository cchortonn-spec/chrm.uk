import type { MetadataRoute } from "next";
import { getSiteUrl, SITE_ROUTES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const now = new Date();

  return SITE_ROUTES.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/what-we-do" ? 0.9 : 0.7,
  }));
}
