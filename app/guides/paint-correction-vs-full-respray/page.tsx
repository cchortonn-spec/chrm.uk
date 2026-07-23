import type { Metadata } from "next";
import GuideArticleView from "@/components/GuideArticleView";
import { getGuideBySlug } from "@/lib/guides-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

const guide = getGuideBySlug("paint-correction-vs-full-respray")!;

export const metadata: Metadata = createMetadata({
  title: "Paint Correction vs Respray: Which Does Your Car Need?",
  description: guide.metaDescription,
  canonicalPath: guide.href,
});

export default function PaintCorrectionVsFullResprayGuidePage() {
  return <GuideArticleView guide={guide} />;
}
