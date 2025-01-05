const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav_bar');
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});
