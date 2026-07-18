import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import SectionWrapper from "@/components/SectionWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <SectionWrapper className="flex min-h-[70vh] flex-col justify-center py-32">
      <BrandMark size="md" className="mb-10 opacity-90" />
      <p className="text-[11px] font-medium tracking-[0.2em] text-foreground-secondary uppercase">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-medium tracking-tight md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-foreground-secondary">
        This route doesn&apos;t exist. Head home, or get a quote instead.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link
          href="/"
          className="border border-border px-6 py-3 text-xs font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:border-foreground"
        >
          Home
        </Link>
        <WhatsAppButton variant="inline" label="Get Your Quote" />
      </div>
    </SectionWrapper>
  );
}
