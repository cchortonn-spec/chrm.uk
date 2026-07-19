# RIGN — WhatsApp Button Finalisation

Paste into Cursor to complete the WhatsApp CTA — the primary
conversion mechanism on the site.

---

## Number
Confirmed: this is the RIGN business WhatsApp, deliberately the same
number used elsewhere as a personal business line — not a mix-up.

## `.env.local`
```
NEXT_PUBLIC_WHATSAPP_NUMBER=447398415417
```
Digits only — no `+`, no spaces, no leading zero. This is the format
`wa.me` links require.

## Link behaviour
Build every WhatsApp link in the format:
```
https://wa.me/{NEXT_PUBLIC_WHATSAPP_NUMBER}?text={encoded pre-filled message}
```

Pre-filled message (URL-encoded), used to reduce friction and reinforce
the 4-photo CTA:
> "Hi, I'd like a quote — I'll send over some photos and let you know
> what I'm after."

**No hardcoded numbers anywhere.** Every instance — hero, sticky mobile
bar, header, footer, gallery captions, contact page — must pull from
`NEXT_PUBLIC_WHATSAPP_NUMBER`, no exceptions. Check `StickyMobileCTA`
specifically — it's the component most likely to have been hand-typed
separately from the rest.

## Styling — visible, not overpowering
This is a luxury/high-end automotive brand targeting dealerships and
serious car owners, not a boiler-repair callout site. Style
accordingly:

- **No WhatsApp default green bubble, no pulsing/flashing animation.**
  Use the RIGN colour palette from `rignbranding.md` throughout —
  not WhatsApp's brand green — unless that palette specifically calls
  for it as an accent
- **One consistent button style and size** across every placement —
  not a large version in the hero and a small one elsewhere
- **Icon + short label together** ("Chat on WhatsApp" or similar), not
  an icon-only bubble — reads clearer and more considered
- **Sticky mobile bar**: present but restrained — a clean fixed bar,
  not a floating circular button drifting over content on scroll
- **No competing CTAs in the same viewport** — when WhatsApp is on
  screen it should be the strongest visual pull, not fighting a "Get a
  Free Quote" button or anything else for attention
- **Minimum comfortable tap target on mobile** (~44x44px) — this is
  the primary conversion action on a mobile-first site, so accuracy of
  tap matters as much as visibility
- **Subtle hover/tap state only** — slight scale or colour shift,
  nothing bouncing, glowing, or looping. Confidence, not urgency

## Test before calling this done
1. Every WhatsApp instance opens a chat to the same number
2. Pre-filled message text appears correctly, not double-encoded or
   broken
3. No instance uses a hardcoded number — confirm by searching the
   codebase for the raw digits and checking nothing outside the env
   var reference turns up
4. Buttons look and feel consistent across hero, sticky bar, header,
   footer, gallery, and contact page
5. Test on an actual phone, not just desktop dev tools — confirm the
   sticky mobile bar doesn't overlap or obscure other content, and the
   tap target is comfortable to hit accurately
