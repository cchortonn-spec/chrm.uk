import type { Metadata } from "next";
import GuideArticleView from "@/components/GuideArticleView";
import { getGuideBySlug } from "@/lib/guides-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

const guide = getGuideBySlug("south-yorkshire-car-meets-and-shows")!;

export const metadata: Metadata = createMetadata({
  title: guide.title,
  description: guide.metaDescription,
  canonicalPath: guide.href,
});

export default function GuidePage() {
  return <GuideArticleView guide={guide} />;
}
