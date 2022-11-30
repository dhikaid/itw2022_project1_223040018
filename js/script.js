// INPUT BTN

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const nava = document.querySelector("nav ul li");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// UL LI A

nav.addEventListener("click", function () {
  nav.classList.remove("slide");
  document.getElementById("checkbox").checked = false;
});
