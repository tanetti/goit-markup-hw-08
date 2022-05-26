(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.menuBtn.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.menuBtn.classList.toggle('is-open');
    refs.menu.classList.toggle('is-open');

    document.body.classList.toggle('mobile-menu-is-open');
  });
})();
