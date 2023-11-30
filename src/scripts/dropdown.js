// ===== responsive navbar
let navbarToggler = document.querySelector('#navbarToggler');
const navbarCollapse = document.querySelector('#navbarCollapse');

navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('navbarTogglerActive');
  navbarCollapse.classList.toggle('hidden');
});

//===== close navbar-collapse when a  clicked
document.querySelectorAll('#navbarCollapse ul li:not(.submenu-item) a').forEach((e) =>
  e.addEventListener('click', () => {
    navbarToggler.classList.remove('navbarTogglerActive');
    navbarCollapse.classList.add('hidden');
  })
);

// ===== Sub-menu
const submenuItems = document.querySelectorAll('.submenu-item');
submenuItems.forEach((el) => {
  el.querySelector('a').addEventListener('click', () => {
    el.querySelector('.submenu').classList.toggle('hidden');
  });
});
