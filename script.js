(() => {
  const header = document.querySelector('[data-header]');
  const year = document.querySelector('[data-current-year]');

  const updateHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  if (year) year.textContent = String(new Date().getFullYear());
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
})();
