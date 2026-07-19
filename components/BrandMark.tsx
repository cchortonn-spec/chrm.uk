import Image from "next/image";

type BrandMarkProps = {
  /** Visual size — width in pixels at default density */
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: { width: 96, height: 64, className: "h-8 w-auto" },
  md: { width: 140, height: 93, className: "h-11 w-auto" },
  lg: { width: 200, height: 133, className: "h-14 w-auto sm:h-16" },
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
