# CLAUDE.md — Personal Portfolio Website
> Paste this file at the start of any Claude conversation to give full project context.
> Claude will use this as the single source of truth for all design, content, and build decisions.

---

## Project Overview

Build a two-page personal portfolio website. The design language is inspired by **dousanmiao.com** (editorial-minimal, monochrome, large typography) and **nataliatimea.com/cv** (scrollable CV/resume layout).

**Page 1** (`index.html` or `/`): Sections — Hero → About → Resume → Projects → Contact → Footer
**Page 2** (`blog.html` or `/blog`): Dedicated blog listing page + individual post pages

**Tech stack preference:** Plain HTML + CSS + Vanilla JS (no framework required). If using a framework, prefer **Next.js** with Tailwind CSS. Do NOT use Bootstrap or heavy UI libraries.

---

## Owner / Placeholder Info
> Replace all `[BRACKETS]` with your real information before deploying.

- **Name:** `[YOUR FULL NAME]`
- **Role/Title:** `[e.g., Full Stack Engineer / Product Designer / ML Engineer]`
- **One-liner:** `Hey – I'm [Name]. [Current role @ Company]. Previously at [Company].`
- **Tagline (H1):** `[I build / design / engineer] [things/products] for [impact/people/scale].`
- **Location:** `[City, Country]`
- **Email:** `[your@email.com]`
- **LinkedIn:** `[https://linkedin.com/in/yourhandle]`
- **GitHub:** `[https://github.com/yourhandle]`
- **CV PDF URL:** `[Dropbox / Google Drive / own domain link]`

---

## Design System

### Color Tokens (CSS Custom Properties)

```css
:root {
  --bg-primary:    #FFFFFF;
  --bg-surface:    #F7F7F5;
  --bg-contact:    #111111;
  --text-primary:  #111111;
  --text-muted:    #888888;
  --border:        #E0E0E0;
  --tag-bg:        #EBEBEB;
  --tag-text:      #555555;
  --footer-bg:     #111111;
  --footer-text:   #FFFFFF;
  --card-bg:       #FFFFFF;
  --shadow-sm:     0 2px 12px rgba(0,0,0,0.06);
  --shadow-md:     0 8px 32px rgba(0,0,0,0.12);
  --radius-card:   14px;
  --radius-pill:   999px;
  --transition:    0.3s ease;
}

[data-theme="dark"] {
  --bg-primary:    #0F0F0F;
  --bg-surface:    #1A1A1A;
  --bg-contact:    #080808;
  --text-primary:  #F0F0F0;
  --text-muted:    #666666;
  --border:        #2A2A2A;
  --tag-bg:        #222222;
  --tag-text:      #AAAAAA;
  --footer-bg:     #0A0A0A;
  --footer-text:   #F0F0F0;
  --card-bg:       #1A1A1A;
  --shadow-sm:     0 2px 12px rgba(0,0,0,0.3);
  --shadow-md:     0 8px 32px rgba(0,0,0,0.5);
}
```

### Typography

```css
/* Import via Google Fonts or self-host */
/* Headings: DM Serif Display or Playfair Display (editorial feel) */
/* Body: Inter or DM Sans */

--font-heading: 'DM Serif Display', Georgia, serif;
--font-body:    'Inter', system-ui, sans-serif;

/* Scale */
--text-hero:    clamp(64px, 10vw, 120px);
--text-h2:      clamp(36px, 5vw, 60px);
--text-h3:      clamp(20px, 2.5vw, 26px);
--text-body:    18px;
--text-small:   14px;
--text-label:   11px;  /* ALL CAPS, letter-spacing: 0.12em */
```

### Grid & Spacing

```
Max content width:  1280px, centered with auto margins
Horizontal padding: clamp(20px, 5vw, 80px)
Section padding:    clamp(80px, 12vw, 160px) top and bottom
Column gap:         32px
Card gap:           24px
```

---

## File / Folder Structure

```
portfolio/
├── index.html          ← Page 1: main portfolio
├── blog.html           ← Page 2: blog listing
├── blog/
│   └── post-slug.html  ← Individual blog posts
├── css/
│   ├── main.css        ← all styles + CSS variables
│   └── blog.css        ← blog-specific styles
├── js/
│   ├── main.js         ← theme toggle, scroll-spy, animations
│   └── marquee.js      ← horizontal scroll marquees
├── assets/
│   ├── images/         ← project thumbnails, portrait
│   └── cv.pdf          ← downloadable CV
└── CLAUDE.md           ← this file
```

---

## Component Specifications

### 1. NAVBAR (shared across all pages)

