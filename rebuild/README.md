# King & Queen Barber — Rebuild

Next.js 14 + TypeScript + Tailwind rebuild of [kingandqueenbarber.ca](https://kingandqueenbarber.ca).

See `../seo-audit.md` for what the original site got wrong, and `../design-notes.md` for what changed in the rebuild and why.

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build for production

```bash
npm run build
npm run start
```

## Project shape

```
rebuild/
├── app/
│   ├── layout.tsx        Root layout — fonts, metadata, LocalBusiness JSON-LD
│   ├── page.tsx          Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css       Tailwind + base styles (buttons, eyebrow, cards)
│   ├── sitemap.ts        Auto sitemap.xml
│   └── robots.ts         Auto robots.txt
├── components/
│   ├── BrandMark.tsx     Wordmark with crown SVG
│   ├── Container.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceRow.tsx    Price list row with dotted leader
│   └── HoursTable.tsx
├── lib/
│   └── seo.ts            SITE constants + JSON-LD generator (one source of truth)
└── tailwind.config.ts    Design tokens — gold / ink / paper palette
```

## What to update before deploying

1. **`public/og.png`** — drop in a 1200×630 branded share image. The metadata already references it.
2. **`public/favicon.ico`** — generate from the wordmark or a crown mark.
3. **`SITE.baseUrl`** in `lib/seo.ts` — currently `https://kingandqueenbarber.ca`; leave as-is if redeploying to the same domain.
4. (Optional) Replace remote `kingandqueenbarber.ca/storage/...` image URLs with locally-hosted higher-res copies in `public/`.

## Deploy

Easiest path: Vercel (one-click GitHub deploy, free tier). Also works on Netlify, Cloudflare Pages, or any Node host.
