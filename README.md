# Salon

**Find what you're drawn to.** In 1700s Paris the salon was where everyone met
art. Then the art world moved behind appointment-only doors and unlisted prices.
This is a small site that reopens them: pick between a few pictures, and Salon
names your taste and gives you an atelier of your own — art chosen for your eye,
short readings, and gatherings, all in plain language.

Live at **https://aahana2410.github.io/salon/**

## The two rooms

- **welcome** — the story, the doorway to the quiz, two works on their blobs.
- **your atelier** — your taste as hashtags, four works chosen for you, *learn
  your eye* readings keyed to your two strongest tags, workshops, and anything
  you've saved. Empty until you take the quiz.

Each room stands in front of its own painted world — cosmic, sunset, lake,
ochre — drawn as SVG and smeared into pigment by an `feTurbulence` filter. The
paintings themselves are drawn the same way. No image assets, no webfonts, no
network calls: the whole site is one cream sheet held up against paint.

## How the taste works

Each pick scores the tags on that artwork (`#calm`, `#bold`, `#gesture`,
`#geometry`, `#organic`, `#line`, `#color`, `#energy`). The two strongest become
"your eye leans", choose your readings, and rank the collection — every work
gets a match percentage. Taste and saved pieces live in `localStorage`; no
account, no server, nothing leaves the browser.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  App.jsx                   routes (HashRouter — GitHub Pages serves static files only)
  styles.css                the whole design system: sheet, blobs, type, rooms
  components/
    paintings.jsx           the eight paintings, one SVG each
    PaintedWorld.jsx        the four worlds behind the sheet
    WorkOnBlob.jsx          a painting floating on its blob
    Caption.jsx             captions and hashtag tags
    Layout.jsx              the sheet: nav, world for the route, footer
  data/works.js             collection, quiz pairs, readings, workshops
  hooks/useDocumentTitle.js
  pages/                    Welcome, Quiz, Atelier, Work, NotFound
  state/
    TasteContext.jsx        taste scores, ranking, saved works, persistence
    ToastContext.jsx        the little cream pill at the bottom of the screen
```

Routes are `#/`, `#/quiz`, `#/atelier`, `#/work/:id`. The site's older
`#/gallery`, `#/saved` and `#/feed` links redirect into the atelier.

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds with Vite and publishes `dist/` to GitHub Pages. The Vite `base` is
`/salon/` in production, so the site works from a project-pages subpath.

---

A design prototype: the artists, artworks, prices, provenance and gatherings are
invented, and nothing you tap sends a message to anyone.
