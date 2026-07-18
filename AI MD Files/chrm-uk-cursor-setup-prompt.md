# CHRM UK — Cursor Build Prompt (Step 1: Foundation)

Paste this into Cursor as the first build step, before chrmbranding.md or
chrm-uk-build-spec.md are ready.

---

You are setting up the technical foundation for a new website: **CHRM UK**
(chrmuk.com), a mobile chrome delete specialist for high-end vehicles,
based in South Yorkshire, operating UK-wide.

This is Step 1 only: build the working technical skeleton. Do NOT write
final page copy, do NOT invent a colour scheme or typography, and do NOT
guess at visual design. Two more documents are coming next —
`chrmbranding.md` (visual system) and `chrm-uk-build-spec.md` (content and
page-by-page requirements) — this step exists purely so the technical
foundation is ready before either of those land.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Vercel-ready config
- Resend for transactional email
- Google Analytics 4 + Google Tag Manager

## Project structure
Create the following routes (placeholder content with clear TODO
comments is fine — no real copy yet):

```
/app
  page.tsx                → Home
  gallery/page.tsx
  about/page.tsx
  what-we-do/page.tsx     → working title for the services pillar page,
                             final copy/naming comes from the build spec
  pricing/page.tsx
  dealerships/page.tsx
  areas-we-cover/page.tsx
  faq/page.tsx
  guides/page.tsx         → index only, for future pillar/cluster content
  contact/page.tsx
  privacy/page.tsx
  terms/page.tsx
  sitemap.ts              → dynamic, auto-includes all routes
  robots.ts
  not-found.tsx
  layout.tsx              → root layout, default metadata
```

## Components to scaffold
Correct structure and props, placeholder styling only:

```
/components
  Header.tsx              → nav, logo placeholder, WhatsApp CTA button
  Footer.tsx               → contact info, nav links, legal links
  WhatsAppButton.tsx        → reusable, variant prop ("hero", 
                             "sticky-mobile", "inline"), number pulled 
                             from env var, never hardcoded
  StickyMobileCTA.tsx        → fixed bottom bar, mobile only, WhatsApp led
  Hero.tsx
  SectionWrapper.tsx
  JsonLd.tsx                → generic component, accepts a schema object 
                             as a prop, used across every page
```

## Lib / utilities
```
/lib
  analytics.ts    → GA4 event helpers: trackWhatsAppClick(), 
                    trackFormSubmit(), trackPhoneClick(), 
                    trackGalleryView()
  resend.ts       → sends to info@chrmuk.com, delivers to 
                    chrm.uk@proton.me, subject prefixed "[CHRM UK]"
  seo.ts          → generateMetadata() helper so every route produces 
                    its own title/description/OG/Twitter tags from one 
                    content object — this MUST be dynamic per page. 
                    (Static/duplicated OG tags across pages has been a 
                    real bug on a previous build — check this properly, 
                    don't assume it's working.)
```

## Config
- `.env.example` with placeholders: `NEXT_PUBLIC_GA_ID`,
  `NEXT_PUBLIC_WHATSAPP_NUMBER`, `RESEND_API_KEY`, `CONTACT_EMAIL_TO`,
  `NEXT_PUBLIC_SITE_URL`
- Tailwind config with a clearly commented placeholder token block —
  mark colour/font values with `// REPLACE WITH chrmbranding.md VALUES`,
  don't invent a look
- `next.config` with image optimisation enabled, remote patterns ready
  for Supabase/CDN-hosted images
- GA4 + GTM wired into root layout via `next/script`, firing correctly
  with placeholder IDs from env

## Technical SEO foundations (build now — none of this depends on
branding or copy)
- `sitemap.ts` and `robots.ts` working, auto-generated from routes
- Metadata API used correctly on every route — verify no static/shared
  OG tags leaking across pages
- `JsonLd` component ready to accept LocalBusiness, Service, FAQPage,
  and BreadcrumbList schema once content lands
- Core Web Vitals discipline from day one: `next/image` everywhere,
  `next/font` for font loading, no layout-shift-prone placeholders

## Git / deploy
- Initialise git, sensible `.gitignore`
- Ready for a new Vercel project, domain `chrmuk.com` via Namecheap DNS
- `README.md` noting: "Step 2 = drop in chrmbranding.md for design
  tokens. Step 3 = drop in chrm-uk-build-spec.md for content and page
  build."

When finished, summarise what was built and flag anything you had to
guess at, so it can be corrected before the next two documents go in.
