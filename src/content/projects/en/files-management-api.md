---
title: Files Management API
description: A file storage API with token-based authentication, uploads, listing, and permission management — with Redis caching for performance, built on Node.js and Express.
pubDate: 2024-03-15
tech: [Node.js, Express, MongoDB, Redis]
links:
  repo: https://github.com/MoamenKhadra/alx-files_manager
featured: false
---

A file storage API that handles authentication, uploads, listing, and
permission management — built to explore caching and token-based auth
in a real service.

## Highlights

- **Token-based authentication** — users authenticate once and receive
  a token that gates every file operation.
- **Redis caching** — hot file metadata is cached so listing endpoints
  stay fast under repeated reads.
- **Permission model** — file access can be shared and revoked per user,
  enforced server-side on every request.

## Architecture

Express routes → controllers → MongoDB for persistence and Redis for
caching, keeping each layer swappable and testable in isolation.
