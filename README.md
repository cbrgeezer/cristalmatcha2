# Cristal Matcha

Premium Japanese matcha e-commerce for **Cristal Matcha** (Norwich, UK). Live at [cristalmatcha.com](https://cristalmatcha.com).

## Stack

- **Next.js 15.3** (App Router)
- **React 18**
- Vanilla CSS (`app/globals.css`) — no CSS framework
- Hosted on **Vercel**

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server (after build) |
| `npm run lint` | Run Next.js lint |

## Project structure

```
app/
  layout.js                 # Root layout + global metadata
  page.js                   # Landing page (horizontal scroll)
  HomeHorizontal.jsx        # Landing page panels
  HPageWrapper.jsx          # Horizontal scroll wrapper
  globals.css               # All styles
  not-found.jsx             # Custom 404 page
  opengraph-image.jsx       # Dynamic OG image
  context/CartContext.jsx   # Cart state (Context + localStorage)
  shop/                     # Product catalogue
  cart/                     # Basket
  products/<slug>/          # Product detail pages
  sitemap/page.js           # HTML sitemap
components/
  SiteHeader.jsx            # Top nav (used on sub-pages)
  Footer.jsx                # Footer (landing/catalog/detail variants)
  NewsletterCta.jsx         # Newsletter card
  ritualData.js             # Product data
middleware.js               # Bot protection, method blocking, probe blocking
next.config.mjs             # Redirects + security headers
public/
  favicon-cup.svg, favicon.png
  robots.txt, sitemap.xml
```

## Important behaviours

- **Horizontal scroll** on the landing page is wheel-driven via `app/HomeHorizontal.jsx`. It is disabled on mobile (`window.innerWidth <= 768`).
- **Cart** persists to `localStorage` via React Context (`app/context/CartContext.jsx`).
- **Redirects** from legacy paths (`/blog`, `/health-benefits`, `/ceremonial-grade`, `/story`, `/reviews`) are configured in `next.config.mjs`.
- **Security**: CSP, X-Frame-Options, Permissions-Policy set in `next.config.mjs`. Probe paths, bad bots, and non-GET methods rejected in `middleware.js`.

## Deployment

Push to `main` → Vercel deploys automatically. Feature work goes on `claude/*` branches.

See [`STATUS.md`](./STATUS.md) for the current roadmap (missing features: Stripe, newsletter backend, analytics).
