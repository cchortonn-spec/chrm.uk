import type { Metadata } from "next";
import LocationPageView from "@/components/LocationPageView";
import { getTownBySlug } from "@/lib/locations-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

const town = getTownBySlug("barnsley")!;

export const metadata: Metadata = createMetadata({
  title: town.h1,
  description: town.metaDescription,
  canonicalPath: town.href,
});

export default function BarnsleyPage() {
  return <LocationPageView town={town} />;
}
