document.body.style.backgroundColor = "black";
document.body.style.color = "white";


function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3) + 1;
    if (randomInt === 1) return "rock";
    if (randomInt === 2) return "paper";
    if (randomInt === 3) return "scissors";
}



const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id, getComputerChoice())
    })
})
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let display = document.getElementById('display');
    if (humanScore < 5 && computerScore < 5) {
        if (humanChoice === computerChoice) {
            display.innerHTML = `It's a tie!<br>Scoreboard- Player:${humanScore} - Computer:${computerScore}`
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++
            display.innerHTML = `You Win!  ${humanChoice} beats ${computerChoice} <br>Scoreboard- Player:${humanScore} - Computer:${computerScore}`
        } else {
            computerScore++
            display.innerHTML = `You Lose!  ${computerChoice} beats ${humanChoice} <br>Scoreboard- Player:${humanScore} - Computer:${computerScore}`
        }
    }
    if (humanScore === 5) {
        display.innerHTML = `5 points reached! You are the winner!<br>Final Score- Player:${humanScore} - Computer: ${computerScore}`
        computerScore = 0
        humanScore = 0
    } else if (computerScore === 5) {
        display.innerHTML = `You lost! The computer reached 5 points first! <br>Final Score- Player:${humanScore} - Computer: ${computerScore}`
        computerScore = 0
        humanScore = 0
    }
}
