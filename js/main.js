const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// Close menu when click link
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});