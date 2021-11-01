"use strict";

let level_one = document.querySelector(".game .level-1");
let level_two = document.querySelector(".game .level-2");
let border = document.querySelectorAll(".border");
let levelNumber = document.querySelector("h1");
let btn = document.getElementById("btn");

function game(value) {
  if (value === "border") alert("❗❗❗ You Lost Try Again ❗❗❗");

  if (value === "finish") {
    btn.style.opacity = 1;
    border[0].style.pointerEvents = "none";
  }

  if (value === "end-game") {
    border[1].style.pointerEvents = "none";
    btn.style.opacity = 1;
    btn.innerHTML = "You Win";
    btn.style.backgroundColor = "#d819bf";
  }
}

window.addEventListener("mousemove", (e) => {
  let checker = e.target.classList.value;
  game(checker);
});

btn.addEventListener("click", () => {
  level_one.style.display = "none";
  level_two.style.display = "block";

  if (level_two.style.display === "block") {
    levelNumber.innerHTML = "Level 2";
    btn.style.opacity = 0;
  }
});
