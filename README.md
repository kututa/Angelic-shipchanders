# Angelic Shipchandlers — Website

Ship chandling website for Angelic Shipchandlers Enterprises Limited
(Port of Mombasa). React + Vite, plain JavaScript, CSS Modules.

## Getting started

```bash
npm install
npm run dev
```

Open the printed localhost URL.

## Stack

- **React 18 + Vite** — no TypeScript
- **react-router-dom** — routing, incl. the full-page `/brief` flow
- **CSS Modules** — one `.module.css` per component, plus shared
  tokens in `src/styles/`
- **clsx** — conditional class names
- **IntersectionObserver** (via `ScrollReveal`) — scroll-triggered
  fade-up/fade-in, no animation library

## Design tokens (`src/styles/variables.css`)

| Token | Hex | Role |
|---|---|---|
| `--color-base` | `#2D274B` | Header, footer, dark sections |
| `--color-accent` | `#9787F3` | Links, secondary highlights |
| `--color-surface` | `#EAEFFE` | Section backgrounds, cards |
| `--color-gold` | `#E8B86D` | Primary CTAs, active states |
| `--color-ink` | `#1A1830` | Body text |

Typography: **Jost** (display/headlines) + **Inter** (body), loaded
via Google Fonts in `index.html` — chosen as a free, metrically-close
stand-in for Futura, which requires a paid licence for web use.

## Site map

| Route | Purpose |
|---|---|
| `/` | Hero, interactive ship cross-section, brief teaser, supply range, port-call steps, trust seals, closing call |
| `/brief` | 4-step Vessel Brief (vessel → port call → needs → contact), ends in a summary sent by WhatsApp or email |
| `/services/:slug` | One page per service, driven by `src/data/services.js` |
| `/supply-range` | The 6 public store categories, no prices, links to request a price list |
| `/about` | Company description, rewritten in short/confident copy |
| `/contact` | Phone, email, address, hours, WhatsApp + map links |

## How the ship ↔ brief connection works

Tapping a hotspot in `VesselCrossSection` links to `/brief?need=<slug>`.
`StepNeeds` reads that query param on mount and pre-ticks the matching
service, so the ship and the brief function as one system rather than
two separate features.

## IMPORTANT — before this goes live

These were deliberately left as placeholders/defaults during the build
and must be resolved with the client first:

1. **Trust seals** (`src/data/seals.js`) — every entry has
   `verified: false`, so the homepage currently shows "Licensing
   details available on request" instead of real badges. Flip each
   entry to `true` (and add the real seal image) only once the client
   has confirmed a current, in-date document. **Never** add the
   director's personal documents (ID, personal KRA PIN, police
   clearance, medical certificate) here — this section is
   company-level only.
2. **Business details** (`src/data/contact.js`) — the source company
   profile had inconsistent address and email details. Confirm the
   final versions with the client before launch.
3. **Hero imagery** (`Hero.jsx`) — currently a generated placeholder
   gradient/silhouette, not a real photo. Swap in licensed stock or
   (preferably) the client's own port/vessel photography.
4. **Logo** — request a vector or high-resolution version from the
   client; the header currently uses a text wordmark.
5. **Price list** — not published anywhere on the site by design.
   `/supply-range` and the footer link to a "request our price list"
   email instead. If the client wants a downloadable PDF, the
   cleaned-up price data (from the uploaded company profile) can be
   turned into one.
6. **Bonded stores** — kept out of the public `supply-range` strip and
   reachable only through the "Crew lounge" ship hotspot / the Needs
   step, both labelled "verified vessels only."

## Content rules already built in

- No shopping cart, no public prices.
- Bonded stores gated to limited visibility.
- Certificates shown only once verified (see #1 above).
- Brief response copy reads "We respond promptly," not a time-bound
  promise.
- `prefers-reduced-motion` is respected globally (preloader, hover
  bounce, scroll reveals all disable themselves).
# Angelic-shipchanders
