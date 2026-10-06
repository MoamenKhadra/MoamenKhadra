---
title: Memory Card Game
description: A responsive Pokémon memory card game built with Angular, Tailwind CSS, and the PokéAPI — with RxJS data fetching and persistent high scores.
pubDate: 2025-02-15
heroImage: ../../../assets/images/projects/pokemon-memory-card-game-thumbnail.png
heroImageAlt: Memory card game board with Pokémon cards
tech: [Angular, TypeScript, Tailwind CSS, RxJS, PokéAPI]
links:
  repo: https://github.com/MomenGit/memory-card
  demo: https://momentadev-memory-card.vercel.app/
featured: true
---

A web-based Pokémon memory card game with a responsive UI and live API
integration, built to practice Angular architecture and reactive data
flow.

## Highlights

- **Reactive data fetching** — RxJS and `HttpClient` pull card data from
  the PokéAPI and handle loading and error states cleanly.
- **Persistent scores** — high scores survive page reloads via
  `localStorage`.
- **Performance-minded game logic** — efficient data structures keep
  shuffling and comparison instant, even on mid-range phones.
- **Responsive board** — Tailwind CSS grid adapts from phones to
  desktops without a separate mobile layout.

## Tech stack

Angular and TypeScript for the component architecture, Tailwind CSS for
styling, RxJS for streams, and the PokéAPI as the data source.
