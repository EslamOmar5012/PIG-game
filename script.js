'use strict';
//when starting the website
let player = 0, // Keeps track of the current player (0 or 1)
  current_score = 0, // Holds the current round score for the active player
  players_total_score = [0, 0], // Array to store the total scores of both players
  dice_roll = 0, // Holds the value of the current dice roll
  state = 1; // Indicates whether the game is active (1) or ended (0)

//globals
const dice = document.querySelector('.dice'); // Reference to the dice image element

// Function to switch the active player
const switchPlayer = () => {
  document.querySelector(`.player--${0}`).classList.toggle('player--active'); // Toggles the 'active' class for player 0
  document.querySelector(`.player--${1}`).classList.toggle('player--active'); // Toggles the 'active' class for player 1
};

// Function to handle rolling the dice
const rollDice = () => {
  if (state === 1) {
    // Check if the game is active
    dice_roll = Math.floor(Math.random() * 6) + 1; // Generate a random dice roll between 1 and 6
    dice.src = `dice-${dice_roll}.png`; // Update the dice image to show the current roll
    dice.classList.remove('hidden'); // Make the dice visible
    if (dice_roll === 1) {
      // If the dice roll is 1, switch to the other player
      switchPlayer();
      current_score = 0; // Reset the current score
      document.getElementById(`current--${player}`).textContent = 0; // Update the current score display
      player = player === 0 ? 1 : 0; // Switch to the other player
    } else {
      current_score += dice_roll; // Add the dice roll to the current score
      document.getElementById(`current--${player}`).textContent = current_score; // Update the current score display
    }
  }
};

//roll the dice button
document.querySelector('.btn--roll').addEventListener('click', rollDice); // Add event listener for rolling the dice

// Function to handle holding the current score
const holdScore = function () {
  if (state === 1) {
    // Check if the game is active
    dice.classList.add('hidden'); // Hide the dice
    players_total_score[player] += current_score; // Add the current score to the player's total score
    document.getElementById(`score--${player}`).textContent =
      players_total_score[player]; // Update the total score display
    if (players_total_score[player] >= 100) {
      // Check if the player has won
      console.log(`Player ${player + 1} won the game`); // Log the winner to the console
      document
        .querySelector(`.player--${player}`)
        .classList.remove('player--active'); // Remove 'active' class from the winning player
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner'); // Add 'winner' class to the winning player
      current_score = 0; // Reset the current score
      document.getElementById(`current--${player}`).textContent = current_score; // Update the current score display
      state = 0; // Set the game state to ended
    } else {
      current_score = 0; // Reset the current score
      document.getElementById(`current--${player}`).textContent = 0; // Update the current score display
      switchPlayer(); // Switch to the other player
      player = player === 0 ? 1 : 0; // Switch the player
    }
  }
};

//hold button
document.querySelector('.btn--hold').addEventListener('click', holdScore); // Add event listener for holding the score

//reset the game
document.querySelector('.btn--new').addEventListener('click', function () {
  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--winner'); // Remove 'winner' class from the current player (if any)
  state = 1; // Set the game state to active
  player = 0; // Reset to player 0
  current_score = 0; // Reset the current score
  players_total_score = [0, 0]; // Reset the total scores
  dice_roll = 0; // Reset the dice roll
  
  dice.classSet.remove('hidden');//remove the dice image

  document.getElementById(`current--${0}`).textContent = 0; // Reset current score display for player 0
  document.getElementById(`current--${1}`).textContent = 0; // Reset current score display for player 1

  document.getElementById(`score--${0}`).textContent = 0; // Reset total score display for player 0
  document.getElementById(`score--${1}`).textContent = 0; // Reset total score display for player 1
  document.querySelector(`.player--${0}`).classList.add('player--active'); // Set player 0 as the active player
});
