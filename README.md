# Jaipuri Odhani — Link-in-Bio

A premium, mobile-first digital business card / link hub for **Jaipuri Odhani**
("Culture In Every Stitch"). Built to be scanned from a QR code and to later
drop straight into a larger website as a `/links` route — with **zero code
changes**.

## Tech
Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion ·
Lucide Icons · `qrcode.react`.

## The only three things you ever edit

1. **`NEXT_PUBLIC_SITE_URL`** (in `.env.local` / Vercel) — the public URL.
   The QR code, canonical URL, Open Graph tags, sitemap, robots and structured
   data all derive from this. Going to production = change this one line.
2. **`config/business.ts`** — business name, tagline, description, all social /
   contact links, and store locations. Leave any social value `""` and its
   button automatically shows **"Coming Soon"**.
3. **`public/av-logo.png`** — the logo (also used for the favicon).

## Run locally

```bash
npm install
cp .env.example .env.local   # already provided; set your URL
npm run dev                  # http://localhost:3000  → redirects to /links
```

## Deploy (development → production)

- **Now (no domain):** deploy to Vercel, set
  `NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app`.
- **Later (custom domain):** change it to `https://yourbrand.com`. Done — the
  QR and all metadata follow automatically.

> ⚠️ The QR code is permanent once printed. Only print materials **after** the
> `NEXT_PUBLIC_SITE_URL` points at the URL you intend to keep.

## Analytics (optional, provider-agnostic)

`lib/analytics.ts` auto-detects Vercel Analytics, Google Analytics, Plausible
or Umami and **no-ops if none is configured**. To enable one, add its env var
(see `.env.example`) and, if it needs a script tag, add it in
`app/layout.tsx`. No component code changes. Tracked events: `link_click`,
`store_click`, `qr_download`.

## Migrating into your main website later

1. Copy `app/links/`, `components/`, `lib/`, `config/` and `public/` assets.
2. Set `NEXT_PUBLIC_SITE_URL`.
3. Delete the standalone `app/page.tsx` redirect if you have your own home page.

That's it — the hub already lives at its own `/links` route.
# av-links
