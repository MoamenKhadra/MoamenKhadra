---
title: Dealzgy User App
description: Consumer price-comparison app in English and Arabic — Angular 20 SSR with zoneless signals, Transloco i18n, and Capacitor builds for Android and iOS.
pubDate: 2025-11-26
tech: [Angular, SSR, Capacitor, Tailwind CSS, Transloco]
links:
  demo: https://us.dealzgy.com/en
featured: false
---

The consumer-facing Dealzgy app — search, compare, and save on
millions of products across thousands of online stores, in English and
Arabic, shipping as both a server-rendered website and a native mobile
build.

## Before / After

**Before** — shoppers compared prices by opening store after store in
different tabs, and the brand had no app — only a website that had to
be rewritten to reach phones.

**After** — one app holds the catalog, stores, brands, favorites, and
price alerts, renders server-side for fast first paint, and wraps the
same codebase as Android and iOS builds through Capacitor.

## Highlights

- **Server-rendered Angular** — SSR with Express 5 and incremental
  hydration, with the language route rendered on the server and the
  rest prerendered for fast first paint.
- **Zoneless and signal-driven** — `provideZonelessChangeDetection`
  with signals for state, following the team's enforced conventions
  (standalone components, `input()`/`output()`, native control flow).
- **English LTR and Arabic RTL** — Transloco with persisted language
  and translations, `dir` set dynamically per language, IBM Plex Sans
  Arabic bundled, and per-language logo lockups.
- **Country-aware routing** — Express middleware reads the country
  from the subdomain, 301-redirects unknown hosts, and writes a 30-day
  locale cookie; Egypt, Saudi Arabia, and the UAE each carry their own
  flag and currency (EGP, SAR, AED).
- **Comparison, not checkout** — home hero search, category browsing,
  flash deals, product pages with galleries, stores and store pages,
  brands, favorites lists, and price alerts — deliberately no cart.
- **Native shells** — Capacitor 7 with `android/` and `ios/` projects,
  `CapacitorHttp` enabled, and native-only chrome such as the bottom
  nav bar hidden on the web.
- **Dark mode without flash** — DaisyUI `light`/`night` themes with
  the stored preference transferred through Angular's `TransferState`
  so SSR output matches the visitor's theme.

## Who uses it

- **Shoppers** — search and compare products, follow stores, and keep
  favorites and price alerts across devices.
- **Regional visitors** — get their own country subdomain, currency,
  and flag while choosing English or Arabic.
- **Native app users** — run the same feature set from a home-screen
  install on Android or iOS.

## Tech stack

Angular 20 with SSR, standalone components, zoneless change detection,
and signals; Tailwind CSS v4 with DaisyUI 5; Transloco for i18n; and
Capacitor 7 for native Android and iOS builds. Karma and Jasmine cover
40 spec files.

## Outcomes

- A single feature set serves the website and both mobile platforms.
- English and Arabic visitors get correct direction, fonts, and logo
  treatment without duplicated templates.
- First paint is server-rendered rather than waiting on a client-only
  bundle.
