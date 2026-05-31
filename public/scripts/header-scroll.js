const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 50);
}, { passive: true });
// El header empieza siempre con fondo (para páginas internas sin hero)
if (!document.querySelector('.hero-section')) {
  header?.classList.add('is-scrolled');
}
