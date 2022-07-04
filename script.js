function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
    return choice;
}

function playerSelect() {
    playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice = playerChoice.toLowerCase();
}

function playRound(computerChoice, playerChoice) {
    console.log(computerChoice);
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            return "You Lose! Paper beats rock!";
        } else if (computerChoice == "scissors") {
            return "You Win! Rock beats scissors!";
        } else {
            return "It's a tie! Both chose rock!";
        }
    }
}

console.log(playRound(computerPlay(), playerSelect()));
