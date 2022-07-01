const choices = ["Rock", "Paper", "Scissors"];

function computerPLay(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    let choice = choicesArray[randomIndex];
    return choice;
}