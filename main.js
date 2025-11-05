(function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();