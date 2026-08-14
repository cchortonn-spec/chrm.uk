import type { Metadata } from "next";
import GuideArticleView from "@/components/GuideArticleView";
import { getGuideBySlug } from "@/lib/guides-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

const guide = getGuideBySlug("buying-a-prestige-car-south-yorkshire")!;

export const metadata: Metadata = createMetadata({
  title: "Buying a Prestige Car in South Yorkshire",
  description: guide.metaDescription,
  canonicalPath: guide.href,
});

export default function BuyingAPrestigeCarSouthYorkshireGuidePage() {
  return <GuideArticleView guide={guide} />;
}
