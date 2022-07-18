const rockbtn = document.querySelector('.rock.btn');
const paperbtn = document.querySelector('.paper.btn');
const scissorsbtn = document.querySelector('.scissors.btn');

rockbtn.addEventListener("click", () => playRound(computerPlay(), "rock"));
paperbtn.addEventListener("click", () => playRound(computerPlay(), "paper"));
scissorsbtn.addEventListener("click", () => playRound(computerPlay(), "scissors"));

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
    return choice;
}

function playRound(computerChoice, playerChoice) {
    console.log(`You chose ${playerChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You Lose! Paper beats rock!");
            return "You Lose! Paper beats rock!";
        } else if (computerChoice == "scissors") {
            console.log("You Win! Rock beats scissors!");
            return "You Win! Rock beats scissors!";
        } else {
            console.log("It's a Tie! Both chose rock!");
            return "It's a Tie! Both chose rock!";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "paper") {
            console.log("It's a Tie! Both chose paper!");
            return "It's a Tie! Both chose paper!";
        } else if (computerChoice == "scissors") {
            console.log("You Lose! Scissors beats paper!");
            return "You Lose! Scissors beats paper!";
        } else {
            console.log("You Win! Paper beats rock!");
            return "You Win! Paper beats rock!";
        }
    } else {
        if (computerChoice == "paper") {
            console.log("You Win! Scissors beats paper!");
            return "You Win! Scissors beats paper!";
        } else if (computerChoice == "scissors") {
            console.log("It's a Tie! Both chose scissors!");
            return "It's a Tie! Both chose scissors!";
        } else {
            console.log("You Lose! Rock beats scissors!");
            return "You Lose! Rock beats scissors!";
        }
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     //for (let i = 0; i < 5; i++) {
//        let result = playRound(computerPlay(), playerSelect());
//        console.log(result);
//        if (result.includes("Win")) {
//            playerScore++;
//        } else if (result.includes("Lose")) {
//            computerScore++;
//        } else {
//            console.log("No points");
//        }
//        console.log(`The score is now ${playerScore} - ${computerScore}`);
//     //}
//     if (playerScore > computerScore) {
//         return `The final score is ${playerScore} - ${computerScore}, the player wins!`;
//     } else if (computerScore > playerScore) {
//         return `The final score is ${playerScore} - ${computerScore}, the player loses!`;
//     } else {
//         return `The final score is ${playerScore} - ${computerScore}, it's a tie!`;
//     }
// }




