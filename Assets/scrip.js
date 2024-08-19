// Memilih elemen dengan class .menu-bar dan .menu
const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

// Menambahkan event listener pada klik untuk toggle class menu-active
menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

// Memilih elemen dengan class .navbar
const navBar = document.querySelector(".navbar");

// Menambahkan event listener pada scroll untuk toggle class scrolling-active
window.addEventListener('scroll', () => {
  const windowPosition = window.scrollY > 0; // Memperbaiki typo
  navBar.classList.toggle("scrolling-active", windowPosition);
});
