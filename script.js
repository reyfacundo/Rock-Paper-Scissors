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
    let scoreboard = document.getElementById('scoreboard');
    if (humanScore < 5 && computerScore < 5) {
        if (humanChoice === computerChoice) {
            display.innerHTML = `It's a tie!`
            scoreboard.innerHTML = `<span class="score">Scoreboard</span><br> Player:${humanScore} - Computer:${computerScore}`
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++
            display.innerHTML = `You Win!<br>  <span class="${humanChoice}">${humanChoice}</span> beats <span class="${computerChoice}">${computerChoice}</span>`
            scoreboard.innerHTML = `<span class="score">Scoreboard</span><br> Player:${humanScore} - Computer:${computerScore}`
        } else {
            computerScore++
            display.innerHTML = `You Lose!<br> <span class="${computerChoice}">${computerChoice}</span> beats  <span class="${humanChoice}">${humanChoice}</span>`
            scoreboard.innerHTML = `<span class="score">Scoreboard</span><br> Player:${humanScore} - Computer:${computerScore}`
        }
    }
    if (humanScore === 5) {
        display.innerHTML = `5 points reached! You are the winner!`
        scoreboard.innerHTML = `<span class="score">Final Score</span><br> Player:${humanScore} - Computer:${computerScore}`
        computerScore = 0
        humanScore = 0
    } else if (computerScore === 5) {
        display.innerHTML = `You lost!<br> The computer reached 5 points first!`
        scoreboard.innerHTML = `<span class="score">Final Score</span><br> Player:${humanScore} - Computer:${computerScore}`
        computerScore = 0
        humanScore = 0
    }
}
