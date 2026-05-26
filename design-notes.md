# Design notes — King & Queen Barber rebuild

Source: https://kingandqueenbarber.ca/ &nbsp;·&nbsp; Pages crawled: 5

## What stayed the same

These were genuine assets on the original site — kept verbatim so the customer experience is unbroken.

- **NAP** (name, address, phone) — present and consistent across all original pages, used as canonical data in `lib/seo.ts`.
- **Full service price list** — comprehensive and clearly priced. Lifted into a structured `<ServiceRow>` component on `/services`.
- **Online booking link** — points at their existing Belle Booking center, untouched.
- **Hours** — verified across multiple original pages, normalized into a typed array (machine-readable for JSON-LD, human-readable for the footer / contact page).
- **Photo assets** — the portfolio JPEGs and category images on the original CMS are reused via `next/image` with `remotePatterns` for `kingandqueenbarber.ca/storage/**`. These can be swapped for higher-quality versions later.
- **Google Maps embed coordinates** — same exact embed, just rendered properly as an iframe instead of leaking as raw text.

## What changed and why

### Brand & visual identity

The original site uses a generic stock template with no identifiable brand voice. The new identity leans into the "King & Queen" name:

- **Palette:** deep ink black (`#0c0a08`), antique gold accent (`#c9a24b`), warm cream paper background (`#f5efe4`). Regal-but-warm — fits the name without being cliché.
- **Typography:** Playfair Display for headings (high-contrast serif — old-world barbershop feel), Inter for body (neutral, legible). Loaded via `next/font/google` for zero CLS and self-hosting.
- **Wordmark:** the original logo is a low-res JPEG with compression artifacts around the lettering. Replaced with a live HTML+SVG wordmark (a crown icon + "King & Queen Barber·Beauty") that's pixel-perfect at every density and adapts to dark/light backgrounds. The raster logo can still be added back as a fallback in `public/`.
- **Visual hierarchy:** generous whitespace, gold rule dividers, eyebrow labels with a hairline rule — the page feels intentional, not template-y.

### Content & copy

- **"Pedi N Nails" in every `<title>`** is gone. Every page now has a unique, keyword-rich title via Next.js metadata API (`title: "Services & Pricing"` template-templates to `"Services & Pricing — King & Queen Barber"`).
- **"Lorem ipsum" on /gallery** is gone. Replaced with real copy and descriptive `alt` text on every image.
- **Awkward phrasings** like "Our staffs are warm and will provide good advice" rewritten to clearer, warmer prose without losing the original spirit.
- **About page** rewritten around the actual hook (Brampton, family-friendly, men/women/kids, calm room) instead of stock platitudes.
- **CTAs** are intentional: "Book an appointment" goes to Belle Booking in a new tab; for color and smoothing services, the CTA explicitly says "Call to book" because the original site quietly noted this for many services — we surfaced that upfront.

### Layout

- **Hero** uses the original banner photo as a full-bleed image with a dark gradient overlay for type contrast — instead of three stacked banners with no purpose.
- **Services** is now three editorial-style image cards on the homepage (Men · Women · Specialty), each linking to a `#section` on the full pricing page.
- **Gallery** is a true masonry-feeling grid with `alt` text per image. Filter tabs are removed (they linked to `#` and did nothing on the original).
- **Footer** is a real four-column footer with brand, address, sitemap, and full hours — versus the original sparse contact-only block.
- **Mobile:** every page is responsive-first; the hero, nav, and grids collapse cleanly to single-column.

### SEO fixes (mapped to the audit)

| Original issue | Fix in rebuild |
|---|---|
| Every page title is "Pedi N Nails" | Unique titles per page via metadata API + template (`%s — King & Queen Barber`) |
| No meta descriptions | Hand-written 140–160 char descriptions on every route |
| No `<h1>` anywhere | Exactly one `<h1>` per page, descriptive |
| No canonicals | `metadataBase` + `alternates.canonical` per page |
| No OpenGraph / Twitter cards | Full OG + Twitter on every page (image at `public/og.png`) |
| No LocalBusiness schema | `HairSalon` JSON-LD ships in `<body>` with NAP, geo, hours, Facebook |
| No sitemap or robots | `app/sitemap.ts` + `app/robots.ts` (auto-generated from routes) |
| "Lorem ipsum" placeholder copy | Removed |
| Generic `alt` attributes | Descriptive `alt` on every `<Image>` |
| Broken contact form | Contact page is action-focused (call / book / map / hours) with no broken form |
| Footer "© 2022" (looks abandoned) | Dynamic `new Date().getFullYear()` |
| No `themeColor` / favicon meta | Set in `viewport` export |

### Performance

- `next/image` for every photo → automatic WebP/AVIF, responsive `srcset`, lazy loading off-screen.
- `next/font` self-hosts Google Fonts → no third-party request blocking render.
- Tailwind purges to a tiny CSS bundle.
- App Router → per-route code splitting.

## Decisions still open (worth confirming with the owner)

- [ ] Want a real "Send a message" form? If yes, I'd wire it to a serverless endpoint (Resend or Formspree).
- [ ] Higher-resolution photography — the existing JPEGs are usable but a pro shoot would lift this another tier.
- [ ] Customer reviews / testimonials block — they have a Facebook page; pulling 2–3 quotes would add social proof.
- [ ] OG share image (`public/og.png`) — currently the layout expects one. I'll generate a branded 1200×630 if you want.
- [ ] Domain & deploy — Vercel is the fastest path; happy to wire it up.
