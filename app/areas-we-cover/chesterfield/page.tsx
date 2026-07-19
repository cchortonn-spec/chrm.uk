import type { Metadata } from "next";
import LocationPageView from "@/components/LocationPageView";
import { getTownBySlug } from "@/lib/locations-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

const town = getTownBySlug("chesterfield")!;

export const metadata: Metadata = createMetadata({
  title: town.h1,
  description: town.metaDescription,
  canonicalPath: town.href,
});

export default function ChesterfieldPage() {
  return <LocationPageView town={town} />;
}
