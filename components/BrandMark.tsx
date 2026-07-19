import Image from "next/image";

type BrandMarkProps = {
  /** Visual size — width in pixels at default density */
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: { width: 120, height: 24, className: "h-5 w-auto sm:h-7" },
  md: { width: 160, height: 32, className: "h-6 w-auto sm:h-9 md:h-10" },
  lg: { width: 220, height: 44, className: "h-8 w-auto sm:h-11 md:h-12" },
} as const;

/**
 * RIGN brand mark — used site-wide except the header (which uses the full lockup).
 */
export default function BrandMark({ size = "md", className = "" }: BrandMarkProps) {
  const s = sizeMap[size];

  return (
    <Image
      src="/rign-logo/rign-mark.png"
      alt="RIGN"
      width={s.width}
      height={s.height}
      sizes={`${s.width}px`}
      className={`${s.className} ${className}`.trim()}
    />
  );
}
