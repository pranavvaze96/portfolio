/* ── Scroll reveal ───────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* ── Hero scroll fade ────────────────────────────────────────────── */
const heroContent = document.getElementById('hero-content');
const hero        = document.getElementById('hero');

if (heroContent && hero) {
  window.addEventListener('scroll', () => {
    const heroH   = hero.offsetHeight;
    const scrolled = window.scrollY;
    if (scrolled < heroH) {
      heroContent.style.opacity = Math.max(0.3, 1 - (scrolled / heroH) * 1.2);
    }
  }, { passive: true });
}

/* ── Resume timeline cards (staggered, slide from left) ─────────── */
const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.resume-section').forEach(section => {
  section.querySelectorAll('.role-item, .edu-item').forEach((card, i) => {
    card.style.setProperty('--delay', `${i * 100}ms`);
    timelineObserver.observe(card);
  });
});

/* ── Resume card collapse/expand ────────────────────────────────── */
function toggleCard(cardEl) {
  const expanded = cardEl.getAttribute('data-expanded') !== 'false';
  cardEl.setAttribute('data-expanded', expanded ? 'false' : 'true');
  const header = cardEl.querySelector('.role-header, .edu-header');
  if (header) header.setAttribute('aria-expanded', String(!expanded));
}

document.querySelectorAll('.role-header, .edu-header').forEach(header => {
  const card = header.closest('.role-item, .edu-item');
  if (!card) return;

  header.addEventListener('click', () => toggleCard(card));
  header.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCard(card);
    }
  });
});

/* ── Portrait tilt on hover ──────────────────────────────────────── */
(function () {
  const MAX_TILT = 12; // degrees

  document.querySelectorAll('.hero-portrait, .about-portrait').forEach(el => {
    el.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';
    el.style.willChange = 'transform';

    el.addEventListener('mousemove', e => {
      const rect   = el.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2); // –1 … +1
      const dy     = (e.clientY - cy) / (rect.height / 2); // –1 … +1
      const rotX   = -dy * MAX_TILT; // tilt up/down
      const rotY   =  dx * MAX_TILT; // tilt left/right

      el.style.transform    = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
      el.style.boxShadow    = `${-rotY * 1.5}px ${rotX * 1.5}px 32px rgba(6,182,212,0.18)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transition   = 'transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.55s ease';
      el.style.transform    = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
      el.style.boxShadow    = '';
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';
    });
  });
})();

/* ── Sticky CV button ────────────────────────────────────────────── */
const stickyCv      = document.getElementById('sticky-cv');
const resumeSection = document.getElementById('resume');

if (stickyCv && resumeSection) {
  const cvObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      stickyCv.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.1 });
  cvObserver.observe(resumeSection);
}
