# Validation — 5 November 2026

- Next.js production static export: PASS.
- TypeScript: PASS.
- Desktop browser visual review: 1363px viewport; no horizontal overflow.
- Production export interaction checks: menu category + BBQ search returns BBQ Deep Dish at BDT 1,045; PASS.
- Gallery modal opens, advances and closes; PASS. Native dialog supplies focus handling and Escape.
- Visit planner produces notes and explicitly says no reservation sent; PASS.
- Responsive browser frames: 390px and 320px. Document body widths 375/305 after scrollbar, scrollWidth matches: no horizontal overflow. Mobile navigation opens; PASS. Narrow header revised after visual review.
- DOM accessibility checks: zero images missing alt, zero unnamed buttons, zero unlabelled form fields; one h1. Reduced-motion styles and Motion/GSAP guards implemented.
- These are targeted checks, not an axe/WCAG certification, real-device test or performance score.
- Public review links and directions configured. External map only loads after click; live Google service availability not guaranteed.
- Follow-up: browser sign-in verified; dedicated private GitHub repository created at Mr04Nazmul/the-dining-lounge-wari. Existing user repos untouched.
- No Vercel deployment claimed. Static host deployment is tracked separately in Sites.

## Luxury + Facebook update validation

- Production build and TypeScript: PASS.
- Desktop visual review: champagne/espresso hero, original rooftop inset, self-hosted font and official campaign poster loaded.
- Offer details accordion exposes all item and eligibility conditions. Archive toggle renders exactly two earlier announcements; both explicitly not verified current.
- Browser responsive frames 390px and 320px: body/scroll widths 375/375 and 305/305; archive expanded at 320px remains 305px wide. No horizontal overflow.
- DOM checks: no image missing alt, no unnamed buttons. Native details controls keyboard accessible; source links and click-to-call retained.
- Live availability is not claimed; no invented expiry, booking submission or standalone BDT99 pasta price. Public Facebook feed beyond first collaborative post did not load; no complete-feed claim.
- Cormorant Garamond OFL subset font assets total under 90KB; hosted locally, no external font requests.
