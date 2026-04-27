# Mohammed Akram — Marriage Biodata (v2)

Premium Indian marriage biodata with animated photo carousel.  
Pure HTML · CSS · Vanilla JS — zero dependencies.

---

## 📁 Folder Structure

```
biodata_akram/
│
├── index.html              ← Open this in any browser
│
├── css/
│   └── style.css           ← All styles (tokens, layout, carousel, print, responsive)
│
├── js/
│   └── carousel.js         ← Lightweight carousel (fade · dots · swipe · keyboard)
│
├── images/
│   ├── profile.jpg         ← Main profile photo (formal — white shirt / event)
│   ├── g1.jpg              ← Gallery: beach, white shirt, looking away
│   ├── g2.jpg              ← Gallery: beach, sunglasses smiling
│   ├── g3.jpg              ← Gallery: restaurant, blue check shirt
│   ├── g4.jpg              ← Gallery: hills, black jacket standing
│   ├── g5.jpg              ← Gallery: outdoor, maroon kurta + taqiyah
│   └── g6.jpg              ← Gallery: evening café, black jacket
│
└── README.md
```

---

## 🖼️ Adding Photos

Copy your images into `images/` with these exact filenames.

| File | Description |
|------|-------------|
| `profile.jpg` | Formal photo — displayed top-right in header (160×200 px) |
| `g1.jpg – g6.jpg` | Gallery carousel — shown one at a time |

> **Tip:** Portrait-oriented photos (3:4 ratio) look best in the carousel.  
> The carousel auto-plays every 4 seconds and pauses on hover.

---

## 🎠 Carousel Features

- Smooth fade transition between slides
- Left / Right arrow buttons
- Clickable dot indicators
- Auto-plays every 4 seconds (pause on hover)
- Touch / swipe support for mobile
- Keyboard arrow key navigation
- Slide counter (1 / 6)
- Graceful fallback if an image is missing

To change auto-play speed, edit `js/carousel.js`:
```js
const AUTO_DELAY = 4000; // milliseconds
```

To disable auto-play:
```js
const AUTO_PLAY = false;
```

---

## 🖨️ Export as PDF

1. Open `index.html` in **Chrome** or **Edge**
2. `Ctrl + P` → Destination: **Save as PDF**
3. Paper: **A4** · Margins: **None** · ✅ Background graphics
4. **Save**

Only the active carousel slide prints — rest are hidden.

---

## 🌐 GitHub Pages

After pushing:
1. Repo → **Settings → Pages**
2. Source: `main` branch · `/ (root)`
3. Live at: `https://<username>.github.io/<repo-name>/`

---

## 🎨 Customisation

All colours and fonts are CSS variables at the top of `css/style.css`:

```css
:root {
  --gold:       #b5882a;
  --espresso:   #2e1a0e;
  --ivory:      #faf6f0;
  --font-display: 'Cormorant Garamond', serif;
  --font-body:    'Jost', sans-serif;
  /* ... */
}
```

---

*Built with ❤️ — HTML · CSS · Vanilla JS, no frameworks.*
