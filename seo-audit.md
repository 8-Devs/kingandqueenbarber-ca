# SEO audit — kingandqueenbarber.ca

Audit run against the live site as scraped. Use this as the explicit punch-list the rebuild fixes.

## Critical findings (showstoppers)

These actively hurt search rankings and trust. Fix in the rebuild without exception.

### 1. **Every page's `<title>` says "Pedi N Nails"** &nbsp;&nbsp; [!] CRITICAL
The site is built from a template that was never customized. Every single page (home, about, services, gallery, contact) has the literal title `<title>Pedi N Nails</title>` — a different business entirely. Google indexes this. Anyone searching "King & Queen Barber" sees "Pedi N Nails" in the SERP.
→ **Fix:** unique, keyword-rich title per page via Next.js metadata API. Home: "King & Queen Barber & Beauty Salon — Brampton".

### 2. **No meta descriptions anywhere** &nbsp;&nbsp; [!] CRITICAL
Zero `<meta name="description">` tags on any page. Google generates a generic snippet, costing clicks.
→ **Fix:** hand-written 140–160 char description per page, conversion-focused.

### 3. **Literal "Lorem ipsum" placeholder copy on /gallery** &nbsp;&nbsp; [!] CRITICAL
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, lorem ut suscipit facilisis, nisi neque" is rendered on the live gallery page. This is a trust-killer the moment anyone scrolls.
→ **Fix:** replace with real copy describing the portfolio.

### 4. **No `<h1>` on any page** &nbsp;&nbsp; [!] HIGH
Every page uses `<h2>` or `<h3>` as the first heading. Search engines and screen readers rely on `<h1>` to identify the page topic.
→ **Fix:** exactly one descriptive `<h1>` per page.

### 5. **No canonical URLs** &nbsp;&nbsp; [!] HIGH
Risk of duplicate-content penalties (e.g., trailing-slash, www/non-www variants competing).
→ **Fix:** Next.js sets canonical via the metadata API automatically when `metadataBase` is set.

### 6. **No OpenGraph or Twitter Card tags** &nbsp;&nbsp; [!] HIGH
Sharing a link on Facebook, WhatsApp, iMessage, or Slack produces an unstyled, image-less preview.
→ **Fix:** OG title/description/image on every page; a branded 1200×630 OG image.

### 7. **No LocalBusiness structured data (JSON-LD)** &nbsp;&nbsp; [!] HIGH
This is a single-location service business in Brampton. Without schema, Google won't show the rich card with hours, phone, rating, map.
→ **Fix:** ship `LocalBusiness` / `HairSalon` JSON-LD with NAP (name/address/phone), hours, geo, image.

### 8. **No sitemap.xml or robots.txt** &nbsp;&nbsp; [!] MEDIUM
Crawlers don't get a clean URL list.
→ **Fix:** Next.js `app/sitemap.ts` and `app/robots.ts` ship these automatically.

## Content & UX findings

- **"© 2022" in the footer** suggests an abandoned site — bad for trust, bad for ranking signals.
- **Grammar:** "Our staffs are warm and will provide good advice…" — should be "Our staff is…". Several other awkward phrasings.
- **Generic stock copy** ("the ultimate in pampering and boosting your natural beauty") that could be on any salon site. Add specifics: 50+ years combined experience? Specific stylists? What makes K&Q different?
- **Contact form has no fields** — the "Send Message" link goes nowhere. Either ship a real form or remove it.
- **Map embed renders as a raw URL** in the markdown view — the iframe is broken at the template level on some pages.

## Per-page audit (mechanical)

### `/` (home)
- [!] Title: "Pedi N Nails" — wrong business
- [!] Meta description: missing
- [!] Canonical: missing
- [!] OpenGraph tags: missing
- [!] H1: 0 found (page starts with h2 "Welcome King & Queen Barber")
- [OK] Heading hierarchy is logical once h1 is added
- [OK] Word count ~180 — could be richer (300+ for the home)
- [!] No alt text on hero banner images

### `/about-us`
- [!] Title, description, canonical, OG: all missing
- [!] H1: 0 found
- [!] Word count: ~120 — thin
- [OK] Copy has a clear "Brampton" geo signal — keep that

### `/services`
- [!] Title, description, canonical, OG: all missing
- [!] H1: 0 — should be "Our Services" or similar
- [OK] Pricing is explicit and complete — strong asset, keep verbatim
- [!] Repetitive "Not available online. Please call to book appointment." — feels broken; consolidate

### `/gallery`
- [!] Title, description, canonical, OG: all missing
- [!] H1: 0
- [!] **Lorem ipsum copy in production**
- [!] Filter tabs ("All", "Men Haircut") all link to `#` — non-functional
- [!] Alt text on portfolio images is just "1", "2", "3"… — useless for SEO and accessibility

### `/contact-us`
- [!] Title, description, canonical, OG: all missing
- [!] H1: 0
- [!] Contact form has no rendered fields
- [OK] NAP (name/address/phone) and hours are all present and consistent across pages