```
Height:        60px, sticky (position: sticky, top: 0)
Background:    var(--bg-primary) with backdrop-filter: blur(12px) on scroll
z-index:       100
Border-bottom: 1px solid var(--border), appears only on scroll

Layout:
  LEFT  → Name wordmark (small-caps, links to #top or index.html)
  CENTER → [About] [Resume] [Projects] [Contact] (anchor links, scroll-spy)
  RIGHT  → [☀/🌙 theme toggle] [Download CV ↓]

Active nav link: color shifts to var(--text-primary), tiny underline dot
Inactive nav link: var(--text-muted)

Mobile (< 768px):
  → Hamburger button (right side)
  → Full-screen overlay on open
  → Nav links as large centered text (32px)
  → Theme toggle visible in overlay
```

**JavaScript needed:**
- Scroll-spy: IntersectionObserver on each section, update active nav link
- Backdrop blur trigger: add class `.scrolled` to nav after 60px scroll
- Theme toggle: toggle `[data-theme="dark"]` on `<html>`, persist to `localStorage`
- Mobile menu: toggle `.open` class on overlay

---

### 2. HERO SECTION (`#hero`)

```
Height:      100vh minimum
Background:  var(--bg-primary)
Layout:      Two columns on desktop — 60% text / 40% empty or portrait

Content (top to bottom, left column):
  1. [small label]  "HEY — I'M [NAME]"  → 11px, ALL CAPS, var(--text-muted)
  2. [sub-intro]    One-liner sentence   → 18px, var(--text-muted)
  3. [H1 headline]  Bold tagline         → var(--text-hero), font-heading
  4. [location pill] "📍 [CITY, COUNTRY]" → pill tag, var(--tag-bg)
  5. [LinkedIn row]  LinkedIn icon + handle → small, var(--text-muted)
  6. [CTA row]       "Let's talk" label + "Drop me a line →" link

Bottom of hero: subtle "SCROLL ↓" label, animates with a bounce
```

**Animations:**
- On load: staggered fade-in-up for each element (100ms delay between)
- On scroll out: hero content fades to 0.3 opacity as user scrolls

---

### 3. ABOUT SECTION (`#about`)

```
Background:  var(--bg-surface)
Layout:      Two columns — 65% bio / 35% portrait

LEFT COLUMN:
  - Section label: "About" (11px, ALL CAPS)
  - Bio paragraph 1: current role + impact (~3 sentences, 20px body)
  - Bio paragraph 2: past experience + personal note (~2 sentences)

RIGHT COLUMN:
  - Portrait photo (border-radius: var(--radius-card))
  - Caption below: italic, var(--text-muted), 13px

BELOW (full-width):
  - "What I'm known for" label
  - Auto-scrolling horizontal marquee of skills
  - Items separated by "·"
  - Pauses on hover
  - Speed: 40s loop
  - Example items: "System Design · Frontend Dev · APIs · Open Source · 
    Technical Writing · Architecture · Performance · Leadership"

Mobile: stack columns, portrait comes after bio
```

---

### 4. RESUME SECTION (`#resume`)

```
Background:  var(--bg-primary)
Max-width:   860px centered (narrower for editorial feel)
Reference:   nataliatimea.com/cv — scrollable, prose-based, no bullets
```

**Sub-sections in order:**

#### 4a. Professional Summary (optional 3–4 sentence overview)

#### 4b. Work Experience
For EACH role:
```
[YEAR RANGE]          → 11px, ALL CAPS, var(--text-muted), float left or above
[JOB TITLE]           → 20px, semi-bold, var(--text-primary)
[COMPANY NAME]        → 16px, regular, linked externally (↗ icon)
[DESCRIPTION]         → 1–3 sentence paragraph, 16px, line-height 1.75
                         NO bullet points. Prose only.
────────────────────  → thin border-bottom between roles, var(--border)
```

#### 4c. Clients / Recognition Strip (horizontal marquee)
```
Auto-scrolling ticker, 14px text, var(--text-muted)
Items: notable companies, publications, recognitions
Speed: 30s loop, pause on hover
```

#### 4d. Education
```
[DEGREE NAME]         → 18px, semi-bold
[INSTITUTION]         → 16px, linked
[YEAR]                → 11px, muted
[DESCRIPTION]         → 2-sentence prose
```

#### 4e. Tools & Stack
```
Comma-separated list OR pill chips
NO percentage bars or star ratings
Example: React, TypeScript, Node.js, PostgreSQL, AWS, Figma, Docker
```

#### 4f. Features / Press (optional)
```
Linked list of external mentions, talks, open source
11px, var(--text-muted), with ↗ icon
```

