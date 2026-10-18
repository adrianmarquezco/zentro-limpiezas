(function () {
  var header = document.getElementById('site-header');
  var bar = document.getElementById('cta-bar');
  if (header && !document.querySelector('.hero-section')) header.classList.add('is-scrolled');
  if (bar) document.body.classList.add('has-cta-bar');

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      if (header) header.classList.toggle('is-scrolled', y > 50);
      if (bar) bar.classList.toggle('translate-y-full', y <= 300);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  var revealSel = '[data-reveal],[data-reveal-left],[data-reveal-right],[data-reveal-stagger]';
  var revealNodes = document.querySelectorAll(revealSel);
  if (revealNodes.length) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealNodes.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealNodes.forEach(function (el) { observer.observe(el); });
    }
  }

  document.querySelectorAll('[data-faq]').forEach(function (item) {
    var trigger = item.querySelector('[data-faq-trigger]');
    var body = item.querySelector('[data-faq-body]');
    if (!trigger || !body) return;
    trigger.addEventListener('click', function () {
      trigger.setAttribute('aria-expanded', String(item.classList.toggle('is-open')));
    });
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });

  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    try {
      if (new URL(link.href).hostname !== location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    } catch (e) {}
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (r) { r.unregister(); });
    });
    if (window.caches) {
      caches.keys().then(function (keys) {
        keys.forEach(function (k) { if (k.indexOf('zentro-') === 0) caches.delete(k); });
      });
    }
  }

  var idle = window.requestIdleCallback || function (cb) { return setTimeout(cb, 2500); };
  idle(function () {
    if (window.matchMedia('(max-width: 767px)').matches || sessionStorage.getItem('ei')) return;
    if (location.pathname.indexOf('/legal/') !== -1) return;
    var gl = document.documentElement.lang === 'gl';
    document.addEventListener('mouseleave', function handler(e) {
      if (e.clientY > 0) return;
      sessionStorage.setItem('ei', '1');
      document.removeEventListener('mouseleave', handler);
      var d = document.createElement('div');
      d.id = 'ei-overlay';
      d.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(10,37,64,0.82);backdrop-filter:blur(8px);opacity:0;transition:opacity .25s';
      d.innerHTML = '<div style="background:#fff;border-radius:20px;padding:36px 32px;max-width:400px;width:90%;text-align:center;position:relative;box-shadow:0 30px 80px rgba(10,37,64,.35)">'
        + '<button onclick="document.getElementById(\'ei-overlay\').remove()" style="position:absolute;top:14px;right:16px;background:none;border:none;font-size:18px;color:#9CA3AF;cursor:pointer;line-height:1">✕</button>'
        + '<p style="font-size:36px;margin-bottom:12px">🧹</p>'
        + '<h3 style="font-family:Georgia,serif;font-size:21px;color:#0A2540;margin:0 0 8px">' + (gl ? 'Vaste sen pedir orzamento?' : '¿Te vas sin pedir presupuesto?') + '</h3>'
        + '<p style="color:#6B7280;font-size:13px;line-height:1.6;margin:0 0 24px">' + (gl ? 'É gratis, sen compromiso e respondemos en menos de 24h. O noso equipo leva 20 anos limpando en Ferrol e A Coruña.' : 'Es gratis, sin compromiso y respondemos en menos de 24h. Nuestro equipo lleva 20 años limpiando en Ferrol y A Coruña.') + '</p>'
        + '<div style="display:flex;flex-direction:column;gap:10px">'
        + '<a href="' + (gl ? '/gl/orzamento/' : '/presupuesto/') + '" style="display:block;background:#0A2540;color:#fff;padding:13px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none">' + (gl ? '→ Pedir orzamento gratis' : '→ Pedir presupuesto gratis') + '</a>'
        + '<a href="https://wa.me/34616054001?text=Hola%2C+me+gustar%C3%ADa+pedir+presupuesto" target="_blank" style="display:block;background:#25D366;color:#fff;padding:13px 24px;border-radius:50px;font-weight:600;font-size:14px;text-decoration:none">WhatsApp · 616 054 001</a>'
        + '</div>'
        + '<p style="color:#D1D5DB;font-size:11px;margin-top:16px;margin-bottom:0">' + (gl ? 'Sen compromisos · Pechamos cando queiras' : 'Sin compromisos · Cerramos cuando quieras') + '</p>'
        + '</div>';
      d.addEventListener('click', function (ev) { if (ev.target === d) d.remove(); });
      document.body.appendChild(d);
      requestAnimationFrame(function () { d.style.opacity = '1'; });
    });
  }, { timeout: 4000 });
})();
