function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getPlayerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const input = prompt("Choose: Rock, Paper or Scissors!", "");
    
    if(choices.includes(input.toLowerCase()))
        return input;
    else {
        alert("This is not a valid choice!");
        return getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection)
        return "It's a tie!";
    else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            return "You lose! Paper beats Rock!";
        } else {
            return "You win! Rock beats Scissors!";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock!";
        } else {
            return "You lose! Scissors beats Paper!";
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "paper") {
            return "You win! Scissors beats Paper!";
        } else {
            return "You lose! Rock beats Scissors!";
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if(result.includes("win"))
            playerScore++;
        else if (result.includes("lose"))
            computerScore++;

        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log(`You win! Score: ${playerScore}-${computerScore}`);
    } else if(playerScore < computerScore) {
        console.log(`You lose! Score: ${playerScore}-${computerScore}`);
    }
    else
        console.log(`Draw! Score: ${playerScore}-${computerScore}`);
}

//game();