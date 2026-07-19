import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Compact floating quote chip — mobile only.
 * Stays put while scrolling; chamfered corners (not square, not round).
 */
export default function StickyMobileCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="pointer-events-auto">
        <WhatsAppButton variant="sticky-mobile" label="Quote" />
      </div>
    </div>
  );
}
