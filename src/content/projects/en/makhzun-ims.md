---
title: Makhzun IMS
description: Arabic RTL inventory and asset management system for a Saudi government ministry — Angular 22 and .NET 8 with warehouse-scoped multi-tenancy, serial tracing, and 14 PDF reports.
pubDate: 2026-10-09
heroImage: ../../../assets/images/projects/makhzun-thumbnail.png
tech: [Angular, .NET 8, EF Core, SQL Server, Spartan UI]
caseStudy:
  label: Warehouse and inventory system
  problem: A ministry needed to track inventory across units and warehouses — inbound orders, dispenses, custody, transfers, and returns — without one warehouse seeing another's stock.
  result: 'An Arabic RTL system with warehouse-scoped multi-tenancy: every request validated server-side against warehouse membership, plus serial-number tracing, custody workflows, and 14 PDF reports.'
featured: true
---

Makhzun (مخزون) is a warehouse and inventory management system built
for a Saudi government ministry, covering the full lifecycle of
inventory items across military and administrative units — two
repositories, one Angular frontend and one .NET backend.

## Before / After

**Before** — inventory moved on paper and spreadsheets: items arrived
against purchase orders, were handed to units, and custody changes were
written down by hand. Nobody could trace a serial number, prove who
held an item, or run a report for just one warehouse.

**After** — every item moves through a governed workflow (inbound
orders → dispenses → custody → transfers → returns), each serial number
is traceable end to end, and each warehouse sees only its own stock
while the ministry keeps a single source of truth.

## Highlights

- **Warehouse-scoped multi-tenancy** — one shared database with
  row-level `WarehouseId` scoping; the `X-Warehouse-Id` header is never
  trusted blindly but validated server-side against active membership,
  so a forged header is rejected rather than leaking another
  warehouse's data.
- **Custody workflow** — transfers and returns move through explicit
  statuses (Pending → Accepted/Declined) with Hijri and Gregorian dates,
  and a warehouse-keeper handover reassigns active orders with a
  rollback endpoint.
- **Exactly one keeper per warehouse** — enforced in the database with
  a filtered unique index, not just in application code.
- **Serial-number tracing** — search any serial to follow an item from
  inbound order through dispense, custody, and transfer.
- **Clean Architecture backend** — .NET 8 with CQRS via MediatR,
  FluentValidation pipeline, Mapster, and 89 EF Core migrations applied
  automatically at startup; controllers stay thin and return a
  consistent `ApiResponse` wrapper.
- **Token-free frontend auth** — JWT delivered as an httpOnly cookie
  with refresh-token rotation, so no access token is ever written to
  `localStorage`.
- **14 PDF reports** — QuestPDF reports for serials by unit, dispenses
  by order, custody transfers and returns, remaining quantities, and
  more, all scoped to the requesting warehouse.
- **Audit and backup** — an operations-log middleware records changes,
  and admins can back up and restore the database from the UI.

## Who uses it

- **Warehouse keepers** — receive inbound orders, dispense items, and
  hand custody over between units.
- **AdvUsers** — create and manage transfers and returns within their
  assigned warehouse.
- **Administrators** — manage warehouses and users globally, review
  custody, and run reports across every warehouse.

## Tech stack

The frontend is Angular 22 with standalone components, zoneless change
detection, and signals, styled with Spartan UI over Tailwind CSS v4 and
daisyUI, with TanStack Table for data grids, ApexCharts for the
dashboard, and dayjs with Hijri calendar support. The backend is .NET 8
following Clean Architecture (Domain → Application → Infrastructure →
API) with SQL Server, EF Core, ASP.NET Core Identity, Serilog, and
QuestPDF.

## Outcomes

- Custody of every item is provable — who holds it, since when, and
  through which transfers.
- Cross-warehouse isolation is enforced in SQL and in middleware, not
  merely hidden in the interface.
- Reports that once took manual reconciliation are generated as PDFs
  scoped to the right warehouse.
