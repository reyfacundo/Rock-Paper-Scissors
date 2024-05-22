document.body.style.backgroundColor = "black";

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3) + 1;
    if (randomInt === 1) return "rock";
    if (randomInt === 2) return "paper";
    if (randomInt === 3) return "scissors";
}

console.log(getComputerChoice());

function getHumanChoice() {
    let rawUserInput = prompt("Rock, paper or scissors?");
    let input = rawUserInput.split(' ').join('').toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
        return input;
    } else {
        console.log("Invalid option. Please select either Rock, Paper, or Scissors.");
        return null;
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // if (humanChoice === null) {
        //     console.log( "Invalid option, please select either Rock, Paper, or Scissors to start the game.")
        // } else if (humanChoice === "rock" && computerChoice === "rock") {
        //     console.log("It's a tie!")
        //     console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
        // } else if (humanChoice === "rock" && computerChoice === "paper") {
        //     console.log("You lose! Paper beats Rock")
        //     computerScore++
        //     console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
        // } else if (humanChoice === "rock" && computerChoice === "scissors") {
        //     console.log("You Win! Rock beats Scissors");
        //     humanScore++
        //     console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
        // } else if (humanChoice === "paper" && computerChoice === "rock") {
        //     console.log("You win! Paper beats Rock")
        //     humanScore++
        //     console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
        // } else if (humanChoice === "paper" && computerChoice === "paper") {
        //     console.log("It's a tie!")
        //     console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
        // } else if (humanChoice === "paper" && computerChoice === "scissors") {
        //     console.log("You lose! Scissors beats Paper")
        //     computerScore++
        //     console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
        // } else if (humanChoice === "scissors" && computerChoice === "rock") {
        //     console.log("You lose! Rock beats Scissors")
        //     computerScore++
        //     console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
        // } else if (humanChoice === "scissors" && computerChoice === "paper") {
        //     console.log("You win! Scissors beats Paper")
        //     humanScore++
        //     console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
        // } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        //     console.log("It's a tie!")
        //     console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
        // }
        if (humanChoice !== null) {
            if (humanChoice === computerChoice) {
                console.log("It's a tie!");
                console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)

            } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++
                console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
            } else {
                console.log(`You Lose! ${humanChoice} beats ${computerChoice}`);
                computerScore++
                console.log(`Scoreboard- Player:${humanScore} - Computer:${computerScore}`)
            }
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

}

playGame();