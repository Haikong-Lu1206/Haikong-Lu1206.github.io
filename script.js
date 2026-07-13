(() => {
  const root = document.documentElement;
  const languageToggle = document.querySelector('[data-language-toggle]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const header = document.querySelector('[data-header]');
  const year = document.querySelector('[data-current-year]');

  const supportedLanguages = ['en', 'zh'];

  const getInitialLanguage = () => {
    const storedLanguage = window.localStorage.getItem('haikong-site-language');
    if (supportedLanguages.includes(storedLanguage)) return storedLanguage;
    return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  };

  const setLanguage = (language) => {
    const nextLanguage = supportedLanguages.includes(language) ? language : 'en';
    root.dataset.language = nextLanguage;
    root.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en';
    document.title = nextLanguage === 'zh'
      ? 'Haikong Lu — 本科生研究助理'
      : 'Haikong Lu — Undergraduate Researcher';
    window.localStorage.setItem('haikong-site-language', nextLanguage);
    languageToggle?.setAttribute(
      'aria-label',
      nextLanguage === 'en' ? '切换到中文' : 'Switch to English'
    );
  };

  const closeMenu = () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  setLanguage(getInitialLanguage());

  languageToggle?.addEventListener('click', () => {
    setLanguage(root.dataset.language === 'en' ? 'zh' : 'en');
  });

  menuToggle?.addEventListener('click', () => {
    const shouldOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(shouldOpen));
    mobileMenu?.classList.toggle('is-open', shouldOpen);
    document.body.classList.toggle('menu-open', shouldOpen);
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });

  const updateHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (year) year.textContent = String(new Date().getFullYear());
})();
