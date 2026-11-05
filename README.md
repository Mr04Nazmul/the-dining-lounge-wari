# The Dining Lounge Wari Rooftop

A real responsive Next.js 16 / React 19 frontend with Tailwind CSS 4, GSAP entrance animation and Motion section reveals. Static export deploys on Vercel, Sites, or any static host. No database or secrets required.

## Run

Node 22+ recommended.

```sh
npm ci
npm run dev:next
npm run typecheck
npm run build
```

Production output: `out/`. Vercel detects Next.js; build command `npm run build`. Site preview uses the static export; `scripts/dev.mjs` normalizes preview CLI flags for ordinary Next development.

## Features

Cinematic hero; story; signature pizza; 64 sourced menu entries with category filters and search; real photography with WebP optimization; gallery filters; keyboard-accessible modal with previous/next and Escape; external guest reviews; group/event enquiry; visit planning form with date validation and copyable notes; click-to-call; directions; consent-to-load map; reduced motion; skip link; labelled forms; responsive navigation. Eight gallery photos are curated from 23 source photos retained in `public/images`.

The page is an editorial one-page experience with navigable sections, not ten separate routes. Guest reviews link to the original platforms; no invented quotes or rating widgets. The reservation planner creates notes only, sends no request and stores no personal data. All times are Asia/Dhaka.

## Content integrity

Read `reports/CONTENT.md` and `reports/asset-provenance.json`. Photos are from the Wari branch's Reserveit listing. The commissioning user states the owner authorized photo use. This assertion is recorded, not independently verified with photographers. No substitute restaurant imagery. No AI-generated or scene-altered imagery. Listed prices are not certified current dine-in prices. Exact pizza variant cannot be inferred from photographs. Opening hours conflict across sources and are therefore not published as fixed hours.

## Future integration

`lib/contracts.ts` defines CMS and booking contracts; `lib/menu.json` is the data boundary. Replace local data with a repository adapter. Add server API, validation, abuse protection, consent and authenticated admin before enabling real booking. Never expose server credentials in public environment variables. An admin/CMS dashboard is planned, not implemented. No fake login or nonfunctional admin UI.

Robots are intentionally `noindex,nofollow` for owner demonstration. Update metadataBase, social preview and robots after the owner confirms content and a public domain. Actual legal business name/logo, official social links, current portions, taxes, full menu, schedule and event capacities need owner confirmation. The editorial wordmark is a proposed website treatment, not a claim to be the restaurant's original logo.

## Design

Figma code-matched palette: https://www.figma.com/design/du0xGKyzcZi4lCFl73tnTc
CSS tokens in `app/globals.css`. Locally hosted OFL Cormorant Garamond and system sans fonts avoid third-party font requests. Font license bundled in public/fonts/OFL.txt. No analytics, trackers or cookies configured. Google Maps loads only when requested by the visitor.

## Social offers update

Official Wari Facebook page linked. American Fusion Platter BDT265 (regular BDT395) with publication date, full eligibility and call-to-confirm; original collaborative Wari campaign image. Two earlier offers are separately labelled as archived, not verified current. Includes official email and Instagram. No automatic social scraping, live inventory or invented expiry.
