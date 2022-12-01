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

new TypeIt("#jumbotron-bhadrika", {
  lifeLike: false,
  speed: 0,
  loop: true,
})
  .type("B")
  .pause(51)
  .type("h")
  .pause(112)
  .type("a")
  .pause(94)
  .type("d")
  .pause(214)
  .type("r")
  .pause(72)
  .type("i")
  .pause(148)
  .type("k")
  .pause(91)
  .type("a")
  .pause(88)
  .type(" ")
  .pause(121)
  .type("A")
  .pause(201)
  .type(".")
  .pause(2098)
  .delete(1)
  .pause(501)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(43)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(29)
  .delete(1)
  .pause(31)
  .delete(1)
  .pause(37)
  .delete(1)
  .pause(27)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(314)
  .type("D")
  .pause(260)
  .type("h")
  .pause(48)
  .type("i")
  .pause(210)
  .type("k")
  .pause(137)
  .type("a")
  .pause(335)
  .type(".")
  .pause(2011)
  .delete(1)
  .pause(512)
  .delete(1)
  .pause(31)
  .delete(1)
  .pause(29)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(29)
  .delete(1)
  .go();
