function computerPlay() {
    const myarray = ["rock", "paper", "scissors"];
    newarray = myarray[Math.floor(Math.random() * myarray.length)];
    return newarray;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors"
    } else return "It's a tie"; 
}

function gameLoop() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(`Round ${i}: What is your choice?`);
        playerSelection = playerSelection.toLowerCase();
        console.log(playRound(playerSelection, computerPlay()))
        console.log(`${playerScore} to ${computerScore}`);
    }
}

function updateScore() {
    if (playerScore > computerScore) {
        console.log(`You win ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose ${playerScore} to ${computerScore}`);
    } else {
        console.log(`It's a tie: ${playerScore} to ${computerScore}`);
    }
}

function game() {
    gameLoop();
    updateScore();
}