**Sticky Download CV button:**
```css
/* Appears only when #resume section is in viewport */
.sticky-cv-btn {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 50;
  display: none;  /* shown via JS when resume in view */
}
```
JS: IntersectionObserver on `#resume`, toggle `.visible` on `.sticky-cv-btn`

---

### 5. PROJECTS SECTION (`#projects`)

```
Background:    var(--bg-surface)
Section label: "Selected Works" (11px, ALL CAPS)
Sub-label:     Year range e.g. "'22–'25" (muted)
Grid:          2-column on desktop, 1-column on mobile
Gap:           24px
```

**Project Card:**
```html
<article class="project-card">
  <div class="card-image">
    <img src="..." alt="...">
    <span class="card-badge">SHIPPED</span>   <!-- or CONCEPT / IN PROGRESS -->
    <span class="card-arrow">→</span>          <!-- or 🔒 for private -->
  </div>
  <div class="card-body">
    <h3 class="card-title">[Project Name]</h3>
    <p class="card-desc">[One-line description]</p>
    <div class="card-tags">
      <span class="tag">React</span>
      <span class="tag">Node.js</span>
    </div>
  </div>
</article>
```

**Card states:**
- `SHIPPED` badge: background #D1FAE5, color #065F46 (green tint)
- `CONCEPT` badge: background var(--tag-bg), color var(--text-muted)
- `LOCKED` / private: replace arrow with 🔒, card is not clickable, lower opacity on hover

**Hover behavior:**
```css
.project-card:hover .card-image img { transform: scale(1.03); }
.project-card:hover { box-shadow: var(--shadow-md); }
/* transition: var(--transition) */
```

---

### 6. CONTACT SECTION (`#contact`)

```
Background:  var(--bg-contact)  ← always dark (#111)
Text color:  var(--footer-text) ← always white
Padding:     clamp(80px, 12vw, 160px)

Content:
  1. Small label:  "Let's talk"  → 11px, ALL CAPS, opacity: 0.5
  2. Main CTA:     "Drop me a line →"  → H2 size, bold, white, mailto: link
                   Arrow slides 6px right on hover
  3. Email text:   "[your@email.com]" displayed as plain text below
  4. Social row:   LinkedIn · GitHub · Twitter/X  (icon + label, opacity 0.7→1 hover)
  5. Optional:     3-field contact form (Name, Email, Message + Send button)
```

---

### 7. FOOTER

```
Background:  var(--footer-bg)  ← always dark
Text color:  var(--footer-text)
Height:      ~110px
Padding:     24px horizontal

ROW 1:
  LEFT   → [YOUR NAME] · © [YEAR]
  CENTER → About · Resume · Projects · Contact · Blog  (anchor links)
  RIGHT  → LinkedIn ↗  GitHub ↗  Twitter/X ↗

ROW 2:
  LEFT   → "Made with [coffee/❤️/code] · [City, Country]"
  RIGHT  → "↑ Back to top" (smooth scrolls to top)

Mobile: center-aligned single column stack
```

---

## Page 2 — Blog (`blog.html`)

```
Navbar:      Same as Page 1, but LEFT side shows "← [YOUR NAME]" back link
             Center nav: Blog  (no other anchor links needed)

Hero:
  H1: "Blog" or "Writing" or "Notes"  → large type
  Sub: One sentence about what you write  → muted

Filter Bar:
  Pills: [All] [Design] [Engineering] [Thoughts] [Notes]
  Active pill: filled dark background
  Inactive: ghost border

Blog Grid:
  3-column on desktop, 2 on tablet, 1 on mobile
  Each card: Category tag → Title → Date → 2-line excerpt → "Read →"
  No required images (text-first)
  Optional: first card is a "featured" wide card spanning full width
```

---

## JavaScript Behaviors Summary

| Behavior | Trigger | Implementation |
|---|---|---|
| Theme toggle | Click ☀/🌙 button | Toggle `[data-theme="dark"]` on `<html>`, save to `localStorage` |
| Theme on load | Page load | Read `localStorage.theme`, apply before paint |
| Scroll-spy nav | Scroll | `IntersectionObserver` on each `section[id]` |
| Nav backdrop blur | Scroll > 60px | Add `.scrolled` class to `<nav>` |
| Scroll-reveal | Element enters viewport | `IntersectionObserver`, add `.visible` class (fade-up) |
| Staggered card reveal | Cards enter viewport | `--delay: Nms` CSS custom property per card |
| Skills marquee | Auto | CSS animation `@keyframes scroll-left`, pause on hover |
| Sticky CV button | `#resume` in viewport | `IntersectionObserver`, toggle `.visible` on `.sticky-cv-btn` |
| Mobile menu | Hamburger click | Toggle `.open` on overlay, lock body scroll |
| Smooth scroll | Anchor link click | `scrollIntoView({ behavior: 'smooth' })` or CSS `scroll-behavior: smooth` |
| Blog filter | Filter pill click | Toggle `.hidden` on cards based on `data-category` attribute |

