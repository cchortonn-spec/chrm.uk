# Existing public pages

Last checked: 2026-07-22

This inventory compares public App Router pages, `lib/seo.ts` `SITE_ROUTES`,
and the live sitemap. API, metadata-image, `robots.txt`, `sitemap.xml`, and
not-found routes are not content pages.

| Route | App route | `SITE_ROUTES` | Live sitemap at check |
|---|:---:|:---:|:---:|
| `/` | Yes | Yes | Yes |
| `/about` | Yes | Yes | Yes |
| `/areas-we-cover` | Yes | Yes | Yes |
| `/areas-we-cover/barnsley` | Yes | Yes | Yes |
| `/areas-we-cover/chesterfield` | Yes | Yes | Yes |
| `/areas-we-cover/doncaster` | Yes | Yes | Yes |
| `/areas-we-cover/rotherham` | Yes | Yes | Yes |
| `/areas-we-cover/sheffield` | Yes | Yes | Yes |
| `/contact` | Yes | Yes | Yes |
| `/dealerships` | Yes | Yes | Yes |
| `/faq` | Yes | Yes | Yes |
| `/gallery` | Yes | Yes | Yes |
| `/guides` | Yes | Yes | Yes |
| `/guides/best-drives-and-car-spots-south-yorkshire` | Yes | Yes | Yes |
| `/guides/paint-correction-vs-full-respray` | Yes | Yes | No — branch only |
| `/guides/ppf-vs-chrome-delete` | Yes | Yes | Yes |
| `/guides/south-yorkshire-car-meets-and-shows` | Yes | Yes | Yes |
| `/guides/what-is-chrome-delete` | Yes | Yes | Yes |
| `/pricing` | Yes | Yes | Yes |
| `/privacy` | Yes | Yes | Yes |
| `/services/chrome-delete` | Yes | Yes | Yes |
| `/services/chrome-delete/sheffield` | Yes | Yes | No — branch only |
| `/services/detailing` | Yes | Yes | Yes |
| `/services/detailing/rotherham` | Yes | Yes | No — branch only |
| `/services/paint-correction` | Yes | Yes | Yes |
| `/services/paint-correction/barnsley` | Yes | Yes | No — new this run |
| `/services/paint-protection-film` | Yes | Yes | Yes |
| `/terms` | Yes | Yes | Yes |
| `/what-we-do` | Yes | Yes | Yes |

## Duplicate-check notes

- `/services/chrome-delete/sheffield` is a distinct service × town route, not
  a duplicate slug of the chrome-delete pillar or Sheffield town hub.
- Its copy does not reuse paragraphs from either parent page. It adds
  Sheffield-specific road and winter-maintenance context, local finish
  guidance, component scoping, mobile-location guidance, and a unique process
  order.
- `/services/detailing/rotherham` is also a new, non-conflicting route. Its
  condition-led package choices, Rotherham winter-road evidence, mobile-site
  suitability guidance, and quote-photo checklist do not repeat the detailing
  pillar, Rotherham hub, or Sheffield combination page.
- `/guides/paint-correction-vs-full-respray` does not conflict with the
  `/services/paint-correction` pillar or the existing comparison guide. It adds
  a defect-depth decision framework, correction limits, respray and mixed-plan
  guidance, a photo-assessment checklist, and four original FAQs.
- `/services/paint-correction/barnsley` is a new, non-conflicting combination
  route. It adds a diagnosis-first defect framework, controlled-correction
  limits, Barnsley road-preparation context, mobile-site suitability, and
  original quote-photo guidance instead of repeating the service pillar or
  town hub.
- The Barnsley page's rendered five-word Jaccard comparison peaked at **1.91%**
  against `/areas-we-cover/barnsley`; target-shingle overlap was **2.14%**.
- Rendered five-word shingle comparison put the new guide's highest similarity
  at **5.4%** against the guides hub and **1.7%** against the closest article,
  well below the existing town-page risk.
- Existing town pages remain the highest similarity risk: live five-word
  shingle comparisons measured 21.5%–26.8% similarity between town-page
  pairs, largely because they use the same short shared structure.
