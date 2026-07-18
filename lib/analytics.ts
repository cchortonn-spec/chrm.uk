/**
 * GA4 event helpers.
 * Safe to call from client components — no-ops when gtag is missing.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event" | "config" | "js" | "consent",
      targetOrAction: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

/** Fire when a WhatsApp CTA is clicked */
export function trackWhatsAppClick(placement?: string) {
  trackEvent("whatsapp_click", {
    placement: placement ?? "unknown",
  });
}

/** Fire when the contact form is submitted successfully */
export function trackFormSubmit(formName?: string) {
  trackEvent("form_submit", {
    form_name: formName ?? "contact",
  });
}

/** Fire when a phone number link is clicked (if added later) */
export function trackPhoneClick() {
  trackEvent("phone_click");
}

/** Fire when a gallery image / lightbox is viewed */
export function trackGalleryView(label?: string) {
  trackEvent("gallery_view", {
    item: label ?? "unknown",
  });
}
