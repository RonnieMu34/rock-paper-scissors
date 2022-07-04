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
    console.log("You chose " + playerChoice);
    console.log("Computer chose " + computerChoice);
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            return "You Lose! Paper beats rock!";
        } else if (computerChoice == "scissors") {
            return "You Win! Rock beats scissors!";
        } else {
            return "It's a tie! Both chose rock!";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "paper") {
            return "It's a tie! Both chose paper!";
        } else if (computerChoice == "scissors") {
            return "You Lose! Scissors beats paper!";
        } else {
            return "You Win! Paper beats rock!";
        }
    } else {
        if (computerChoice == "paper") {
            return "You Win! Scissors beats paper!";
        } else if (computerChoice == "scissors") {
            return "It's a tie! Both chose scissors!";
        } else {
            return "You Lose! Rock beats scissors!";
        }
    }
}

console.log(playRound(computerPlay(), playerSelect()));

