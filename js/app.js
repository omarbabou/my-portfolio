/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
const body = document.querySelector('body');
const navigation = document.querySelector('.icons');

// --------------------MOBILE-MENU--------------------------

navigation.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

const menuLink = document.querySelectorAll('.ul-link');

menuLink.forEach((e) =>
  e.addEventListener('click', () => {
    body.classList.remove('open-menu');
  })
);
