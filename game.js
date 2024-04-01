function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
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
// Make it so player has to re-enter if not a valid option
function playGame() {
    let score = 0;
    let round = 1;
    for (let i = 0; i < 5; i++) {
        console.log(`Round: ${round}`);
        round += 1;
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
        console.log(`You: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        if (result === "Win") {
            score += 1;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
        } else if (result === "Lose") {
            console.log(`You Lose! ${computerSelection} beats your ${playerSelection}.`)
        } else {
            console.log(`It's a Tie! ${playerSelection} can't beat itself...`)
        }
        console.log(`Score: ${score}`);
    }
    return score >= 3 ? "WINNER!" :
    "LOSER!";
}

console.log(playGame());