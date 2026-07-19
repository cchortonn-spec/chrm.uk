import type { Metadata } from "next";
import ServicePageView from "@/components/ServicePageView";
import { getServiceBySlug } from "@/lib/services-data";
import { generateMetadata as createMetadata } from "@/lib/seo";

const service = getServiceBySlug("chrome-delete")!;

export const metadata: Metadata = createMetadata({
  title: service.h1,
  description: service.metaDescription,
  canonicalPath: service.href,
});

export default function ChromeDeletePage() {
  return <ServicePageView service={service} />;
}
