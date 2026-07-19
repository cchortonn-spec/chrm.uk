import Image from "next/image";

type BrandMarkProps = {
  /** Visual size — width in pixels at default density */
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: { width: 160, height: 36, className: "h-9 w-auto sm:h-10" },
  md: { width: 220, height: 50, className: "h-12 w-auto sm:h-14" },
  lg: { width: 300, height: 68, className: "h-16 w-auto sm:h-20" },
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
