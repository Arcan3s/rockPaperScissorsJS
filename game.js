function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    console.log(choice[randomChoice]);
    return choice[randomChoice]; // randomChoice is index number in choice array from 0 to 2
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        return computerSelection === playerSelection ? "Tie" :
        computerSelection === "paper" ? "Lose" :
        "Win";
    } else if (playerSelection === "paper") {
        return computerSelection === playerSelection ? "Tie" :
        computerSelection === "scissors" ? "Lose" :
        "Win";
    } else if (playerSelection === "scissors") {
        return computerSelection === playerSelection ? "Tie" :
        computerSelection === "rock" ? "Lose" :
        "Win";
    }
}

function playGame() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
        console.log(playerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "Win") {
            score += 1;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
        } else if (result === "Lose") {
            console.log(`You Lose! ${computerSelection} beats your ${playerSelection}.`)
        } else {
            console.log(`It's a Tie! ${playerSelection} can't beat itself...`)
        }
        console.log(score);

    }
}

playGame();
// console.log(playRound(playerSelection, computerSelection));