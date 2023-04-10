// Opening programmer's comments
// Author: Otoniel Cortez
// Date: 4/9/2023
// Assignment: Web 231 Assignment 4

function generateRndNum() {
    return Math.floor(Math.random() * 100) + 1;
  }

const rnd = generateRndNum();
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const resultMsg = document.getElementById("resultMsg");

submitBtn.onclick = function() {
  chkGuess();
};

function chkGuess() {
  const msgLessThan = "The number is less than";
  const msgGreaterThan = "The number is greater than";
  const msgCongrats = "Congratulations! You picked the correct number!";
  const guess = parseInt(guessInput.value);

  if (guess < rnd) {
    resultMsg.textContent = msgLessThan;
  } else if (guess > rnd) {
    resultMsg.textContent = msgGreaterThan;
  } else {
    resultMsg.textContent = msgCongrats;
  }
}