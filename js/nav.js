/* ── Nav scroll blur ─────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Mobile menu ─────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const overlay   = document.getElementById('mobile-overlay');

function openMobileMenu() {
  overlay.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  overlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  overlay.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileMenu();
});

/* ── Smooth scroll ───────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id     = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMobileMenu();
  });
});

/* ── Scroll-spy ──────────────────────────────────────────────────── */
const navLinkEls = document.querySelectorAll('.nav-links a[data-section]');
const sectionIds = ['about', 'resume', 'projects', 'contact'];
const sectionEls = sectionIds.map(id => document.getElementById(id));

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkEls.forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-section') === id);
      });
    }
  });
}, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

sectionEls.forEach(el => { if (el) spyObserver.observe(el); });

/* ── Back to top ─────────────────────────────────────────────────── */
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
