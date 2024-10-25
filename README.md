# 🎲 Dice Game

A simple two-player dice game built with JavaScript, HTML, and CSS. The goal is to be the first player to reach 100 points. Players take turns rolling a dice and can choose to hold their current score or risk rolling a "1" to lose their accumulated points for that turn.

## 🚀 How to Play

1. The game starts with **Player 1**.
2. On your turn, click the **"Roll Dice"** button to roll a dice:
   - 🎲 If you roll a number between 2 and 6, it adds to your current score.
   - 🌀 If you roll a "1," your turn ends, and your current score resets to 0. The other player takes over.
3. You can click the **"Hold"** button to add your current score to your total score and pass the turn to the other player.
4. 🏆 The first player to reach **100 points** wins the game.

## ✨ Game Features

- 👥 **Two-Player Mode:** Players take turns to roll the dice and accumulate scores.
- 🎲 **Dice Rolling:** Randomly generates a number between 1 and 6 to simulate a dice roll.
- 🔄 **Player Switching:** Automatically switches players when a "1" is rolled or when a player chooses to hold.
- 🏅 **Winning Condition:** The game announces the winner when a player reaches 100 points.
- 🔄 **New Game Option:** Resets the game to start over.

## 📁 Project Structure

- **`index.html`**: The main HTML file for the game.
- **`style.css`**: The CSS file for styling the game interface.
- **`script.js`**: The JavaScript file containing the game logic.
