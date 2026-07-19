import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Compact floating quote chip — mobile only.
 * Fixed to the viewport corner (does not add page height).
 */
export default function StickyMobileCTA() {
  return (
    <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 md:hidden">
      <WhatsAppButton variant="sticky-mobile" label="Quote" />
    </div>
  );
}
