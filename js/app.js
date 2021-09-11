const hamburger = document.querySelector(".hamburger--squeeze");
const contentButton = document.querySelectorAll(".contentButton");

const planetFacts = [
  {
    planet: ".planet-box .outside-planet",
    textPlanet: ".information .outside-txt",
    buttonPlanet: ".overview",
  },
  {
    planet: ".planet-box .inside-planet",
    textPlanet: ".information .inside-txt",
    buttonPlanet: ".structure",
  },
  {
    planet: ".planet-box .real-planet",
    textPlanet: ".information .real-txt",
    buttonPlanet: ".surface",
  },
];

const subMenuId = document.querySelector(".submenu").id;

hamburger.addEventListener("click", function () {
  document.body.classList.toggle("nav_list_open_body");
  hamburger.classList.toggle("is-active");
});

document
  .querySelector(planetFacts[0].buttonPlanet)
  .classList.add(`${subMenuId}-active`);

for (const choice of contentButton) {
  choice.addEventListener("click", function () {
    choice.classList.add(`${subMenuId}-active`);

    for (const planetFact of planetFacts) {
      if (
        document
          .querySelector(planetFact.buttonPlanet)
          .classList.contains(`${subMenuId}-active`) &&
        document.querySelector(planetFact.buttonPlanet) !== choice
      ) {
        document
          .querySelector(planetFact.buttonPlanet)
          .classList.remove(`${subMenuId}-active`);
      }
    }
  });
}

/* for (const choice of contentButton) {
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
} */
