const hamburger = document.querySelector(".hamburger--squeeze");

hamburger.addEventListener("click", function () {
  document.body.classList.toggle("nav_list_open_body");
  hamburger.classList.toggle("is-active");
});