---

## Scroll-Reveal Animation (reusable)

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: var(--delay, 0ms);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target); // animate once
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 80}ms`);
  observer.observe(el);
});
```

---

## Marquee (Auto-scroll Ticker)

```css
.marquee-track {
  display: flex;
  gap: 48px;
  animation: marquee-scroll 40s linear infinite;
  white-space: nowrap;
}
.marquee-track:hover {
  animation-play-state: paused;
}
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

> Duplicate the list items in HTML so the loop is seamless (the animation only moves 50%).

---

## Responsive Breakpoints

```css
/* Mobile first */
/* Tablet */
@media (min-width: 768px)  { ... }
/* Desktop */
@media (min-width: 1024px) { ... }
/* Wide */
@media (min-width: 1280px) { ... }
```

Key responsive behaviors:
- Hero: 2-col → 1-col (portrait hidden on mobile)
- About: 2-col → 1-col (portrait stacks below text)
- Resume: stays single column, date floats above title on mobile
- Projects: 2-col → 1-col
- Footer: 3-col → single-column centered
- Navbar: full nav → hamburger overlay

---

## Accessibility Checklist

- [ ] All images have `alt` text
- [ ] Color contrast ratio ≥ 4.5:1 for normal text
- [ ] Focus styles visible on all interactive elements
- [ ] Skip-to-content link at top of page
- [ ] `aria-label` on icon-only buttons (theme toggle, social icons)
- [ ] Hamburger button: `aria-expanded` toggles with menu state
- [ ] `prefers-reduced-motion` media query: disable marquee + scroll animations
- [ ] Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Tab order follows visual reading order

```css
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

---

## How to Use This File with Claude

When starting a new Claude chat to build this site, begin with:

```
I'm building a personal portfolio website. Here is my full project spec in CLAUDE.md:
[paste entire contents of this file]

Now please [YOUR REQUEST — e.g.:
  "build the complete index.html with all sections"
  "build just the navbar component"
  "build the resume section matching the nataliatimea.com/cv style"
  "add the dark/light mode toggle"
  "build the blog page"
  "make the site fully responsive for mobile"
]
```

### Suggested build order (ask Claude one step at a time):

1. `Build the base HTML structure and CSS variable system from CLAUDE.md`
2. `Build the Navbar with scroll-spy and theme toggle`
3. `Build the Hero section`
4. `Build the About section with the skills marquee`
5. `Build the Resume section with scrollable nataliatimea-style layout`
6. `Build the Projects section with card grid`
7. `Build the Contact section and Footer`
8. `Add all scroll-reveal animations and sticky CV button`
9. `Make everything fully responsive for mobile`
10. `Build the Blog page (blog.html)`
11. `Review and polish — check accessibility, transitions, dark mode`

---

## Content Placeholders to Fill In

Before asking Claude to build, optionally fill in these placeholders directly in this file:

```
NAME:         [Your Full Name]
ROLE:         [Your Title]
TAGLINE:      [Your Hero H1]
ONE_LINER:    [Your 1–2 sentence intro]
LOCATION:     [City, Country]
EMAIL:        [your@email.com]
LINKEDIN:     [URL]
GITHUB:       [URL]
CV_URL:       [PDF URL]

EXPERIENCE_1:
  YEARS:      2023–Present
  TITLE:      [Job Title]
  COMPANY:    [Company]
  DESC:       [Prose description 1–3 sentences]

EXPERIENCE_2:
  YEARS:      2020–2023
  TITLE:      [Job Title]
  COMPANY:    [Company]
  DESC:       [Prose description]

EDUCATION:
  DEGREE:     [Degree]
  SCHOOL:     [University]
  YEAR:       [Year]
  DESC:       [What you studied / notable work]

SKILLS:       React, TypeScript, Node.js, Python, PostgreSQL, AWS, Figma, ...

PROJECT_1:
  TITLE:      [Project Name]
  DESC:       [One-line description]
  STATUS:     SHIPPED / CONCEPT / IN PROGRESS
  TAGS:       React, Node.js
  URL:        [Link or PRIVATE]
  IMAGE:      assets/images/project1.png

PROJECT_2:
  TITLE:      [Project Name]
  ...
```

---

*CLAUDE.md · Personal Portfolio · Last updated April 2026*
*Design references: dousanmiao.com · nataliatimea.com/cv*