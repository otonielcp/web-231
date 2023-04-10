// Opening programmer's comments
// Author: Otoniel Cortez
// Date: 4/9/2023
// Assignment: Web 231 Assignment 4

// Generate a random number between 1 and 100
function generateRndNum() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  // Assign the random number to a constant variable
  const rnd = generateRndNum();
  
  // Get the input element, submit button element, and result message element
  const guessInput = document.getElementById("guessInput");
  const submitBtn = document.getElementById("submitBtn");
  const resultMsg = document.getElementById("resultMsg");
  
  // Attach a click event listener to the submit button
  submitBtn.onclick = function() {
    chkGuess();
  };
  
  // Check if the user's guess is correct
  function chkGuess() {
    // Define the messages to display
    const msgLessThan = "The number is less than";
    const msgGreaterThan = "The number is greater than";
    const msgCongrats = "Congratulations! You picked the correct number!";
  
    // Get the user's guess from the input element
    const guess = parseInt(guessInput.value);
  
    // Compare the user's guess to the random number and display the appropriate message
    if (guess < rnd) {
      resultMsg.textContent = msgLessThan;
    } else if (guess > rnd) {
      resultMsg.textContent = msgGreaterThan;
    } else {
      resultMsg.textContent = msgCongrats;
    }
  }
  