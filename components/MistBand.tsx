import Image from "next/image";
import { bandBackdrops } from "@/lib/images";

type MistBandProps = {
  children: React.ReactNode;
  className?: string;
  /** Dark vehicle backdrop — pass a unique image per section */
  src?: string;
};

/**
 * Full-bleed dark vehicle background — subtle, cinematic, top-dog energy.
 */
export default function MistBand({
  children,
  className = "",
  src = bandBackdrops.dealerships,
}: MistBandProps) {
  return (
    <section
      className={`relative overflow-hidden bg-black ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover object-[center_40%] opacity-65 saturate-[0.5] brightness-[0.78] contrast-115"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.45)_100%)]" />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
