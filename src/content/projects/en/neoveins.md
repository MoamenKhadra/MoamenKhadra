---
title: Neoveins
description: Bilingual marketing site for NEOVEINS FZCO, a Dubai software company — Tailwind CSS, daisyUI, solution detail pages with brochure downloads, dark mode, and full EN/AR RTL support.
pubDate: 2025-03-01
heroImage: ../../../assets/images/projects/neoveins-thumbnail.png
heroImageAlt: Neoveins homepage hero with background video and solution cards
tech: [HTML, Tailwind CSS, daisyUI, Vanilla JS]
links:
  demo: https://neoveins.com
featured: true
---

A static, bilingual marketing site for NEOVEINS FZCO — a software
solutions company founded in Dubai in 2023 — presenting its two products
to enterprise buyers in English and Arabic.

## Before / After

**Before** — the company had two products (an inventory system and a
clinic management platform) and no site to explain either one. Sales
conversations started from a PDF, and there was no Arabic version for
Gulf clients who read in Arabic.

**After** — a 12-page site per language covers the company, both
solutions, and contact, with dedicated detail pages for each product:
modules, reasons to adopt it, and brochure-download and request-demo
calls to action.

## Highlights

- **Two products, two detail pages** — Neo-Inventory (purchasing,
  inventory, consumption) and WeCure HMIS (14+ clinical, pharmacy, lab,
  and finance modules) each get their own page with a module list.
- **Dark mode without flash** — an inline head script reads the stored
  preference before first paint, so the theme never flips after load.
- **Hero background video** — a muted, looping MP4 behind a blurred
  black overlay gives the landing page motion without a JS library.
- **RTL done properly** — the Arabic pages ship `dir="rtl"` with Cairo
  and Rubik fonts, and a small script swaps the `en`/`ar` path segment
  to switch languages in place.
- **Tailwind CLI pipeline** — daisyUI components are compiled by the
  Tailwind CLI into a single stylesheet; no framework runtime.

## Who uses it

- **Prospects** — land on the home page, watch the hero, and jump to a
  solution page to read the module list.
- **Sales** — share direct links to a product's detail page instead of
  forwarding a PDF, with brochure downloads as leave-behinds.
- **The client's team** — edit plain HTML pages; there is no CMS or
  build step beyond recompiling Tailwind.

## Tech stack

Hand-written HTML and a ~70-line vanilla JS entry for the theme toggle
and language switcher, styled with Tailwind CSS 3.4 and daisyUI 4 via
the Tailwind CLI. A bilingual sitemap and robots.txt are shipped, and
the contact form posts to a plain `method="post"` endpoint.

## Outcomes

- English and Arabic versions of every page, mirrored one to one.
- Product brochures and demo requests reachable in two clicks from the
  home page.
- A site the client can host anywhere — it is plain static files with
  no server or database.
