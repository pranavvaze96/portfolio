/* ── TextScramble ────────────────────────────────────────────────── */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#';
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.resolve = () => {};
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => { this.resolve = resolve; });
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to   = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end   = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output  = '';
    let complete = 0;
    for (let i = 0; i < this.queue.length; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="scramble-dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

/* ── Raining characters background ──────────────────────────────── */
function initHeroRain() {
  const container = document.getElementById('hero-rain');
  if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  const charCount = 120;
  const characters = [];

  for (let i = 0; i < charCount; i++) {
    const span = document.createElement('span');
    const x     = Math.random() * 100;
    const y     = Math.random() * 100;
    const speed = 0.025 + Math.random() * 0.055;
    span.textContent = allChars[Math.floor(Math.random() * allChars.length)];
    span.className   = 'rain-char';
    span.style.left  = x + '%';
    span.style.top   = y + '%';
    container.appendChild(span);
    characters.push({ el: span, x, y, speed });
  }

  // Animate positions with rAF
  (function updatePositions() {
    for (const char of characters) {
      char.y += char.speed;
      if (char.y >= 105) {
        char.y     = -5;
        char.x     = Math.random() * 100;
        char.el.textContent = allChars[Math.floor(Math.random() * allChars.length)];
        char.el.style.left  = char.x + '%';
      }
      char.el.style.top = char.y + '%';
    }
    requestAnimationFrame(updatePositions);
  })();

  // Flicker chars to accent color — fewer/slower in light mode, lively in dark mode
  let activeSet = new Set();
  function flickerTick() {
    const isLight = document.documentElement.getAttribute('data-theme') !== 'dark';
    activeSet.forEach(i => characters[i]?.el.classList.remove('rain-char--active'));
    activeSet = new Set();
    const count = isLight ? 1 + Math.floor(Math.random() * 2) : 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * characters.length);
      characters[idx].el.classList.add('rain-char--active');
      activeSet.add(idx);
    }
    setTimeout(flickerTick, isLight ? 450 : 50);
  }
  flickerTick();
}

/* ── Scrambled hero label ────────────────────────────────────────── */
function initHeroScramble() {
  const el = document.getElementById('hero-label');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const scrambler = new TextScramble(el);
  const phrases = [
    "HEY — I'M PRANAV",
    'PRODUCT MANAGER',
    'AI PRODUCT BUILDER',
    'BASED IN PUNE, INDIA',
    "HEY — I'M PRANAV",
  ];

  let counter = 0;
  function next() {
    scrambler.setText(phrases[counter]).then(() => {
      setTimeout(next, 2600);
    });
    counter = (counter + 1) % phrases.length;
  }

  // Delay start until the reveal fade-in has finished
  setTimeout(next, 1400);
}

/* ── Boot ────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeroRain();
  initHeroScramble();
});
