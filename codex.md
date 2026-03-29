# Codex Project State

## Current Product Direction
- The active site is no longer the earlier Cristal Matcha content site.
- The current frontend is a Next.js app rebuilt in the style of the `stitch_shopping_cart` reference project.
- Visual direction is premium editorial ecommerce inspired by the `MATCHA RITUAL` mockups, but branded as `Cristal Matcha`.
- Brand treatment:
  - Main logo text: `Cristal Matcha`
  - Subtitle/tagline under logo: `The Matcha Parlour`
- Current palette direction:
  - primary brand green: `#5EBC04`
  - footer: sakura blossom pink gradient
  - newsletter card: very soft cherry blossom pink gradient
  - pricing surfaces: Desert Sand inspired tones

## Current Routes
- `/`
  - Landing page based on the reference `landing_page`
- `/shop`
  - Product catalogue page based on `product_catalog`
- `/products/ceremonial-grade`
  - Product detail page based on `product_detail_page`
- `/cart`
  - Shopping basket page based on `shopping_cart`
- Redirect routes:
  - `/blog` -> `/shop`
  - `/health-benefits` -> `/shop`
  - `/ceremonial-grade` -> `/products/ceremonial-grade`
  - `/story` -> `/#story`
  - `/reviews` -> `/#reviews`

## Language and Currency
- Copy has been converted to British English where updated so far.
- Pricing is displayed in GBP (`£`) across:
  - landing products
  - catalogue
  - product detail
  - basket
- Basket terminology is used instead of cart in user-facing copy where updated.

## Current Styling State
- Main section headings were moved to the stronger green accent for contrast.
- Buttons and badges were updated to use the current green palette.
- Product image hover states now add an individual shadow beneath each hovered image/card.
- Footer background was changed from sand tones to a cherry blossom pink gradient.
- Newsletter card background was softened from sand into a delicate blossom pink gradient.
- Header logo uses the green accent and a subtle glow.
- Header layout is now:
  - navigation pinned left on desktop
  - logo centred on desktop
  - actions pinned right
  - mobile collapses to hamburger
- Subtitle under the logo is centred directly beneath `Cristal Matcha`.
- Favicon currently points to:
  - `public/favicon-cup.svg`
  - matcha cup icon

## Important Files
- App routes:
  - `app/page.js`
  - `app/shop/page.js`
  - `app/products/ceremonial-grade/page.js`
  - `app/cart/page.js`
  - `app/story/page.js`
  - `app/reviews/page.js`
  - `app/ceremonial-grade/page.js`
  - `app/blog/page.js`
  - `app/health-benefits/page.js`
  - `app/sitemap/page.js`
- Shared components:
  - `components/SiteHeader.jsx`
  - `components/Footer.jsx`
  - `components/NewsletterCta.jsx`
  - `components/ritualData.js`
- Styling:
  - `app/globals.css`

## Hero Section Status
- The extra botanical overlay in the bottom-right of the hero was removed.
- Hero height was adjusted so it does not get pushed below the viewport by the fixed header.
- The secondary hero CTA (`Our Story`) was removed.
- Current solution:
  - `--header-height` in `app/globals.css`
  - hero uses `min-height: calc(100vh - var(--header-height))`

## Technical Notes
- The app builds successfully with `npm run build`.
- Vercel production deploys were previously failing before build start.
- Root cause found via Vercel API:
  - commit author `pchonacki1@proton.me` did not have access to the Vercel team
  - deployment `readyStateReason`: author must have team access
- Fix applied:
  - local git author switched to `wolfcbr-1977 <wolfcbr@pm.me>`
  - a new authorized commit was pushed
  - Vercel production deploys now work again
- There were repeated local dev issues with stale Next.js cache:
  - error example: `__webpack_modules__[moduleId] is not a function`
  - other variants seen locally:
    - `Cannot find module './778.js'`
    - `Cannot read properties of undefined (reading 'call')`
    - `a[d] is not a function`
  - fix used: remove `.next` and restart dev server
- If the runtime error appears again, use:
  - `rm -rf .next`
  - then `npm run dev`
- If that is not enough, use a full local reset:
  - `pkill -f "next dev"`
  - `rm -rf .next node_modules package-lock.json`
  - `npm install`
  - `npm run dev`

## Reference Source Used
- Local reference folder copied into workspace:
  - `stitch_shopping_cart/`
- Used subfolders:
  - `landing_page`
  - `product_catalog`
  - `product_detail_page`
  - `shopping_cart`
  - `uji_zen/DESIGN.md`

## Current Open Quality Notes
- Some text may still benefit from a stricter British luxury ecommerce tone pass.
- External images are still hotlinked from the reference HTML and have not yet been localised into `public/`.
- Some legacy static HTML files still exist in repo root, but the Next app is the active implementation.

## Last Confirmed State
- Branding updated to `Cristal Matcha`
- Tagline updated to `The Matcha Parlour`
- Hero overlay removed
- Hero viewport issue fixed
- British English pass completed
- GBP pricing completed
- Main palette updated to `#5EBC04`
- Footer changed to cherry blossom pink
- Newsletter card changed to a soft blossom pink
- Pricing areas changed to Desert Sand tones
- Matcha cup favicon added
- Header desktop layout changed to left nav / centred logo / right actions
- Subtitle centred under logo
- Secondary hero CTA removed
- Vercel deployment author issue fixed
- Production build passes
- Production deploy passes

## GitHub / Library Notes
- Original GitHub remote used earlier:
  - `tb0ied/cristal-matcha`
- Active GitHub remote now in use:
  - `cbrgeezer/cristal-matcha`
- A local archive of all `tb0ied` repositories was cloned to:
  - `/Users/mcbee/Desktop/tb0ied-github-library`
- The copied project that should be kept in sync for reference is:
  - `/Users/mcbee/Desktop/tb0ied-github-library/cristal-matcha`
