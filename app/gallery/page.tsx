import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";
import { galleryImages } from "@/lib/images";
import { generateMetadata as createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description:
    "Chrome delete work across South Yorkshire — Range Rover, Mercedes, Audi, Porsche, and more.",
  canonicalPath: "/gallery",
});

export default function GalleryPage() {
  return (
    <PageShell
      eyebrow="Gallery"
      title="Work."
      description="Chrome delete finishes — captioned by vehicle and detail. South Yorkshire based, UK-wide."
    >
      <SectionWrapper className="pb-24">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden bg-background-secondary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <figcaption className="relative z-10 p-6">
                <p className="text-sm font-medium tracking-wide text-foreground">
                  {image.caption}
                </p>
                <p className="mt-2 text-[11px] tracking-[0.08em] text-foreground-secondary">
                  Want this on your car? Send four photos.
                </p>
                <div className="mt-4">
                  <WhatsAppButton variant="inline" label="Get Your Quote" />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
