document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href') || '';
  // tel: y mailto: no se tocan
  if (href.startsWith('tel:') || href.startsWith('mailto:')) return;
  // Solo si el hostname es externo
  try {
    const url = new URL(href, window.location.href);
    if (url.hostname && url.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  } catch {}
});
