import Image from "next/image";
import { MATERIAL, MATERIAL_TICKER_ITEMS } from "@/lib/material";

function TickerSequence({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-6 pr-6 md:gap-8 md:pr-8"
      aria-hidden={duplicate || undefined}
    >
      <Image
        src={MATERIAL.logoSrc}
        alt={duplicate ? "" : "3M"}
        width={56}
        height={30}
        className="h-3.5 w-auto shrink-0 md:h-4"
      />
          <span className="text-accent-muted/70" aria-hidden>
            |
          </span>
          {MATERIAL_TICKER_ITEMS.map((item, index) => (
            <span key={`${duplicate ? "d" : "a"}-${item}`} className="flex items-center gap-6 md:gap-8">
              <span className="text-[10px] font-medium tracking-[0.14em] text-foreground-secondary uppercase whitespace-nowrap md:text-[11px]">
                {item}
              </span>
              {index < MATERIAL_TICKER_ITEMS.length - 1 ? (
                <span className="text-accent-muted/70" aria-hidden>
                  |
                </span>
              ) : null}
            </span>
          ))}
          <span className="text-accent-muted/70" aria-hidden>
            |
          </span>
    </div>
  );
}

/**
 * Small continuous ticker under the hero:
 * 3M logo | Premium Vehicle Wrapping Film | PPF | … | Winter Prep
 */
export default function MaterialTicker() {
  return (
    <section
      className="overflow-hidden border-b border-accent-faint bg-background-secondary/90 py-3 md:py-3.5"
      aria-label="3M material specification"
    >
      <div className="material-ticker flex w-max">
        <TickerSequence />
        <TickerSequence duplicate />
      </div>
    </section>
  );
}
