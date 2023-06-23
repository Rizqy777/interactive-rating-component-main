const containerMain = document.querySelector(".container");
const containerThanks = document.querySelector(".container_2");
const submitButton = document.getElementById("button_submit");
const rating = document.getElementById("rating");
let score = document.querySelectorAll(".button_rating");

submitButton.addEventListener("click", () => {
  containerThanks.classList.remove("hidden");
  containerMain.style.display = "none";
});

score.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
