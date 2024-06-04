document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const preloader = document.getElementById("preloader");

  navbar.classList.add("hidden");

  window.addEventListener("load", function () {
    preloader.classList.add("hidden");
    navbar.classList.remove("hidden");
  });
});
