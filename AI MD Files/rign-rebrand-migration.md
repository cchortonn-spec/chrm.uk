# CHRM UK → RIGN Rebrand Migration Spec

This is a rename, reskin, and repositioning of the existing chrmuk.com
build — not a rebuild. Keep all existing architecture, components, and
technical wiring. Do not regenerate the site from scratch.

**Blocking step first:** new domain must be secured before proceeding
past section 2 — Resend, email, DNS, and Search Console verification
all depend on it. Domain: **[TBD — confirm before starting]**

**Still open from last message:** was a Google Business Profile ever
set up for CHRM UK? If yes, that needs a deliberate decision (rename
vs. fresh profile), not a default rename — worth answering before
section 7 gets actioned.

---

## 1. What does NOT change
- Next.js route structure and folder layout
- All existing components (`Header`, `Footer`, `WhatsAppButton`,
  `StickyMobileCTA`, `Hero`, `SectionWrapper`, `JsonLd`)
- WhatsApp-first CTA mechanism and click-to-chat logic
- Resend integration logic (API route, validation, honeypot, rate
  limiting, reply-to behaviour)
- Legal/cookie consent framework structure
- GA4/GTM/schema architecture (values change, structure doesn't)
- Page skeleton: Home, Gallery, About, service pillar page, Pricing,
  Dealerships, Areas Covered, FAQ, Guides, Contact

## 2. Global rename
Find and replace every instance of:
- "CHRM UK" / "CHRM" → "RIGN" (all-caps, per the logo)
- `chrmuk.com` → new domain, once confirmed
- `info@chrmuk.com` → `info@[newdomain]`
- `chrm.uk@proton.me` → new forwarding inbox (confirm this is
  changing too, or staying as the delivery target)
- Email subject prefix `[CHRM UK]` → `[RIGN]`
- `.env.local` values: site URL, contact email, WhatsApp number
  (confirm whether the number itself is changing or carrying over)
- Organization/LocalBusiness schema `name` field, and every
  page-level metadata title/description referencing the old brand
- OG/Twitter meta tags, favicon, any hardcoded brand references in
  component copy

**Watch for the "reign" homophone in copy** — fine to lean into subtly
("the standard others are judged against," "built to lead") but avoid
forcing it into every headline. One deliberate nod is confident, five
puns reads try-hard on a brand this restrained.

## 3. Visual identity — build fresh, don't retrofit
Treat `chrmbranding.md` as superseded — do not carry over any earlier
colour, type, or logo direction from the CHRM UK build. The RIGN logo
implies:
- Monochrome base — black background, brushed-metal/silver wordmark.
  The metallic texture is dimensional, not flat — treat the logo as a
  proper image/SVG asset rather than trying to fake the brushed-steel
  finish with a CSS gradient sitewide
- Sharp, geometric, technical typography — angular custom letterforms
  in the wordmark; pair body copy with a clean, precise sans-serif
- Generous negative space, small tracked-out tagline treatment
  ("REFINED AUTOMOTIVE" — letter-spaced, understated)
- Reads as a precision/performance brand, not a warm local-trade
  brand — restraint throughout, not just in the logo lockup

Build a proper `rignbranding.md` (or get this from whoever's doing
RIGN's brand file) before final styling passes — don't guess colour
hex values or metallic effects from the logo alone.

## 4. Positioning — this is the one real copy rewrite
Old framing (CHRM UK): "We're chrome delete specialists, not a wrap
company doing it as an afterthought." Single service, single claim.

New framing (RIGN): Chrome delete remains the signature, proof-of-craft
service — RIGN is positioned as the fuller refined automotive offering
underneath it: detailing, machine polishing/paint correction, and
(later) PPF, in that order of current readiness.

Practical structure for the pillar/services page:
1. **Chrome Delete** — signature service, full confidence, market as
   strongly as it already is
2. **Detailing** — offered now
3. **Machine Polishing / Paint Correction** — offered, but don't
   overclaim on the homepage until there's a real portfolio built
4. **Paint Protection (PPF)** — not live yet, don't put it on the
   public site until it's actually been learned properly

One ladder, not four competing menu items.

## 5. WhatsApp pre-filled message
Currently: "Hi, I'd like a quote for chrome delete — I'll send over
some photos." Broaden so it doesn't gatekeep enquiries about the other
services:
> "Hi, I'd like a quote — I'll send over some photos and let you know
> what I'm after."

## 6. Page-by-page: rename only vs. rewrite needed
**Rename only**: Privacy Policy, Terms, Contact page structure, Areas
We Cover, FAQ formatting rules

**Needs actual copy rewrite**: Home hero and "why choose us" section,
About page, the services pillar page (per section 4), Dealerships
page (should now speak to the fuller service range, not just chrome
delete)

## 7. Once domain is confirmed
- New Vercel project or domain swap on the existing one — affects
  whether existing analytics/GSC data carries over or starts fresh
- Resend: verify new domain, update sending address
- New Google Search Console property, new GA4 data stream (or new
  property, depending on how clean a break you want)
- Google Business Profile: **answer the open question above before
  touching this** — don't rename an existing profile with real
  history on it without deciding that deliberately
