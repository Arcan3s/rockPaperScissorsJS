function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    console.log(choice[randomChoice]);
    return choice[randomChoice]; // randomChoice is index number in choice array from 0 to 2
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        return computerSelection === playerSelection ? "Tie! Rock can't beat itself." :
        computerSelection === "Paper" ? "You Lose! Paper beats Rock." :
        "You Win! Rock crushes Scissors.";
    } else if (playerSelection === "Paper") {
        return computerSelection === playerSelection ? "Tie! Paper can't beat itself." :
        computerSelection === "Scissors" ? "You Lose! Scissors cuts Paper." :
        "You Win! Paper suffocates Rock.";
    } else {
        return computerSelection === playerSelection ? "Tie! Scissors can't beat itself." :
        computerSelection === "Rock" ? "You Lose! Rock crushes Scissors." :
        "You Win! Scissors cuts Paper.";
    }
}

let playerSelection = "Scissors";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


// FUNCTION playRound(playerSelection, computerSelection)
//      IF playerSelection === "Rock"
//          IF computerSelection === playerSelection
//               return "Tie!"
//          ELSE IF computerSelection === "Paper"
//              return "You Lose!"
//          ELSE return "You Win!"
