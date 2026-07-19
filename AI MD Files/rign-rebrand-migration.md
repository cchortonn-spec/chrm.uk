# RIGN Rebrand Migration Spec (completed)

This documents the rename, reskin, and repositioning of the original
build into RIGN. Kept as reference for what changed and why.

---

## 1. What did not change
- Next.js route structure and folder layout
- All existing components (`Header`, `Footer`, `WhatsAppButton`,
  `StickyMobileCTA`, `Hero`, `SectionWrapper`, `JsonLd`)
- WhatsApp-first CTA mechanism and click-to-chat logic
- Resend integration logic (API route, validation, honeypot, rate
  limiting, reply-to behaviour)
- Legal/cookie consent framework structure
- GA4/GTM/schema architecture (values changed, structure didn't)
- Page skeleton: Home, Gallery, About, service pillar page, Pricing,
  Dealerships, Areas Covered, FAQ, Guides, Contact

## 2. Global rename (completed)
- Brand name → "RIGN" (all-caps, per the logo)
- Domain → `rign.uk`
- Sending address → `info@rign.uk`
- Delivery inbox → `rign.uk@gmail.com`
- Email subject prefix → `[RIGN]`
- `.env.local` values: site URL, contact email updated; WhatsApp
  number carried over unchanged
- Organization/LocalBusiness schema `name` field, and every
  page-level metadata title/description updated
- OG/Twitter meta tags, favicon, and brand references in component
  copy all updated

## 3. Visual identity
RIGN logo: monochrome base — black background, brushed-metal/silver
wordmark, sharp/angular letterforms, "REFINED AUTOMOTIVE" as a small
letter-spaced tagline. Logo assets live in `public/rign-logo/`.
`rignbranding.md` is the current reference doc for colour, type, and
logo direction.

## 4. Positioning
RIGN offers chrome delete, detailing, and machine polishing / paint
correction as an even ladder of services — none framed as leading or
more important than the others. Paint protection (PPF) is in
development and is not listed publicly until it's ready.

Services page structure:
1. Chrome delete
2. Detailing
3. Machine polishing / paint correction
4. Paint protection (PPF) — not public yet

## 5. WhatsApp pre-filled message
> "Hi, I'd like a quote — I'll send over some photos and let you know
> what I'm after."

## 6. Page-by-page
**Rename only**: Privacy Policy, Terms, Contact page structure, Areas
We Cover, FAQ formatting rules

**Copy rewritten**: Home hero and "why choose us" section, About page,
the services pillar page, Dealerships page (speaks to the full
service range)

## 7. Infra (outside this codebase)
- Domain `rign.uk` connected to Vercel
- Resend verified on the new domain, sending address updated
- Google Search Console / GA4 — update or re-verify for the new domain
- Google Business Profile — decide rename vs. fresh profile
  deliberately if one exists from before
