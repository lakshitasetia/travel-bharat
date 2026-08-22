# Travel Bharat — Editorial Website (PRD)

## Original Problem Statement
Build a premium editorial website for **Travel Bharat**, India's premium onboard travel & lifestyle magazine distributed to passengers on India's Vande Bharat Express trains. The site must feel closer to an airline magazine / luxury travel publication than a travel agency or SaaS template.

**User Choices (verbatim)**
- Framework: Angular frontend-only (static site, no backend)
- Contact page: contact info + social icons only, NO contact form
- Logo: use uploaded `Logo Final.pdf` (converted to PNG)
- Imagery: high-quality editorial travel photography (Unsplash)
- Design defaults confirmed: warm ivory bg, charcoal type, saffron/terracotta accent, Fraunces serif headlines + Inter sans body

## Architecture
- **Framework**: Angular 18 (standalone components, signals)
- **Routing**: `provideRouter` with 8 routes + wildcard 404 redirect
- **Content**: In-memory `ContentService` (stories, issues, categories) — future CMS-ready
- **Styling**: SCSS with CSS variables (design tokens). Fonts via Google Fonts (Fraunces, Cormorant Garamond, Inter, Noto Serif Devanagari)
- **Icons**: Font Awesome 6.5.1 CDN
- **Server**: `ng serve` on 0.0.0.0:3000, managed by supervisor

## Pages Implemented (Jan 2026)
1. **Home** — cinematic hero, intro, featured issue, 8 category cards, 2,00,000+ readership stat, 5-item Why block, 6-story editorial grid, saffron CTA
2. **About Us** — hero, editorial body, Vision, Distribution & Presence with stat card, Powerful Advertising Platform, 5 numbered "Why", dark closing block
3. **Magazine** — featured issue with cover + placeholder Read/Download, recent issues grid, subscription CTA
4. **Advertise With Us** — hero image, 6 reason cards, audience list, MVDK-NDLS Vande Bharat train profile with animated 7-stop route + stats (655 KM · 8h 15m–8h 30m · 20 coaches), 13 advertising categories, terracotta final CTA
5. **Blogs** — featured story, 7 category filters + "All", card grid, Load More pagination, 404 fallback
6. **Blog Detail** — dynamic `/blogs/:slug` with editorial article layout, drop cap, pull-quote, related stories
7. **Archives** — issues grouped by year (2026, 2025), cover grid with Read Issue + Download PDF placeholders
8. **Contact Us** — email, phone, office placeholder, 4 social icon buttons, 4 inquiry-type cards — **no form fields**

## Testing Status
- Verified: nav routing, hero rendering, category filter (6→1), 404 slug fallback, Contact page assertion (form:0, input:0, textarea:0), mobile hamburger at ≤1080px + menu open/close, footer socials
- All pages render editorial premium look with logo, hindi tagline, saffron accents

## Backlog / Next
- **P1**: Wire real PDF/digital editions to Magazine + Archives download links
- **P1**: Replace placeholder blog stories with real editorial content
- **P2**: SEO — per-route meta tags via `Meta`/`Title` service beyond the current title-only setup
- **P2**: Analytics + issue-download tracking
- **P3**: Newsletter capture module in footer
- **P3**: Real office address, phone, and social handles when supplied

## Assets
- Logo: `/app/frontend/public/assets/logo.png` (from user upload, converted from PDF)

## Environment
- Frontend URL: `https://transition-1.preview.emergentagent.com`
- Local dev: `yarn start` in `/app/frontend` (Angular CLI ng serve on port 3000)
- No backend calls (backend/MongoDB unused for this project)
