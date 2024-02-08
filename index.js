function getComputerChoice() {
    const randomNumber = Math.random();
    const choice = Math.floor(randomNumber * 3);

    if(choice === 0) {
        return "Rock";
    } else if(choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const insensitivePlayerSelection = playerSelection.toLowerCase();
    const insensitiveComputerSelection = computerSelection.toLowerCase();

    if(insensitivePlayerSelection === insensitiveComputerSelection) {
        return "It's a tie!";
    } else {
        if(insensitivePlayerSelection === "rock" && insensitiveComputerSelection === "paper") {
            return "You lose! paper covers rock."
        } else if(insensitivePlayerSelection === "rock" && insensitiveComputerSelection === "scissors") {
            return "You win! Rock smashes scissors."
        } else if(insensitivePlayerSelection === "paper" && insensitiveComputerSelection === "scissors") {
            return "You lose! Scissors cuts paper."
        } else if(insensitivePlayerSelection === "paper" && insensitiveComputerSelection === "rock") {
            return "You win! Paper covers rock."
        } else if(insensitivePlayerSelection === "scissors" && insensitiveComputerSelection === "rock") {
            return "You lose! Rock smashes scissors."
        } else if(insensitivePlayerSelection === "scissors" && insensitiveComputerSelection === "paper") {
            return "You win! Scissors cut paper."
        }
    }
}

alert (playRound(prompt("pick your choice, rock, paper, scissors"),getComputerChoice()))