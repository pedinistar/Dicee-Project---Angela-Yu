function randomNumberGenerator() {
  return Math.floor(Math.random() * 6) + 1;
}

let randomNumber1 = randomNumberGenerator();
let randomNumber2 = randomNumberGenerator();

function generateRandomDiceImage(num) {
  return `images/dice${num}.png`;
}

document
  .querySelector(".img1")
  .setAttribute("src", generateRandomDiceImage(randomNumber1));
document
  .querySelector(".img2")
  .setAttribute("src", generateRandomDiceImage(randomNumber2));

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw🤍";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "😁PLayer 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!😁";
}
