let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#playerScore");
const computer = document.querySelector("#computerScore");
const roundResult = document.querySelector(".roundResult");
refreshScore();

function refreshScore(){
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(e) {
    playerSelection = this.getAttribute("data-key");
    computerSelection = getComputerChoice();
    roundResult.classList.remove("rainbow-text");

    if (playerSelection == computerSelection)
        roundResult.textContent = "It's a tie!";
    else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            computerScore++;
            roundResult.textContent = "You lose! Paper beats Rock!"
        } else {
            playerScore++;
            roundResult.textContent = "You win! Rock beats Scissors!";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock") {
            playerScore++;
            roundResult.textContent =  "You win! Paper beats Rock!";
        } else {
            computerScore++;
            roundResult.textContent =  "You lose! Scissors beats Paper!";
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "paper") {
            playerScore++;
            roundResult.textContent =  "You win! Scissors beats Paper!";
        } else {
            computerScore++;
            roundResult.textContent =  "You lose! Rock beats Scissors!";
        }
    }

    refreshScore();

    if (computerScore == 5 || playerScore == 5) 
        resetGame();
}

function resetGame(){

    if (playerScore > computerScore) {
        roundResult.textContent = "You win! Congratulations! :)";
        roundResult.classList.add("rainbow-text");
    }
    else
        roundResult.textContent = "You lose! Better luck next time :(";

    computerScore = 0;
    playerScore = 0;
}





const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', playRound));

