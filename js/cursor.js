/* Custom cursor — desktop (pointer: fine) only */
(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  /* ── Create elements ─────────────────────────────────────────────── */
  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot hidden';
  ring.className = 'cursor-ring hidden';
  document.body.append(dot, ring);

  /* ── State ───────────────────────────────────────────────────────── */
  let mouseX = -200, mouseY = -200;
  let ringX  = -200, ringY  = -200;
  let visible = false;

  /* ── Mouse tracking ──────────────────────────────────────────────── */
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!visible) {
      visible = true;
      // Snap ring to dot position on first appearance
      ringX = mouseX;
      ringY = mouseY;
      dot.classList.remove('hidden');
      ring.classList.remove('hidden');
    }
  });

  document.addEventListener('mouseleave', () => {
    dot.classList.add('hidden');
    ring.classList.add('hidden');
    visible = false;
  });

  document.addEventListener('mouseenter', () => {
    if (visible) {
      dot.classList.remove('hidden');
      ring.classList.remove('hidden');
    }
  });

  /* ── Hover state on interactive elements ─────────────────────────── */
  const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [tabindex]';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(INTERACTIVE)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(INTERACTIVE)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  /* ── Click burst ─────────────────────────────────────────────────── */
  document.addEventListener('mousedown', () => {
    ring.classList.remove('burst');
    void ring.offsetWidth; // force reflow so animation restarts
    ring.classList.add('burst');
  });

  ring.addEventListener('animationend', () => {
    ring.classList.remove('burst');
  });

  /* ── Animation loop (dot exact, ring lerps) ──────────────────────── */
  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    // Dot follows mouse exactly
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';

    // Ring trails with smooth lerp
    ringX = lerp(ringX, mouseX, 0.18);
    ringY = lerp(ringY, mouseY, 0.18);
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
