# Morocco Family Trip Companion

## Product

This repository contains a mobile-first, installable offline PWA for a family
trip to Morocco from 17 to 25 June 2026.

The primary users are a father and his two teenage daughters using Android
phones. The experience should be attractive, engaging, informative and useful
during the trip.

Production URL:

https://paolomarini.github.io/morocco-family-trip/

## Technology

- React
- TypeScript
- Vite
- GitHub Pages
- Static hosting only
- No backend
- No accounts
- No remote database

The GitHub Pages base path is:

`/morocco-family-trip/`

Never introduce absolute asset paths that ignore this base path.

## Product principles

- Mobile-first
- Fully usable offline after initial download
- Fast on ordinary Android phones
- Short, readable content rather than long essays
- Progressive disclosure: summaries first, deeper detail on demand
- Avoid a generic travel-blog appearance
- Avoid excessive animation
- Make interactive features meaningful rather than decorative
- Do not place sensitive booking references, passport details or payment data
  in the application

## Visual direction

Use a warm Moroccan-inspired visual language:

- cream and parchment backgrounds
- terracotta, ochre and muted green accents
- restrained geometric motifs
- editorial serif headings
- clear sans-serif body text
- strong photography
- generous spacing
- large touch targets

Avoid cultural clichés, fake Arabic-style fonts and excessive ornamentation.

## Accessibility

- Semantic HTML
- Keyboard-accessible controls
- Visible focus states
- Adequate contrast
- Minimum practical touch target around 44px
- Respect `prefers-reduced-motion`
- Images require meaningful alt text
- Do not convey meaning through colour alone

## Engineering standards

- TypeScript strictness must remain enabled
- Avoid `any`
- Keep structured content separate from presentation components
- Prefer small reusable components
- Do not add dependencies without a clear reason
- Run `npm run build` before declaring a task complete
- Fix all TypeScript and build errors
- Do not alter the GitHub Pages deployment workflow unnecessarily

## Git workflow

- Work directly in the current repository
- Show a concise summary of changed files
- Do not push unless explicitly asked
- Do not rewrite Git history
- Use clear, focused commits

## Current product areas

- Home
- Journey
- Discover
- Play
- Useful
- Offline/PWA status

## Source accuracy

Historical, cultural, practical and safety information must not be invented.
Mark uncertain content clearly for verification.