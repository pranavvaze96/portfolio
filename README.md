# Pranav Vaze — Personal Portfolio

A two-page personal portfolio website built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no dependencies.

**Live site:** [pranavvaze96.github.io/portfolio](https://pranavvaze96.github.io/portfolio)

---

## Pages

- **`index.html`** — Main portfolio: Hero · About · Resume · Projects · Contact · Footer
- **`blog.html`** — Blog listing with a 3D circular gallery and individual post reader

---

## Features

- Light / dark theme toggle (persists via `localStorage`)
- Custom animated cursor — cyan dot + trailing ring, click burst effect (desktop only)
- Liquid glass navbar with backdrop blur
- Scroll-reveal animations (staggered fade-up via `IntersectionObserver`)
- Auto-scrolling skills marquee (pauses on hover, wraps to pill grid on mobile)
- 3D circular gallery on the blog page (scroll-driven rotation)
- Portrait tilt on hover (3D perspective transform)
- Sticky "Download CV" button (visible only when Resume section is in view)
- Responsive — mobile hamburger overlay, single-column layouts
- Accessible — skip link, `aria-*` attributes, focus styles, `prefers-reduced-motion` support

---

## File Structure

```
portfolio/
├── index.html          — Main portfolio page
├── blog.html           — Blog listing page
├── css/
│   ├── variables.css   — CSS custom properties (design tokens)
│   ├── base.css        — Reset, layout utilities, custom cursor
│   ├── animations.css  — Scroll-reveal, marquee keyframes
│   ├── components.css  — Navbar, buttons, cards, theme toggle
│   ├── sections.css    — Section-specific styles
│   └── blog.css        — Blog gallery and post styles
├── js/
│   ├── theme.js        — Theme toggle + localStorage persistence
│   ├── nav.js          — Scroll-spy, hamburger menu, nav blur
│   ├── animations.js   — Scroll-reveal, timeline cards, portrait tilt, sticky CV
│   ├── marquee.js      — Skills marquee auto-scroll
│   ├── blog.js         — Blog post data, 3D gallery, post reader
│   └── cursor.js       — Custom cursor dot + ring
└── assets/
    └── images/         — Portrait photos
```

---

## Design System

| Token | Light | Dark |
|---|---|---|
| `--bg-primary` | `#FFFFFF` | `#0F0F0F` |
| `--bg-surface` | `#F7F7F5` | `#1A1A1A` |
| `--text-primary` | `#111111` | `#F0F0F0` |
| `--text-muted` | `#888888` | `#666666` |
| `--accent` | `#06B6D4` | `#06B6D4` |

**Fonts:** DM Serif Display (headings) · Inter (body) — via Google Fonts

---

## Running Locally

No build step needed. Just open `index.html` in a browser, or use a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

---

## Deploying Updates

```bash
git add .
git commit -m "your message"
git push
```

GitHub Pages auto-deploys from the `main` branch.

---

## Contact

- **Email:** pranav.vaze5@gmail.com
- **LinkedIn:** [pranavv11](https://www.linkedin.com/in/pranavv11)
- **GitHub:** [pranavvaze96](https://github.com/pranavvaze96)
