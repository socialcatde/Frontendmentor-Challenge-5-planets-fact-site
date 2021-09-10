const hamburger = document.querySelector(".hamburger--squeeze");
const contentButton = document.querySelectorAll(".contentButton");
const outsidePlanet = document.querySelector(".planet-box .outside-planet");
const insidePlanet = document.querySelector(".planet-box .inside-planet");
const realPlanet = document.querySelector(".planet-box .real-planet");
const TxtOutsidePlanet = document.querySelector(".information .outside-txt");
const TxtInsidePlanet = document.querySelector(".information .inside-txt");
const TxtRealPlanet = document.querySelector(".information .real-txt");

const subMenuId = document.querySelector(".submenu").id;
const overviewButton = document.querySelector(".overview");
const structureButton = document.querySelector(".structure");
const surfaceButton = document.querySelector(".surface");

hamburger.addEventListener("click", function () {
  document.body.classList.toggle("nav_list_open_body");
  hamburger.classList.toggle("is-active");
});

overviewButton.classList.add(`${subMenuId}-active`);

for (const choice of contentButton) {
  choice.addEventListener("click", function () {
    if (choice.textContent.toLowerCase() === "overview") {
      insidePlanet.classList.remove("visible-planet");
      realPlanet.classList.remove("visible-planet");
      TxtOutsidePlanet.classList.remove("invisible-planet");
      TxtInsidePlanet.classList.remove("visible-planet");
      TxtRealPlanet.classList.remove("visible-planet");
      choice.classList.add(`${subMenuId}-active`);
      structureButton.classList.remove(`${subMenuId}-active`);
      surfaceButton.classList.remove(`${subMenuId}-active`);
    } else if (choice.textContent.toLowerCase() === "structure") {
      outsidePlanet.classList.remove("visible-planet");
      insidePlanet.classList.add("visible-planet");
      realPlanet.classList.remove("visible-planet");
      TxtOutsidePlanet.classList.remove("visible-planet");
      TxtInsidePlanet.classList.add("visible-planet");
      TxtRealPlanet.classList.remove("visible-planet");
      TxtOutsidePlanet.classList.add("invisible-planet");
      choice.classList.add(`${subMenuId}-active`);
      overviewButton.classList.remove(`${subMenuId}-active`);
      surfaceButton.classList.remove(`${subMenuId}-active`);
    } else if (choice.textContent.toLowerCase() === "surface") {
      outsidePlanet.classList.remove("visible-planet");
      insidePlanet.classList.remove("visible-planet");
      realPlanet.classList.add("visible-planet");
      TxtOutsidePlanet.classList.remove("visible-planet");
      TxtInsidePlanet.classList.remove("visible-planet");
      TxtRealPlanet.classList.add("visible-planet");
      TxtOutsidePlanet.classList.add("invisible-planet");
      choice.classList.add(`${subMenuId}-active`);
      overviewButton.classList.remove(`${subMenuId}-active`);
      structureButton.classList.remove(`${subMenuId}-active`);
    }
  });
}
