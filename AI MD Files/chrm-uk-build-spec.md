# CHRM UK — Build Spec

For all visual design — colours, typography, logo, imagery style —
refer to **chrmbranding.md**. This document covers content, structure,
SEO, and technical requirements only.

---

## 1. Brand & positioning

- **Name:** CHRM UK
- **Domain:** chrmuk.com
- **What we do:** Mobile chrome delete specialists — blacking out and
  removing chrome trim from badges, window surrounds, grilles, bumpers,
  door handles, mirror caps, and more.
- **Position:** Not a general wrap company. Most competitors in this
  space are wrap shops treating chrome delete as one line among many —
  CHRM is a specialist in this one thing, aiming to do it better than
  anyone else in the country.
- **Who it's for:** high-end/performance car owners, car dealerships
  (trade/repeat business), general public wanting a factory-look
  upgrade.
- **Base:** South Yorkshire — travels UK-wide for the right job.
- **Primary contact:** WhatsApp. Not phone-first, not email-first, not
  a long form.

**Keyword note:** "chrome delete" is the dominant, most-searched
industry term — used more than "de-chrome" as a standalone phrase
across the automotive customisation space. Build titles, H1s, and meta
around "chrome delete" as the anchor term. Use "de-chrome,"
"de-chroming," and "blackout" naturally as supporting phrasing
throughout — people do search these too, just not as the primary term.

---

## 2. The WhatsApp-first CTA

This is the main conversion mechanism on the site, not one button
among several equals.

**Core line** (adapt per placement, keep the substance):
> "Send us 4 photos — front, back, both sides — and tell us what you
> want done. Takes 30 seconds. We'll come back to you with a price."

Where it appears:
- Hero — primary CTA, not secondary to a "get a quote" form
- Sticky bottom bar on mobile, present on every page
- Closing CTA on every page
- Its own explainer block on the Contact page — show the 4-photo
  instruction visually (front / back / driver side / passenger side),
  not just as text
- Gallery captions — "Want this on your car? Send 4 photos on WhatsApp"

A standard contact form should still exist (for people who won't use
WhatsApp, and for a written record via Resend) — but visually and in
copy, WhatsApp leads throughout.

**WhatsApp number: TBD.** Needs a real CHRM UK number before build —
don't default to the Sheffield or WRPX number without deciding that
deliberately.

---

## 3. Site structure

### Home
- Hero: chrome delete specialists, mobile, UK-wide, based South
  Yorkshire, WhatsApp CTA
- Trust bar: fully insured, mobile service, UK-wide, South Yorkshire
  based
- "What we chrome-delete" teaser (links to full pillar page)
- Before/after strip — real cars, real work
- Why CHRM — specialists not generalists, mobile convenience,
  dealership-grade finish
- Dealerships teaser (links through)
- Areas covered teaser
- FAQ preview (3–4 questions)
- Final WhatsApp CTA

### Gallery
- Real before/after work — grouped by component (badges / grilles /
  trims / bumpers / handles) once there's enough volume, single grid
  to start
