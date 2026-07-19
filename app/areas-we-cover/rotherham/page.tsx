import type { Metadata } from "next";
import LocationPageView from "@/components/LocationPageView";
import { getTownBySlug } from "@/lib/locations-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

const town = getTownBySlug("rotherham")!;

export const metadata: Metadata = createMetadata({
  title: town.h1,
  description: town.metaDescription,
  canonicalPath: town.href,
});

export default function RotherhamPage() {
  return <LocationPageView town={town} />;
}
