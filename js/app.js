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
document
  .querySelector(planetFacts[0].textPlanet)
  .classList.add("visible-planet");

for (const choice of contentButton) {
  choice.addEventListener("click", function () {
    for (const planetFact of planetFacts) {
      /* Menu active states */
      if (document.querySelector(planetFact.buttonPlanet) === choice) {
        document
          .querySelector(planetFact.buttonPlanet)
          .classList.add(`${subMenuId}-active`);
        document
          .querySelector(planetFact.planet)
          .classList.add("visible-planet");
        document
          .querySelector(planetFact.textPlanet)
          .classList.add("visible-planet");
      } else {
        document
          .querySelector(planetFact.buttonPlanet)
          .classList.remove(`${subMenuId}-active`);
        document
          .querySelector(planetFact.planet)
          .classList.remove("visible-planet");
        document
          .querySelector(planetFact.textPlanet)
          .classList.remove("visible-planet");
      }
    }
  });
}
