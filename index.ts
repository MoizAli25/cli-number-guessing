#! /usr/bin/env node

import inquirer from "inquirer";

const randonNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to number guessing game");

const answer = await inquirer.prompt([
  {
    name: "UserGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-10: ",
  },
]);

if (answer.UserGuessedNumber === randonNumber) {
  console.log("Congratulations! you guessed right number");
} else {
  console.log("Sorry! you guessed wrong number");
}
