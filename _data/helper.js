module.exports = {
  colourPick(pageName) {
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
    let planet = pageName.toLowerCase();

    if (planet in hoverColor) {
      response = hoverColor.planet;
    }
    return response;
  },
};
