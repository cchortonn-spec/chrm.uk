import Image from "next/image";

type BrandMarkProps = {
  /** Visual size — width in pixels at default density */
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: { width: 72, height: 34, className: "h-7 w-auto" },
  md: { width: 110, height: 52, className: "h-10 w-auto" },
  lg: { width: 160, height: 76, className: "h-14 w-auto sm:h-16" },
} as const;

/**
 * C|R brand mark — used site-wide except the header (which uses the full wordmark).
 * Served from a URL-safe copy of the source mark (white on transparent).
 */
export default function BrandMark({ size = "md", className = "" }: BrandMarkProps) {
  const s = sizeMap[size];

  return (
    <Image
      src="/chrm_Logo/cr-logo.png"
      alt="CHRM"
      width={s.width}
      height={s.height}
      sizes={`${s.width}px`}
      className={`${s.className} ${className}`.trim()}
    />
  );
}
