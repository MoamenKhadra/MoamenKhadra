---
title: AtUrHome
description: Arabic RTL last-mile logistics platform — React and Supabase dashboard for shipments, drivers, cash-on-delivery collection, and fulfillment, with role-based access for merchants and drivers.
pubDate: 2026-05-24
heroImage: ../../../assets/images/projects/aturhome-thumbnail.png
heroImageAlt: AtUrHome dispatch dashboard listing shipments and drivers
tech: [React, Vite, TypeScript, Supabase, Tailwind CSS]
links:
  demo: https://www.aturhome.sa
featured: true
---

AtUrHome ("عند بيتك" — _at your home_) is an Arabic, right-to-left
platform for last-mile parcel logistics: shipments, drivers, cash on
delivery, and warehouse fulfillment in one operations dashboard.

## Before / After

**Before** — parcel operations ran on spreadsheets and phone calls:
orders were assigned by memory, cash collected from drivers was
reconciled by hand, and merchants had no way to see where their
shipments were.

**After** — a single dashboard carries a shipment from creation through
the warehouse to delivery or return, drivers pick up available work
themselves, and every cash-on-delivery amount is recorded against a
remittance the moment it is collected.

## Highlights

- **Role-based access control** — four roles (admin, operator, driver,
  merchant) map to a permission matrix of about 30 granular
  permissions, and each route is gated by the permission it needs.
- **Shipment lifecycle** — `CREATED → AT_WAREHOUSE → ASSIGNED → OUT_FOR
DELIVERY → DELIVERED`, with failed attempts, returns, and cancellations
  as first-class states rather than free-text notes.
- **Cash-on-delivery flow** — a database trigger creates the COD entry
  on delivery, drivers remit what they collected, and settlement closes
  the period; invoices subtract shipping fees from what was collected.
- **Freelance driver marketplace** — warehouse staff publish shipments
  as offers, drivers are filtered by vehicle capacity and city, and
  accepting one offer auto-rejects the competing applications.
- **Zone-based pricing engine** — base fee plus per-kilogram and COD
  percentages, resolved zone → city → global, feeding batch invoice
  generation per merchant and period.
- **Realtime notifications** — a Supabase `postgres_changes`
  subscription drives the header bell, so dispatch updates appear
  without a refresh.
- **Merchant portal** — a separate set of routes lets a merchant create
  shipments, track them, view COD, returns, and invoices.

## Who uses it

- **Admin / operations** — dispatch, assign drivers, manage zones,
  pricing, invoices, and reports.
- **Drivers** — see available shipments, accept offers, and record
  pickups and deliveries.
- **Merchants** — create shipments and follow COD and returns for their
  own account only.
- **The developer** — an Angular 20 + Spartan UI scaffold with Docker
  and a Keycloak placeholder sits alongside the React app as a planned
  second iteration.

## Tech stack

React 18 with Vite, TypeScript, react-router, TanStack Query, and
react-hook-form + zod, styled with Tailwind CSS and shadcn/ui over
Radix. The backend is Supabase — Postgres with row-level security, 14
SQL migrations, five Deno edge functions (driver API, admin bootstrap,
geocoding, seeding), and realtime channels. Recharts renders the
reports.

## Outcomes

- Shipment status, driver assignment, and cash collection live in one
  place instead of three spreadsheets.
- Merchants get a self-serve portal rather than a phone call per
  shipment.
- The permission model enforces who may see what at the route level,
  not just in the menu.
