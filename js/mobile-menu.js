(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menuBtn.classList.toggle('is-open');
    refs.menu.classList.toggle('is-open');
  }
})();