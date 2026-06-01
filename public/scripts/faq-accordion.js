document.querySelectorAll('[data-faq]').forEach(item => {
  const trigger = item.querySelector('[data-faq-trigger]');
  const body = item.querySelector('[data-faq-body]');
  if (!trigger || !body) return;

  trigger.addEventListener('click', () => {
    const isOpen = item.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });

  trigger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger.click(); }
  });
});
