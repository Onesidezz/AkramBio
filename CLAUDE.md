# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marriage biodata card for Mohammed Akram. Pure HTML/CSS/Vanilla JS — no build tools, no dependencies, no package manager.

**To preview:** Open `index.html` directly in a browser (Chrome/Edge recommended for accurate print preview).

## Architecture

Three files do all the work:

- **`index.html`** — Single-page document structured as a printable card (`<article class="card">`). Sections: header (name + profile photo), Personal Details, Education & Career, Family Details, Photo Gallery (carousel), Contact Details, footer.
- **`css/style.css`** — All styles in one file. CSS custom properties (design tokens) are declared in `:root` at the top — colors, fonts, spacing, shadows, gradients. Edit tokens there to retheme the whole card.
- **`js/carousel.js`** — Self-contained IIFE. Reads the comma-separated `data-images` attribute on `#carousel` in `index.html`, dynamically generates slide `<div>`s and dot `<button>`s, then wires up prev/next buttons, dot clicks, keyboard arrows, touch swipe, and auto-play (4 s interval, pauses on hover).

## Managing the Photo Gallery

Images live in `images/`. To add or remove carousel photos, edit the `data-images` attribute on the `<div id="carousel">` element in `index.html` — comma-separated filenames, no paths:

```html
data-images="profilepic.jpeg,photo2.jpeg,..."
```

The carousel JS reads this list at runtime and builds everything dynamically. No JS changes needed when swapping photos.

## Carousel Config (js/carousel.js)

```js
const AUTO_PLAY  = true;   // set false to disable auto-advance
const AUTO_DELAY = 4000;   // ms between slides
```

## Theming (css/style.css)

All colors, fonts, and spacing are CSS variables at the top of `style.css`. The theme is "Royal Emerald & Gold":

```css
:root {
  --emerald-900: #022c22;
  --gold-600:    #b5882a;
  --font-display: 'Cormorant Garamond', serif;
  --font-body:    'Jost', sans-serif;
  /* ... */
}
```

## Print / PDF Export

Open in Chrome or Edge → `Ctrl+P` → Save as PDF. Settings: A4, margins None, background graphics enabled. Only the active carousel slide prints; the rest are hidden via `@media print` rules in `style.css`.

## Hosting

No build step. Push to GitHub and enable GitHub Pages (Settings → Pages → source: `master` branch, `/ (root)`).
