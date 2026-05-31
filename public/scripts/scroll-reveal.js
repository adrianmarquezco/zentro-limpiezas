const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('[data-reveal],[data-reveal-left],[data-reveal-right],[data-reveal-stagger]').forEach(el => observer.observe(el));
