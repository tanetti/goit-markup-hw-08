(() => {
  const refs = {
    allBtn: document.querySelector('[data-all-btn]'),
    webBtn: document.querySelector('[data-web-btn]'),
    appBtn: document.querySelector('[data-app-btn]'),
    designBtn: document.querySelector('[data-design-btn]'),
    marketingBtn: document.querySelector('[data-marketing-btn]'),

    webA: document.querySelector('[data-web-a]'),
    webB: document.querySelector('[data-web-b]'),

    designA: document.querySelector('[data-design-a]'),
    designB: document.querySelector('[data-design-b]'),

    appA: document.querySelector('[data-app-a]'),
    appB: document.querySelector('[data-app-b]'),
    appC: document.querySelector('[data-app-c]'),

    marketingA: document.querySelector('[data-marketing-a]'),
    marketingB: document.querySelector('[data-marketing-b]'),
  };

  refs.allBtn.addEventListener('click', toggleChecked_all);
  refs.webBtn.addEventListener('click', toggleChecked_web);
  refs.appBtn.addEventListener('click', toggleChecked_app);
  refs.designBtn.addEventListener('click', toggleChecked_design);
  refs.marketingBtn.addEventListener('click', toggleChecked_marketing);

  function toggleChecked_all() {
    if (refs.webA.classList.contains('gallery-list__item--hidden')) {
      refs.webA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.webB.classList.contains('gallery-list__item--hidden')) {
      refs.webB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.designA.classList.contains('gallery-list__item--hidden')) {
      refs.designA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.designB.classList.contains('gallery-list__item--hidden')) {
      refs.designB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.appA.classList.contains('gallery-list__item--hidden')) {
      refs.appA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appB.classList.contains('gallery-list__item--hidden')) {
      refs.appB.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appC.classList.contains('gallery-list__item--hidden')) {
      refs.appC.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.marketingA.classList.contains('gallery-list__item--hidden')) {
      refs.marketingA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.marketingB.classList.contains('gallery-list__item--hidden')) {
      refs.marketingB.classList.toggle('gallery-list__item--hidden');
    }

    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.allBtn.toggleAttribute('checked');
  }

  function toggleChecked_web() {
    if (refs.webA.classList.contains('gallery-list__item--hidden')) {
      refs.webA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.webB.classList.contains('gallery-list__item--hidden')) {
      refs.webB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.designA.classList.contains('gallery-list__item--hidden') === false) {
      refs.designA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.designB.classList.contains('gallery-list__item--hidden') === false) {
      refs.designB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.appA.classList.contains('gallery-list__item--hidden') === false) {
      refs.appA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appB.classList.contains('gallery-list__item--hidden') === false) {
      refs.appB.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appC.classList.contains('gallery-list__item--hidden') === false) {
      refs.appC.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.marketingA.classList.contains('gallery-list__item--hidden') === false) {
      refs.marketingA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.marketingB.classList.contains('gallery-list__item--hidden') === false) {
      refs.marketingB.classList.toggle('gallery-list__item--hidden');
    }

    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.webBtn.toggleAttribute('checked');
  }

  function toggleChecked_app() {
    if (refs.webA.classList.contains('gallery-list__item--hidden') === false) {
      refs.webA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.webB.classList.contains('gallery-list__item--hidden') === false) {
      refs.webB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.designA.classList.contains('gallery-list__item--hidden') === false) {
      refs.designA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.designB.classList.contains('gallery-list__item--hidden') === false) {
      refs.designB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.appA.classList.contains('gallery-list__item--hidden')) {
      refs.appA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appB.classList.contains('gallery-list__item--hidden')) {
      refs.appB.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appC.classList.contains('gallery-list__item--hidden')) {
      refs.appC.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.marketingA.classList.contains('gallery-list__item--hidden') === false) {
      refs.marketingA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.marketingB.classList.contains('gallery-list__item--hidden') === false) {
      refs.marketingB.classList.toggle('gallery-list__item--hidden');
    }

    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.appBtn.toggleAttribute('checked');
  }

  function toggleChecked_design() {
    if (refs.webA.classList.contains('gallery-list__item--hidden') === false) {
      refs.webA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.webB.classList.contains('gallery-list__item--hidden') === false) {
      refs.webB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.designA.classList.contains('gallery-list__item--hidden')) {
      refs.designA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.designB.classList.contains('gallery-list__item--hidden')) {
      refs.designB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.appA.classList.contains('gallery-list__item--hidden') === false) {
      refs.appA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appB.classList.contains('gallery-list__item--hidden') === false) {
      refs.appB.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appC.classList.contains('gallery-list__item--hidden') === false) {
      refs.appC.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.marketingA.classList.contains('gallery-list__item--hidden') === false) {
      refs.marketingA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.marketingB.classList.contains('gallery-list__item--hidden') === false) {
      refs.marketingB.classList.toggle('gallery-list__item--hidden');
    }

    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.designBtn.toggleAttribute('checked');
  }

  function toggleChecked_marketing() {
    if (refs.webA.classList.contains('gallery-list__item--hidden') === false) {
      refs.webA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.webB.classList.contains('gallery-list__item--hidden') === false) {
      refs.webB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.designA.classList.contains('gallery-list__item--hidden') === false) {
      refs.designA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.designB.classList.contains('gallery-list__item--hidden') === false) {
      refs.designB.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.appA.classList.contains('gallery-list__item--hidden') === false) {
      refs.appA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appB.classList.contains('gallery-list__item--hidden') === false) {
      refs.appB.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.appC.classList.contains('gallery-list__item--hidden') === false) {
      refs.appC.classList.toggle('gallery-list__item--hidden');
    }

    if (refs.marketingA.classList.contains('gallery-list__item--hidden')) {
      refs.marketingA.classList.toggle('gallery-list__item--hidden');
    }
    if (refs.marketingB.classList.contains('gallery-list__item--hidden')) {
      refs.marketingB.classList.toggle('gallery-list__item--hidden');
    }

    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.marketingBtn.toggleAttribute('checked');
  }
})();
