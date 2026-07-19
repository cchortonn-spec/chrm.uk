# RIGN

Refined automotive — chrome delete, detailing, and paint correction.
South Yorkshire based, UK-wide.
Site: [rign.uk](https://rign.uk)

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
- Tailwind CSS (design tokens in `app/globals.css`)
- Resend (`lib/resend.ts` + `app/api/contact/route.ts`)
- Google Analytics 4 + Google Tag Manager (wired in `app/layout.tsx`, IDs from env)

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Add the same env vars from `.env.example` in the Vercel project settings.
3. Domain `rign.uk` is connected to Vercel.

Reference docs live in `AI MD Files/`.
