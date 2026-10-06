---
title: Qwizyo API
description: Backend for a quiz management platform — RESTful APIs for users, groups, assignments, and quizzes with role-based access control, built with Python and Flask.
pubDate: 2024-04-15
heroImage: ../../../assets/images/projects/placeholder-thumbnail.png
heroImageAlt: Qwizyo API architecture diagram
tech: [Python, Flask, MongoDB, REST API]
links:
  repo: https://github.com/MomenGit/qwizyo-api
featured: true
---

The backend for a quiz management platform, exposing RESTful APIs that
cover the full lifecycle of running quizzes for users and groups.

## Highlights

- **Complete CRUD coverage** — users, groups, assignments, and quizzes
  each get a consistent, documented API surface.
- **Role-based access control** — permissions are enforced per role so
  students and instructors only see what they should.
- **Document storage** — MongoDB fits the nested shape of quiz questions
  and submissions better than a rigid relational schema.

## API surface

Authentication endpoints plus resource routes for groups, assignments,
and quizzes — all returning consistent JSON error shapes so clients can
handle failures in one place.
