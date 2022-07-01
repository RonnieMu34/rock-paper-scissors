const choices = ["rock", "paper", "scissors"];

function computerPlay(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    let choice = choicesArray[randomIndex];
    return choice;
}

function playerSelect() {
    let playerChoice = prompt("Pick one: Rock, Paper, or Scissors?");

    return playerChoice.toLowerCase();
}