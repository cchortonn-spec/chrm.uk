/** Shared WhatsApp quote CTA — number always from env, never hardcoded. */

export const WHATSAPP_PREFILL_MESSAGE =
  "Hi, I'd like a quote for chrome delete — I'll send over some photos.";

export function getWhatsAppNumber(): string | null {
  const digits = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  return digits || null;
}

export function getWhatsAppHref(): string {
  const number = getWhatsAppNumber();
  if (!number) return "#whatsapp-number-missing";
  const text = encodeURIComponent(WHATSAPP_PREFILL_MESSAGE);
  return `https://wa.me/${number}?text=${text}`;
}
