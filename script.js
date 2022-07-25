const rockbtn = document.querySelector('.rock.btn');
const paperbtn = document.querySelector('.paper.btn');
const scissorsbtn = document.querySelector('.scissors.btn');
const scoreBoard = document.querySelector('.score');
const roundNumber = document.querySelector('.round-number');
let roundNum = 0;

let playerScore = 0;
let computerScore = 0;


rockbtn.addEventListener("click", () => {
    playRound(computerPlay(), "rock")
    roundCount();
});
paperbtn.addEventListener("click", () => {
    playRound(computerPlay(), "paper")
    roundCount();
});
scissorsbtn.addEventListener("click", () => {
    playRound(computerPlay(), "scissors")
    roundCount();
});

const playerChoiceElem = document.querySelector('.player-choice');
const computerChoiceElem = document.querySelector('.computer-choice');
const gameResults = document.querySelector('.final');

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
    return choice;
}

function checkWinner(computerChoice, playerChoice) {
    playerChoiceElem.textContent = `You chose ${playerChoice}`;
    computerChoiceElem.textContent = `Computer chose ${computerChoice}`;

    switch (playerChoice) {
        case "rock":
            if (computerChoice == "rock") {
                gameResults.textContent = "It's a Tie! Both chose rock!";
                return 0;
            } else if (computerChoice == "scissors") {
                gameResults.textContent = "You Win! Rock beats scissors!";
                return 1;
            } else {
                gameResults.textContent = "You Lose! Paper beats rock!";
                return -1;
            }
        case "paper":
            if (computerChoice == "rock") {
                gameResults.textContent = "You Win! Paper beats rock!";
                return 1;
            } else if (computerChoice == "scissors") {
                gameResults.textContent = "You Lose! Scissors beats paper!";
                return -1;
            } else {
                gameResults.textContent = "It's a Tie! Both chose paper!";
                return 0;
            }
        case "scissors":
            if (computerChoice == "rock") {
                gameResults.textContent = "You Lose! Rock beats scissors!";
                return -1;
            } else if (computerChoice == "scissors") {
                gameResults.textContent = "It's a Tie! Both chose scissors!";
                return 0;
            } else {
                gameResults.textContent = "You Win! Scissors beats paper!";
                return 1;
            }
    }
}

function roundCount() {
    roundNumber.textContent = `Round ${roundNum + 1}`;
    if (roundNum < 4) {
        roundNum++;
    } else {
        console.log("done");
    }
}

function playRound(computerChoice, playerChoice) {
    if (checkWinner(computerChoice, playerChoice) == 1) {
        playerScore++;
        scoreBoard.textContent = `${playerScore} - ${computerScore}`;
    } else if (checkWinner(computerChoice, playerChoice) == -1) {
        computerScore++;
        scoreBoard.textContent = `${playerScore} - ${computerScore}`;
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




