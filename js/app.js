const hamburger = document.querySelector(".hamburger--squeeze");

hamburger.addEventListener("click", function () {
  document.body.classList.toggle("nav_list_open_body");
  hamburger.classList.toggle("is-active");
});

/* Farbauswahl für borders */

const contentButton = document.querySelector(".contentButton");
const planetCurrent = document.querySelector("h3").innerText.toLowerCase();
let hoverColor = {
  mercury: "419EBB",
  venus: "EDA249",
  earth: "6D2ED5",
  mars: "D14C32",
  jupiter: "D83A34",
  saturn: "CD5120",
  uranus: "1EC1A2",
  neptune: "2D68F0",
};
let response = "";

if (planetCurrent in hoverColor) {
  response = hoverColor[`${planetCurrent}`];
}

contentButton.addEventListener("mouseover", function () {
  contentButton.style.color = "blue";
});
