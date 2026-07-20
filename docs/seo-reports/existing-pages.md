# Existing public pages

Last checked: 2026-07-20

This inventory compares public App Router pages, `lib/seo.ts` `SITE_ROUTES`,
and the live sitemap. API, metadata-image, `robots.txt`, `sitemap.xml`, and
not-found routes are not content pages.

| Route | App route | `SITE_ROUTES` | Live sitemap before this run |
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
| `/guides/ppf-vs-chrome-delete` | Yes | Yes | Yes |
| `/guides/south-yorkshire-car-meets-and-shows` | Yes | Yes | Yes |
| `/guides/what-is-chrome-delete` | Yes | Yes | Yes |
| `/pricing` | Yes | Yes | Yes |
| `/privacy` | Yes | Yes | Yes |
| `/services/chrome-delete` | Yes | Yes | Yes |
| `/services/chrome-delete/sheffield` | Yes | Yes | No — new this run |
| `/services/detailing` | Yes | Yes | Yes |
| `/services/paint-correction` | Yes | Yes | Yes |
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
- Existing town pages remain the highest similarity risk: live five-word
  shingle comparisons measured 21.5%–26.8% similarity between town-page
  pairs, largely because they use the same short shared structure.
