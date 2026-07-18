# CHRM UK

Mobile chrome delete specialists — South Yorkshire based, UK-wide.
Site: [chrmuk.com](https://chrmuk.com)

## Build roadmap

1. **Step 1 (this repo now)** — technical foundation: Next.js App Router, TypeScript, Tailwind, routes, components, Resend, GA4/GTM, SEO skeleton.
2. **Step 2** — drop in `chrmbranding.md` for design tokens (colours, typography, logo).
3. **Step 3** — drop in `chrm-uk-build-spec.md` for real content and page build.

Reference docs live in `AI MD Files/`.

## Getting started (local)

1. Install Node.js if you do not have it yet.
2. In this folder, install packages:

```bash
npm install
```

3. Copy the example env file and fill in values when you have them:

```bash
cp .env.example .env.local
```

4. Start the local site:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (design tokens in `app/globals.css` — replace with branding in Step 2)
- Resend (`lib/resend.ts` + `app/api/contact/route.ts`)
- Google Analytics 4 + Google Tag Manager (wired in `app/layout.tsx`, IDs from env)

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Create a new Vercel project and import the repo.
3. Add the same env vars from `.env.example` in the Vercel project settings.
4. Point domain `chrmuk.com` (Namecheap DNS) to Vercel when ready.

## Flags before launch

- WhatsApp number is **TBD** — set `NEXT_PUBLIC_WHATSAPP_NUMBER` deliberately (do not reuse another brand’s number by accident).
- Cookie consent for GA4 is required under UK GDPR/PECR — build in Step 3.
- No real copy or branding yet — placeholders only.
