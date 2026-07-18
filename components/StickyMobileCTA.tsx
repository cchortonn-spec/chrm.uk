import WhatsAppButton from "@/components/WhatsAppButton";

/** Fixed bottom bar — mobile only. Frosted glass bar. */
export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-accent-soft bg-black/50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <WhatsAppButton variant="sticky-mobile" label="Get Your Quote" />
    </div>
  );
}
