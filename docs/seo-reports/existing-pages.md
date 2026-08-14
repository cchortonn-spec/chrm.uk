# Existing public pages

Last checked: 2026-08-14

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
| `/areas-we-cover/leeds` | Yes | Yes | No — branch only |
| `/areas-we-cover/rotherham` | Yes | Yes | Yes |
| `/areas-we-cover/sheffield` | Yes | Yes | Yes |
| `/contact` | Yes | Yes | Yes |
| `/dealerships` | Yes | Yes | Yes |
| `/faq` | Yes | Yes | Yes |
| `/gallery` | Yes | Yes | Yes |
| `/guides` | Yes | Yes | Yes |
| `/guides/best-drives-and-car-spots-south-yorkshire` | Yes | Yes | Yes |
| `/guides/buying-a-prestige-car-south-yorkshire` | Yes | Yes | No — branch only |
| `/guides/paint-correction-vs-full-respray` | Yes | Yes | No — branch only |
| `/guides/ppf-vs-chrome-delete` | Yes | Yes | Yes |
| `/guides/south-yorkshire-car-meets-and-shows` | Yes | Yes | Yes |
| `/guides/what-is-chrome-delete` | Yes | Yes | Yes |
| `/guides/winter-paint-care-south-yorkshire` | Yes | Yes | No — branch only |
| `/pricing` | Yes | Yes | Yes |
| `/privacy` | Yes | Yes | Yes |
| `/services/chrome-delete` | Yes | Yes | Yes |
| `/services/chrome-delete/doncaster` | Yes | Yes | No — branch only |
| `/services/chrome-delete/sheffield` | Yes | Yes | No — branch only |
| `/services/detailing` | Yes | Yes | Yes |
| `/services/detailing/rotherham` | Yes | Yes | No — branch only |
| `/services/detailing/sheffield` | Yes | Yes | No — branch only |
| `/services/paint-correction` | Yes | Yes | Yes |
| `/services/paint-correction/barnsley` | Yes | Yes | No — branch only |
| `/services/paint-correction/rotherham` | Yes | Yes | No — branch only |
| `/services/paint-protection-film` | Yes | Yes | Yes |
| `/services/paint-protection-film/barnsley` | Yes | Yes | No — new this run |
| `/services/paint-protection-film/chesterfield` | Yes | Yes | No — branch only |
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
- `/services/paint-protection-film/chesterfield` is a new, non-conflicting
  combination route. It chooses targeted PPF areas from vehicle use, separates
  protection from existing paint repair, adds verified Chesterfield travel and
  mobile-environment context, and uses its own panel-priority structure rather
  than repeating the PPF pillar or Chesterfield town hub.
- `/guides/buying-a-prestige-car-south-yorkshire` is distinct from the
  trade-facing `/dealerships` page and the brief dealership paragraph in the
  car-meets guide. It gives buyers a researched regional-retail overview,
  daylight inspection method, surface-identification checks, service decision
  boundaries, correct work order, and an explicit independence statement.
- `/services/chrome-delete/doncaster` is a new, non-conflicting combination
  route. It adds a visual-group scoping method, explicit styling-versus-
  protection limits, Doncaster road-use aftercare, trim-condition checks, and
  mobile-location guidance in a section order unlike the Sheffield page.
- `/services/detailing/sheffield` is a new, non-conflicting combination route.
  It adds a four-zone condition check, Sheffield's elevation-aware winter
  context, a cleaning/decontamination/correction boundary, use-led timing, and
  mobile-location suitability in a section order unlike the Rotherham page.
- `/areas-we-cover/leeds` is a new, non-conflicting town route. It replaces the
  brief hub-only mention with an appointment-suitability decision, a four-
  service problem framework, checked M621 context, workspace guidance, and an
  original quote checklist without claiming that RIGN is based in Leeds.
- `/guides/winter-paint-care-south-yorkshire` is a new, non-conflicting guide
  route. It adds a researched winter wash sequence, South Yorkshire gritting
  context, exposure-led timing, hidden-area guidance, and clear boundaries
  between cleaning, correction, paint repair, and protection.
- `/services/paint-correction/rotherham` is a new, non-conflicting combination
  route. It uses a four-signal paint-reading framework, checked Rotherham
  commuter-route context, stage-selection evidence, previous-paint history,
  mobile-workspace checks, and aftercare boundaries instead of repeating the
  Barnsley correction page or Rotherham detailing page.
- `/services/paint-protection-film/barnsley` is a new, non-conflicting
  combination route. It chooses smaller PPF sections from the way contact
  happens, uses checked Barnsley parking and strategic-route context, explains
  coverage-edge limits, and separates paint preparation from protection
  instead of repeating the Chesterfield PPF page or Barnsley town hub.
- The Barnsley PPF page's rendered five-word main-content comparison peaked at
  **1.86%** against `/services/paint-protection-film/chesterfield`. All 37 App
  Router content pages, 37 `SITE_ROUTES` entries, and 37 local sitemap entries
  match, and the final slug appears once in each route source.
- The Rotherham correction page's rendered five-word main-content comparison
  peaked at **1.59%** against `/services/paint-correction/barnsley`; all 36 App
  Router content pages, 36 `SITE_ROUTES` entries, and 36 local sitemap entries
  match.
- The winter guide's rendered five-word main-content Jaccard comparison peaked
  at **3.98%** against `/guides`; all 35 App Router content pages, 35
  `SITE_ROUTES` entries, and 35 local sitemap entries match.
- The Leeds page's rendered five-word main-content Jaccard comparison peaked at
  **1.87%** against `/what-we-do`; all 34 app routes, `SITE_ROUTES` entries, and
  local sitemap entries match.
- The Sheffield detailing page's rendered five-word Jaccard comparison peaked
  at **2.08%** against `/services/chrome-delete/sheffield` and **1.99%**
  against `/services/detailing/rotherham`. All 33 app routes, `SITE_ROUTES`
  entries, and local sitemap entries match.
- The Doncaster page's rendered five-word Jaccard comparison peaked at
  **1.92%** against `/services/chrome-delete/sheffield`. All 32 app routes,
  `SITE_ROUTES` entries, and local sitemap entries match.
- The new guide's rendered five-word Jaccard comparison peaked at **4.68%**
  against the guides hub and **1.64%** against the closest existing article.
  All 31 app, `SITE_ROUTES`, and local sitemap entries match.
- The Chesterfield PPF page's rendered five-word Jaccard comparison peaked at
  **1.84%** against `/areas-we-cover/chesterfield`; all 30 app,
  `SITE_ROUTES`, and local sitemap entries match.
- The Barnsley page's rendered five-word Jaccard comparison peaked at **1.91%**
  against `/areas-we-cover/barnsley`; target-shingle overlap was **2.14%**.
- Rendered five-word shingle comparison put the new guide's highest similarity
  at **5.4%** against the guides hub and **1.7%** against the closest article,
  well below the existing town-page risk.
- Existing town pages remain the highest similarity risk: live five-word
  shingle comparisons measured 21.5%–26.8% similarity between town-page
  pairs, largely because they use the same short shared structure.
