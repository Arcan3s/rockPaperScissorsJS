function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    console.log(choice[randomChoice]);
    return choice[randomChoice]; // randomChoice is index number in choice array from 0 to 2
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        return computerSelection === playerSelection ? "Tie! Rock can't beat itself." :
        computerSelection === "paper" ? "You Lose! Paper suffocates Rock." :
        "You Win! Rock crushes Scissors.";
    } else if (playerSelection === "paper") {
        return computerSelection === playerSelection ? "Tie! Paper can't beat itself." :
        computerSelection === "scissors" ? "You Lose! Scissors cuts Paper." :
        "You Win! Paper suffocates Rock.";
    } else if (playerSelection === "scissors") {
        return computerSelection === playerSelection ? "Tie! Scissors can't beat itself." :
        computerSelection === "rock" ? "You Lose! Rock crushes Scissors." :
        "You Win! Scissors cuts Paper.";
    }
}

function playGame() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        if (result === "You Win! Scissors cuts Paper.") {
            score += 1;
            console.log(score);
        }

    }
}

let playerSelection = "SCisSors";
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);
let computerSelection = getComputerChoice();
playGame();
// console.log(playRound(playerSelection, computerSelection));