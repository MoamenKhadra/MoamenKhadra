---
title: Dealzgy Admin Dashboard
description: Back office for a price-comparison platform — Angular 19 with PrimeNG and ApexCharts, scraping monitoring, a curated bilingual catalog, and Keycloak role-based access.
pubDate: 2026-04-14
heroImage: ../../../assets/images/projects/dealzgy-dashboard-thumbnail.png
tech: [Angular, PrimeNG, Tailwind CSS, ApexCharts, Keycloak]
caseStudy:
  label: Price-comparison back office
  problem: Millions of products scraped from thousands of stores only become useful once someone curates them — the team needed one place to run the scraping pipeline and resolve raw listings into a clean catalogue.
  result: An operations dashboard covering scraping monitoring, workers, proxies and jobs, plus a curated catalog that links raw store listings to canonical products in English and Arabic.
featured: true
---

The internal admin dashboard for Dealzgy, a price-comparison and
product-aggregation platform — the back office where the scraping
pipeline is operated and raw listings are curated into a canonical
catalog.

## Before / After

**Before** — scraped data arrived continuously from thousands of
stores, but the pipeline had no visibility: nobody could see which
stores were failing, how fast workers were going, or why two listings
were not being matched to the same product.

**After** — one dashboard shows scraping health in real time and gives
curators the tools to resolve raw store products into managed catalog
entities with bilingual content, brands, categories, and attributes.

## Highlights

- **Scraping monitoring** — status heatmaps, treemaps, rate pies, and
  time-series for scraping attempts, with quick, full, deep, and hot
  views per store.
- **Pipeline operations** — workers (capacity, Manual/Auto modes,
  per-store assignment), a proxy pool, scheduled jobs, and priority
  rules managed from one navigation.
- **Two-tier catalog** — raw scraped store products (buy-box price,
  rating, reviews, seller offers, price history) kept separate from
  curated "managed" products, with explicit linking between the two for
  entity resolution.
- **Bilingual content management** — managed products carry `en`/`ar`
  localized content with `dir="rtl"` toggles in the product views,
  alongside brands, categories (tree), attributes, attribute groups,
  types, and keywords.
- **Keycloak role-based auth** — `keycloak-angular` with
  login-required guards, auto token refresh, an inactivity logout, and
  a role guard that routes unauthorized users to a forbidden page.
- **Runtime configuration** — the app bootstraps by fetching
  `configs/config.json`, which `docker-entrypoint.sh` fills with
  `envsubst` at container start, so API and Keycloak URLs are injected
  per environment instead of baked into the bundle.
- **Curated product detail** — gallery, properties, Quill 2 rich-text
  content, and the list of linked store products in one view.

## Who uses it

- **Data curators** — match store listings to managed products and
  maintain bilingual catalog content.
- **Platform operators** — watch scraping success and failure rates,
  adjust rate limits, and manage workers, proxies, and jobs.
- **Category and attribute owners** — maintain the category tree,
  attribute groups, and keyword sets.

## Tech stack

Angular 19 with standalone components, OnPush change detection, and
signals; PrimeNG 19 with a custom theme over Tailwind CSS v4; ApexCharts
via `ng-apexcharts` for the monitoring visualizations; Quill 2 for rich
text; and Keycloak for identity. Deployed as a multi-stage Docker image
served by nginx, with GitHub Actions building and pushing to a Vultr
container registry on `dev`, `staging`, and `main`.

## Outcomes

- Scraping failures surface as charts instead of as silent gaps in the
  catalogue.
- Raw listings and curated products are linked explicitly, so the
  comparison layer stays trustworthy.
- Environment-specific URLs are injected at container start rather than
  rebuilt per environment.
