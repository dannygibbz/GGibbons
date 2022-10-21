//Select element function

const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

// scroll reveal

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

let message = document.getElementById("message");
let twitter = document.getElementById("twitter");
let facebook = document.getElementById("facebook");
let pinterest = document.getElementById("pinterest");
let linkedin = document.getElementById("linkedin");
let tripadvisor = document.getElementById("tripadvisor");

twitter.addEventListener("click", () => {
  message.style.color = "#c59d5f";
  message.innerText = "Links will be active soon!";
  setTimeout(function () {
    document.getElementById("message").innerText = "";
  }, 3000);
});

facebook.addEventListener("click", () => {
  message.style.color = "#c59d5f";
  message.innerText = "Links will be active soon!";
  setTimeout(function () {
    document.getElementById("message").innerText = "";
  }, 3000);
});

let about = document.getElementById("about");
let contactInfo = document.getElementById("contactInfo");
let expertise = document.getElementById("expertise");
let writing = document.getElementById("writing");

about.addEventListener("click", () => {
  body.classList = "closed";
});

contactInfo.addEventListener("click", () => {
  body.classList = "closed";
});

expertise.addEventListener("click", () => {
  body.classList = "closed";
});

writing.addEventListener("click", () => {
  body.classList = "closed";
});
