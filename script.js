function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
    return choice;
}
