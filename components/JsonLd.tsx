type JsonLdProps = {
  /** Any valid JSON-LD schema object (LocalBusiness, Service, FAQPage, BreadcrumbList, etc.) */
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Generic JSON-LD injector for structured data.
 * Pass a schema object — used across pages once content lands.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
