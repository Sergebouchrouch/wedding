// script.js
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#myButton");
  const heading = document.querySelector("h1");

  button.addEventListener("click", function () {
    heading.style.color = "blue";
  });
});

