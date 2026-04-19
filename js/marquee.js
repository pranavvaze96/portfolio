/* ── Skills marquee: reduced-motion guard ───────────────────────────── */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const skillsTrack = document.querySelector('.marquee-track');
  if (skillsTrack) skillsTrack.style.animationPlayState = 'paused';
}

/* ── Skills marquee: hover-zone speed control ───────────────────────── */
(function () {
  const wrapper   = document.querySelector('.marquee-wrapper');
  const track     = wrapper && wrapper.querySelector('.marquee-track');
  const zoneLeft  = wrapper && wrapper.querySelector('.marquee-zone--left');
  const zoneRight = wrapper && wrapper.querySelector('.marquee-zone--right');
  if (!track || !zoneLeft || !zoneRight) return;

  const NORMAL = 25;
  const FAST   = 6;

  function set(duration, direction) {
    track.style.animationDuration  = `${duration}s`;
    track.style.animationDirection = direction;
  }
  function reset() { set(NORMAL, 'normal'); }

  zoneRight.addEventListener('mouseenter', () => set(FAST, 'normal'));
  zoneRight.addEventListener('mouseleave', reset);
  zoneLeft.addEventListener('mouseenter',  () => set(FAST, 'reverse'));
  zoneLeft.addEventListener('mouseleave',  reset);
})();

/* ── Blog card marquee: auto-scroll + mouse drag ────────────────────── */
(function () {
  const wrapper = document.querySelector('.blog-marquee-wrapper');
  const track   = wrapper && wrapper.querySelector('.blog-marquee-track');
  if (!wrapper || !track) return;

  // Only run on desktop (mobile shows static grid)
  if (window.matchMedia('(max-width: 767px)').matches) return;

  const AUTO_SPEED = 0.6; // px per frame
  let isDragging   = false;
  let dragStartX   = 0;
  let dragStartScroll = 0;
  let userPaused   = false; // true while hovering (not dragging)

  // Auto-scroll loop — seamless loop using duplicate card set
  function tick() {
    if (!isDragging && !userPaused) {
      wrapper.scrollLeft += AUTO_SPEED;
      // When we've scrolled through the first set, snap back to start
      const half = track.scrollWidth / 2;
      if (wrapper.scrollLeft >= half) {
        wrapper.scrollLeft -= half;
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // Pause auto-scroll on hover (so drag feels intentional)
  wrapper.addEventListener('mouseenter', () => { userPaused = true; });
  wrapper.addEventListener('mouseleave', () => {
    if (!isDragging) userPaused = false;
  });

  // Mouse drag
  wrapper.addEventListener('mousedown', e => {
    isDragging     = true;
    dragStartX     = e.pageX;
    dragStartScroll = wrapper.scrollLeft;
    wrapper.classList.add('is-dragging');
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = dragStartX - e.pageX;
    wrapper.scrollLeft = dragStartScroll + dx;

    // Seamless loop during drag too
    const half = track.scrollWidth / 2;
    if (wrapper.scrollLeft >= half) wrapper.scrollLeft -= half;
    if (wrapper.scrollLeft < 0)    wrapper.scrollLeft += half;
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    userPaused = false;
    wrapper.classList.remove('is-dragging');
  });

  // Prevent link navigation on drag (only fire click if no drag occurred)
  wrapper.addEventListener('click', e => {
    if (Math.abs(wrapper.scrollLeft - dragStartScroll) > 4) {
      e.preventDefault();
    }
  }, true);
})();
