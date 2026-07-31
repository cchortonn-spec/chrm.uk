import type { Metadata } from "next";
import GuideArticleView from "@/components/GuideArticleView";
import { getGuideBySlug } from "@/lib/guides-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

const guide = getGuideBySlug("winter-paint-care-south-yorkshire")!;

export const metadata: Metadata = createMetadata({
  title: "Winter Paint Care on South Yorkshire Roads",
  description: guide.metaDescription,
  canonicalPath: guide.href,
});

export default function WinterPaintCareSouthYorkshireGuidePage() {
  return <GuideArticleView guide={guide} />;
}