- Every image captioned with make/model + what was done — a good
  caption ("Chrome delete on BMW 4 Series window trim and grille,
  satin black") is itself a self-contained mini-answer, which feeds
  the AI-overview requirement below

### About
- The specialist behind CHRM, why chrome delete specifically,
  insurance/credentials, what "mobile" means in practice

### What We Chrome-Delete (the pillar page)
This is "Services," restructured as the highest-value page for your
SEO strategy — not a flat list. Real, self-contained sections for:
- Badge & emblem delete
- Window trim / surround delete
- Grille delete
- Bumper trim delete
- Door handle delete
- Mirror cap delete

Each section: what it involves, how long it lasts, typical cost range,
before/after example. As the site grows, each of these can graduate
into its own full page — that's the topic cluster. Build the pillar
now so expansion is a natural extension, not a rebuild.

### Pricing / What Affects Cost
Transparent range + explanation of what changes price (number of
components, car size, finish). Directly serves the AI-overview
requirement — fully answers "how much does chrome delete cost" without
needing the rest of the site read.

### For Dealerships
Speaks directly to trade clients: turnaround time, repeat/bulk work,
invoicing, consistency across multiple vehicles. Different tone from
retail pages — this is a B2B pitch, not a homeowner-style sell.

### Areas We Cover
- South Yorkshire hub (Sheffield, Doncaster, Rotherham, Barnsley, and
  surrounding) as the core base
- Clear "UK-wide by appointment" section for the nationwide/high-end
  angle — be upfront that travel is available for the right job,
  without implying local presence everywhere (that would undercut the
  South Yorkshire local SEO you actually want to win)

### FAQ
Real, self-contained, conversational answers matching how people
actually type into Google or ask an AI assistant — not keyword-stuffed
phrasing. Examples: "Does chrome delete damage the paint underneath?",
"How long does a chrome delete wrap last?", "Can it be removed later?",
"How much does chrome delete cost?", "Do you travel outside South
Yorkshire?" Each answer must fully resolve the question in the first
2–3 sentences before any elaboration — the single most important
formatting rule for AI Overview inclusion.

### Guides (Phase 2 — scaffold the route now, don't populate at launch)
Genuine long-form pillar content — "Complete Guide to Chrome Delete on
a BMW," "Chrome Delete vs Plasti Dip vs Paint," etc. This is what
actually builds the topic-cluster depth you're after. Launch with the
core pages; add guides once there's real capacity to write them
properly. A shallow blog with thin posts works against you, not for
you — don't rush this section.

### Contact
WhatsApp front and centre with the 4-photo instruction, form as
secondary option, email, service area note.

### Privacy Policy + Terms
Required given GA4 and a contact form collecting personal data under
UK GDPR/PECR — needs a cookie consent mechanism too, since GA4 sets
cookies before consent otherwise.

### 404

### Deliberately left out
- **E-commerce/cart** — not needed, this is a booked service
- **User accounts/login** — no need
- **A second live chat widget** — WhatsApp is the chat; adding another
  dilutes the single obvious CTA you're going for
- **Quote calculator at launch** — the WhatsApp photo method is
  deliberately replacing that friction, don't reintroduce it
- **Blog in the "frequent short posts" sense** — Guides only, and only
  once there's real depth to put into them

---

## 4. Contact & lead routing
- WhatsApp: number TBD (see above)
- Email: info@chrmuk.com via Resend, delivering to chrm.uk@proton.me
- Subject line prefix: "[CHRM UK]" on all form-submission emails —
  same pattern as other sites, in case this inbox ever handles more
  than one brand's leads

---

## 5. SEO & AI-overview requirements

- **Answer-first structure** — every page leads with a short, complete
  answer to its main question before supporting detail. Don't make
  someone read the whole page to get the core fact.
- **Long-tail, conversational phrasing** throughout — write how people
  actually type into Google or ask an AI assistant, not as a keyword
  list.
- **Full schema coverage** — LocalBusiness/AutomotiveBusiness sitewide,
  Service schema on the What We Chrome-Delete page and its
  sub-sections, FAQPage schema on the FAQ page, BreadcrumbList
  sitewide, Review schema once real reviews exist.
- **Freshness signals** — visible "last updated" dates on Pricing and
  Guides content, and an actual habit of reviewing/updating them, not
  just a date stamp sitting over stale content.
- **Topic cluster architecture** — What We Chrome-Delete is the
  pillar; each component becomes cluster content over time; Guides
  reinforce the same cluster; everything links back to the pillar and
  to each other.
- **Error-free indexing** — correct sitemap.xml and robots.txt from
  day one, Search Console verified and monitored, no orphaned or
  broken routes.
- **Mobile-first, genuinely fast** — Core Web Vitals targets: LCP
  under 2.5s, INP under 200ms, CLS under 0.1, checked on mobile
  specifically — this is both the majority of local search traffic and
  where social traffic lands.
- **Competitor gap check before writing** — research what current
  chrome delete/wrap competitors' pages actually cover, and make sure
  CHRM's pages go further. One-time pass at launch, then an ongoing
  job once the daily SEO automation is wired up here too.

---

## 6. Analytics
- GA4 (new property), Google Search Console, Google Tag Manager, Bing
  Webmaster Tools, Microsoft Clarity
- Custom events: `whatsapp_click`, `form_submit`, `phone_click` (if a
  direct number is added later), `gallery_view`
- No custom dashboard for now — same as the Sheffield build. Keep this
  lean until there's a real reason to add one.
