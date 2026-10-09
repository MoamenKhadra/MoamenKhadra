---
title: BMB & Co
description: Arabic-first corporate website for a Saudi accounting, audit, and legal firm — Angular 20 SSR with four locales, EmailJS contact routing, per-page SEO, and Docker/nginx deployment.
pubDate: 2026-06-23
heroImage: ../../../assets/images/projects/bmbco-thumbnail.png
heroImageAlt: BMB and Co homepage with services and team sections
tech: [Angular, SSR, Tailwind CSS, daisyUI, EmailJS]
featured: false
---

The corporate site for BMB & Co, a Saudi accounting, audit, and legal
consulting firm licensed by SOCPA and operating from Riyadh since 2010
— published in Arabic, English, French, and Chinese.

## Before / After

**Before** — the firm's presence was a static brochure: services listed
without depth, no way to tell which team member handled which
engagement, and inbound inquiries arriving by phone only.

**After** — six service pillars each have their own page, a team roster
with named partners and licensed auditors, ten branch offices with
maps, and a contact form that routes each inquiry to the right internal
inbox based on the service selected.

## Highlights

- **Four locales, Arabic first** — the source locale is `ar-SA` at the
  root URL, with `/en/`, `/fr/`, and `/zh/` built from Angular's
  `@angular/localize` XLIFF pipeline (~1,900 translation units), and
  legacy `/ar/*` URLs 301-redirected to root.
- **SSR and prerender** — every route prerenders to full HTML, so
  crawlers and social scrapers never see an empty app shell.
- **Per-page SEO** — titles, descriptions, canonical, hreflang, Open
  Graph, Twitter cards, and JSON-LD `Organization` schema are emitted
  by a dedicated `SeoService` on each route.
- **EmailJS contact routing** — the reactive form validates bilingual
  (Arabic-script name pattern included), then sends via EmailJS to a
  different address per service type, with `?serviceType=` deep links
  preselecting the right option.
- **RTL-aware carousel** — the client-logo marquee inspects the
  browser's scroll type so the infinite loop runs correctly in Arabic
  RTL, where most generic carousels break.
- **Custom animations** — a `FadeInDirective` based on
  IntersectionObserver staggers sections in, plus a hero crossfade and
  an infinite logo marquee; no animation library.
- **Docker + nginx** — a single-stage image builds all four locales
  and serves them behind nginx with locale routing, immutable asset
  caching, and security headers.

## Who uses it

- **Prospects** — read a service page, then book a consultation through
  the form or a branch phone number.
- **The firm's staff** — inquiries arrive pre-tagged by service so
  audit, legal, and bankruptcy matters reach the right partner.
- **Arabic, English, French, and Chinese readers** — each gets a native
  URL, direction, and font stack.

## Tech stack

Angular 20 with standalone components, signals, and zoneless change
detection, rendered through `@angular/ssr` with all routes set to
prerender. Tailwind CSS v4 and daisyUI carry the styling over a custom
orange-and-navy theme with self-hosted DIN Next LT Arabic. Contact
forms go through EmailJS; Karma and Jasmine cover component specs.

## Outcomes

- Arabic-first RTL by default, with three additional languages behind a
  flag switcher that keeps the visitor on the same page.
- Every service inquiry reaches the specialist who handles it, without
  an operator triaging the inbox.
- A deployment story worth keeping: the nginx config documents each
  fix — including Chrome's ORB blocking Angular `.mjs` bundles over a
  missing MIME type.
