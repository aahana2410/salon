# Salon

**Find what you're drawn to.** A small art-discovery site for people who don't
know art yet: pick between a few pictures, and Salon names your taste and shows
you work it thinks you'll like — each piece explained in plain language,
including why it costs what it costs.

Live at **https://aahana2410.github.io/salon/**

## How it works

1. **The quiz** — five pairs of artworks, first instinct only.
2. **Your taste** — each pick scores tags (`calm`, `bold`, `gesture`,
   `geometry`, `organic`, `line`, `color`, `energy`); the two strongest become a
   plain-English sentence.
3. **The gallery** — every work is scored against that profile and ranked, with
   a match percentage on each card.
4. **Saving** — saved works live in `localStorage`. No account, no server, no
   data leaves the browser.

Every artwork is fictional and drawn in the browser as inline SVG, so the site
ships with no image assets.

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
  App.jsx                  routes (HashRouter — GitHub Pages serves static files only)
  styles.css               the whole design system: tokens, layout, components
  components/
    Artwork.jsx            the five SVG renderers every picture is drawn with
    Layout.jsx             header, footer, scroll-to-top on navigation
    WorkCard.jsx           one artwork in a grid
  data/works.js            the collection, the quiz pairs, the taste labels
  hooks/useDocumentTitle.js
  pages/                   Home, Quiz, Gallery, Work, Saved, NotFound
  state/TasteContext.jsx   taste scores, ranking, saved works, persistence
```

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds with Vite and publishes `dist/` to GitHub Pages. The Vite `base` is
`/salon/` in production, so the site works from a project-pages subpath.

---

A design prototype: the artists, artworks, prices and provenance are invented,
and "Inquire to buy" doesn't send anything anywhere.
