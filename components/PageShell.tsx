import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  showClosingCta?: boolean;
};

/**
 * Shared editorial page shell — dark, quiet, brand-consistent.
 */
export default function PageShell({
  eyebrow,
  title,
  description,
  children,
  showClosingCta = true,
}: PageShellProps) {
  return (
    <>
      <SectionWrapper className="pb-16 pt-36 md:pb-20 md:pt-44">
        <BrandMark size="sm" className="opacity-80" />
        {eyebrow ? (
          <p className="accent-mark mt-6 text-[11px] font-medium tracking-[0.2em] text-accent-label uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={`max-w-3xl font-heading text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl ${eyebrow ? "mt-4" : "mt-6"}`}
        >
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-secondary md:text-lg">
          {description}
        </p>
      </SectionWrapper>

      {children}

      {showClosingCta ? (
        <SectionWrapper
          fullBleed
          secondary
          className="section-space border-t border-border"
        >
          <BrandMark size="sm" className="mb-8 opacity-70" />
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
              Get Your Quote
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
              Send four photos — front, back, both sides — and tell us what you
              want done.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <WhatsAppButton variant="hero" label="Get Your Quote" />
              <Link
                href="/contact"
                className="text-xs font-medium tracking-[0.14em] text-foreground-secondary uppercase transition-colors hover:text-foreground"
              >
                Or contact us →
              </Link>
            </div>
          </div>
        </SectionWrapper>
      ) : null}
    </>
  );
}
