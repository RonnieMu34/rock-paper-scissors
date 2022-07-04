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

