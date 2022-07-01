function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
    return choice;
}

function playGame(computerChoice) {

    playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    
    if (computerChoice == "rock") {
        if (playerChoice == "paper") {
            return "You win! Paper beats rock!";
        } else if (playerChoice == "scissors") {
            return "You lose! Scissors loses to rock!";
        } else {
            return "It's a tie! Both chose rock!";
        }
    }

    if (computerChoice == "paper") {
        if (playerChoice == "paper") {
            return "It's a tie! Both chose paper!";
        } else if (playerChoice == "scissors") {
            return "You win! Scissors beats paper!";
        } else {
            return "You lose! Rock loses to paper!";
        }
    }

    if (computerChoice == "scissors") {
        if (playerChoice == "paper") {
            return "You lose! Paper loses to scissors!";
        } else if (playerChoice == "scissors") {
            return "It's a tie! Both chose scissors!";
        } else {
            return "You win! Rock beats scissors!";
        }
    }
}

console.log(playGame(computerPlay()));
