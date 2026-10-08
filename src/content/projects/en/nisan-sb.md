---
title: Nisan Scientific Bureau
description: Bilingual EN/AR corporate site for an Iraq-based healthcare market-access bureau — one-page layout with tabbed services, a market-coverage map, WhatsApp CTA, and full local SEO.
pubDate: 2026-06-10
heroImage: ../../../assets/images/projects/nisansb-thumbnail.png
heroImageAlt: Nisan Scientific Bureau hero with partner call to action
tech: [HTML, Bootstrap 5, jQuery, Owl Carousel, PHP]
links:
  demo: https://nisansb.com/
featured: true
---

A bilingual one-page website for Nisan Scientific Bureau (NSB), an
Iraq-based scientific bureau that helps international healthcare
manufacturers register, launch, and distribute products in Iraq.

## Before / After

**Before** — NSB had been operating since 2017 with no web presence.
Manufacturers abroad had nothing to read before a first call, and the
company profile existed only as a PDF.

**After** — a single scrolling page covers the offer, services,
regulatory affairs, market coverage, partners, and team in both English
and Arabic, with a language switcher in the header and a contact form
that lands straight in the company inbox.

## Highlights

- **Six service areas, tabbed** — official representation, product
  registration, regulatory affairs, market access, distribution
  coordination, and commercial development switch in place without
  page loads.
- **Bilingual by construction** — `/` is English LTR and `/ar/` is
  Arabic RTL with a mirrored layout, a Cairo font, and hreflang
  alternates between them.
- **Market coverage map** — an embedded map plus a list of the regions
  served: Baghdad, central and southern provinces, Kurdistan, and
  private healthcare channels.
- **Partner and team sections** — product-category carousel, partner
  logos, and the four named team members build credibility before the
  visitor reaches the form.
- **WhatsApp as a first-class CTA** — the hero and the closing section
  both open a prefilled WhatsApp chat alongside the contact form.
- **Local SEO** — JSON-LD `Organization` and `LocalBusiness` with geo
  coordinates, founding date, and address, plus canonical, Open Graph,
  and a two-URL sitemap with hreflang.

## Who uses it

- **Manufacturer prospects** — scan the services tab and the coverage
  map, then reach out through the form or WhatsApp.
- **Partners** — see the product categories NSB supports and the current
  partner roster.
- **The NSB team** — the contact form posts to a PHP handler that mails
  `contact@nisansb.com` with the inquiry subject.

## Tech stack

Static HTML built on the Trustlife medical template and rewritten for
NSB, with Bootstrap 5's grid, jQuery, Owl Carousel, and Isotope for the
carousels and filtering. Two PHP mail handlers serve the contact and
appointment forms; Modernizr and a small custom `main.js` handle the
preloader, one-page navigation, and accordion behavior.

## Outcomes

- A live, indexable presence in both languages at `nisansb.com`.
- Inquiries routed to a real mailbox instead of a phone number written
  on a brochure.
- Every major section — services, coverage, partners, team, contact —
  reachable from a single scroll with a sticky nav.
