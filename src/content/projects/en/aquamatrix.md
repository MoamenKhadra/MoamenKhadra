---
title: Aquamatrix
description: Bilingual EN/AR website for a Bahrain water and environmental engineering firm — Angular 22 SSR, Tailwind CSS v4, daisyUI, XLIFF i18n, and a Resend-backed contact endpoint.
pubDate: 2026-10-03
heroImage: ../../../assets/images/projects/aquamatrix-thumbnail.png
heroImageAlt: Aquamatrix homepage showing intelligent water solutions
tech: [Angular, SSR, Tailwind CSS, daisyUI, Resend]
links:
  demo: https://www.aquamatrix-wll.com
caseStudy:
  label: Water and environmental engineering company
  problem: Its services and product range needed a clearer online home for engineering and procurement prospects.
  result: A structured company website that presents services and products clearly and gives visitors a working path to enquire.
featured: true
---

The marketing site for Aquamatrix W.L.L., a water and environmental
engineering company headquartered in Manama, Bahrain with a branch in
Dammam — presenting its consultancy services and engineered treatment
products across the GCC in English and Arabic.

## Before / After

**Before** — the firm's engineering depth (zero-liquid-discharge design,
wastewater studies, plant optimization) had no home online, and a
single static page could not carry two business lines plus a product
catalogue.

**After** — a hybrid prerendered and server-rendered site holds seven
services across three groups and twelve products across four categories,
each with its own URL, and a contact form that actually emails the
office instead of sitting inert.

## Highlights

- **Hybrid rendering** — ten routes prerender at build time for the
  five pages × two locales, while product and service detail routes
  render on the server; unknown paths return a real HTTP 404 with
  `noindex`.
- **Service and product catalogs** — services are grouped in three
  clusters (ZLD, wastewater, and studies) and products filter by
  category instantly through signals, with no server round-trip.
- **A contact form with a backend** — `POST /api/contact` validates,
  guards against spam with a honeypot and origin check, then sends via
  the Resend API and acknowledges to the visitor; it fails closed if
  the environment variables are missing.
- **Full i18n pipeline** — Angular `$localize` with XLIFF files, 272
  translated units, English at `/` and Arabic at `/ar` with `dir="rtl"`
  applied by a locale service; both locales build in production.
- **Motion without Angular Animations** — an IntersectionObserver
  reveal directive, enter/leave transitions, and View Transitions, all
  gated behind `prefers-reduced-motion` so prerendered pages render
  fully visible without JavaScript.
- **Theming with no flash** — a daisyUI light theme by default and a
  custom dark theme toggled from `localStorage`, with an inline
  pre-paint script and `NgOptimizedImage` throughout.

## Who uses it

- **Engineering prospects** — read a service page such as
  zero-liquid-discharge or compatibility studies, then send requirements
  through the form.
- **Procurement visitors** — browse the twelve products by category and
  open detail pages before requesting a quote.
- **The Aquamatrix team** — two office cards with embedded maps and a
  form that reaches `info@aquamatrix-wll.com`.

## Tech stack

Angular 22 with SSR (`outputMode: "server"`) on an Express host,
Tailwind CSS v4 and daisyUI 5, Angular signal forms for the contact
form, and Vitest for ~100 assertions across 19 spec files. SEO lives in
a `SeoService` that emits titles, canonical, three hreflang links,
Open Graph and Twitter tags, and JSON-LD, alongside a hand-maintained
48-URL sitemap.

## Outcomes

- One codebase serving English LTR and Arabic RTL from a single domain,
  with both locales prerendered for search.
- A working inquiry path from any page — validated server-side and
  delivered by email — rather than a form that goes nowhere.
- Contact, product, and service detail routes hardened: SSR host
  allowlisting, origin checks, and a fail-closed mail path.
