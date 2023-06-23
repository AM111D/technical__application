(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-open__btn'),
    closeMenuBtn: document.querySelector('.header-close__btn'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.openMenuBtn.classList.toggle('is-hidden');
    refs.closeMenuBtn.classList.toggle('is-hidden');

    const openIcon = document.querySelector('.header-open__icon use');
    const closeIcon = document.querySelector('.header-close__icon use');

    if (
      openIcon.getAttribute('href') ===
      './images/symbol-defs.svg#icon-menu_40px'
    ) {
      openIcon.setAttribute('href', './images/symbol-defs.svg#icon-close_40px');
    } else {
      openIcon.setAttribute('href', './images/symbol-defs.svg#icon-menu_40px');
    }

    if (
      closeIcon.getAttribute('href') ===
      './images/symbol-defs.svg#icon-close_40px'
    ) {
      closeIcon.setAttribute('href', './images/symbol-defs.svg#icon-menu_40px');
    } else {
      closeIcon.setAttribute(
        'href',
        './images/symbol-defs.svg#icon-close_40px'
      );
    }
  }
})();
