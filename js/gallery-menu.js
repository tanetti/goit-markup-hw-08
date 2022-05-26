(() => {
  const refs = {
    aBtn: document.querySelector('[a-btn]'),
    bBtn: document.querySelector('[b-btn]'),
    cBtn: document.querySelector('[c-btn]'),
    dBtn: document.querySelector('[d-btn]'),
    eBtn: document.querySelector('[e-btn]'),
  };

  refs.aBtn.addEventListener('click', toggleChecked_a);
  refs.bBtn.addEventListener('click', toggleChecked_b);
  refs.cBtn.addEventListener('click', toggleChecked_c);
  refs.dBtn.addEventListener('click', toggleChecked_d);
  refs.eBtn.addEventListener('click', toggleChecked_e);

  function toggleChecked_a() {
    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.aBtn.toggleAttribute('checked');
  }

  function toggleChecked_b() {
    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.bBtn.toggleAttribute('checked');
  }

  function toggleChecked_c() {
    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.cBtn.toggleAttribute('checked');
  }

  function toggleChecked_d() {
    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.dBtn.toggleAttribute('checked');
  }

  function toggleChecked_e() {
    checkedBtn = document.querySelector('[checked]');
    checkedBtn.toggleAttribute('checked');
    refs.eBtn.toggleAttribute('checked');
  }
})();
