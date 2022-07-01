const choices = ["rock", "paper", "scissors"];

function computerPlay(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    let choice = choicesArray[randomIndex];
    return choice.toLowerCase;
}

function playerSelect() {
    let playerChoice = prompt("Pick one: Rock, Paper, or Scissors?");

    return playerChoice.toLowerCase();
}

function playGame(choicesArray) {
    if (playerChoice() == "rock") {
        if (computerPlay(choicesArray) == "scissors") {
            console.log("You win! Rock beats scissors!");
            return "You win! Rock beats scissors!";
        } else if (computerPlay(choicesArray) == "paper") {
            console.log("You lose! Paper beats rock!");
            return "You lose! Paper beats rock!";
        } else {
            console.log("It's a tie! Both are rocks!");
            return "It's a tie! Both are rocks!";
        }
    }
}