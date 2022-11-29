const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const nava = document.querySelector("nav ul li");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  nav.classList.toggle("animasi-slide");
});

// menuToggle.addEventListener("click", function () {
//   nava.classList.toggle("slide");
//   //   data-aos="fade-up" data-aos-duration="1000"
// });
