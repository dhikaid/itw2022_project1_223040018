// LOAD
// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("html").style.overflowY = "hidden";
//     document.querySelector("body").style.visibility = "hidden";
//     document.querySelector(".load-page").style.visibility = "visible";
//   } else {
//     document.querySelector(".load-page").style.display = "none";
//     document.querySelector("body").style.visibility = "visible";
//     document.querySelector("html").style.overflowY = "scroll";
//   }
// };

window.addEventListener("load", (event) => {
  document.querySelector("html").style.scrollBehavior = "initial";
  window.scrollTo(0, 0);
  document.querySelector("html").style.overflowY = "hidden";
  document.querySelector("body").style.visibility = "hidden";
  document.querySelector(".load-page").style.visibility = "visible";
  // kirim ip
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.ip);
      discord_message(
        2,
        "Seseorang mengunjungi website anda!",
        "LINK :\n" +
          window.location.href +
          "\nIP :\n" +
          data.ip +
          "\nKOTA :\n" +
          data.city +
          "\nISP :\n" +
          data.org +
          "\nDEVICE :\n" +
          navigator.userAgent
      );
    });

  setTimeout(function () {
    stopLoad();
  }, 2000);

  setTimeout(function () {
    document.querySelector(".load-page").style.display = "none";
    document.querySelector("html").style.scrollBehavior = "smooth";
    document.querySelector("body").style.visibility = "visible";
    document.querySelector("html").style.overflowY = "scroll";
  }, 2200);
});

function stopLoad() {
  var loadPage = document.querySelector(".load-page");
  var fadeEffect = setInterval(function () {
    if (!loadPage.style.opacity) {
      loadPage.style.opacity = 1;
    }
    if (loadPage.style.opacity > 0) {
      loadPage.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 20);
}

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

// CONTACT

const formContact = document.forms["contact-form"];

const btnKirim = document.getElementById("kirim_contact");
const namaKontak = document.getElementById("nama_contact");
const emailKontak = document.getElementById("email_contact");
const pesanKontak = document.getElementById("pesan_contact");
const successAlert = document.getElementById("alert-success");

// nama kontak paksa capital
namaKontak.addEventListener("input", function () {
  console.log(namaKontak.value.toUpperCase());
  namaKontak.value = namaKontak.value.toUpperCase();
});

formContact.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!namaKontak.value || !emailKontak.value || !pesanKontak.value) {
    console.log("NO INPUT");
  } else {
    btnKirim.value = "Loading...";
    btnKirim.disabled = true;
    namaKontak.disabled = true;
    emailKontak.disabled = true;
    pesanKontak.disabled = true;

    var discord = discord_message(
      1,
      namaKontak.value + " | " + emailKontak.value,
      pesanKontak.value
    );

    if (discord == "OK!") {
      setTimeout(successDiscord, 2000);
    }
  }
});

// SEND TO DISCORD
function discord_message(kode, username, message) {
  var params = "username=" + username + "&message=" + message;
  if (kode == 1) {
    url = "https://apiv2.bhadrikais.my.id/webhook.php?kode=1";
  } else if (kode == 2) {
    url = "https://apiv2.bhadrikais.my.id/webhook.php?kode=2";
  } else {
    url = "SORRY!";
  }
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  xhr.send(params);
  xhr.onload = function () {
    if (xhr.status === 200) {
    }
  };
  return "OK!";
}

function successDiscord() {
  console.log("MASUK TO DISCORD");
  btnKirim.value = "Kirim";
  btnKirim.disabled = false;
  namaKontak.disabled = false;
  namaKontak.value = "";
  emailKontak.disabled = false;
  emailKontak.value = "";
  pesanKontak.disabled = false;
  pesanKontak.value = "";
  successAlert.classList.add("success-form");
  setTimeout(function () {
    successAlert.classList.remove("success-form");
  }, 4000);
}
