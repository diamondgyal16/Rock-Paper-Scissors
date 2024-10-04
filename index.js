const container = document.querySelector("#container")
const results = document.querySelector("#results")
const rock = document.createElement("button")
rock.textContent = "rock"
rock.addEventListener("click" , function(){
    playGame("rock")
} )
container.appendChild(rock)

const paper = document.createElement("button")
paper.textContent = "paper"
paper.addEventListener("click" , function(){
    playGame("paper")
})
container.appendChild(paper)

const scissors = document.createElement("button")
scissors.textContent = "scissors"
scissors.addEventListener("click" , function(){
    playGame("scissors")
})
container.appendChild(scissors)

const h3 = document.createElement("h3")
results.appendChild(h3)
h3.textContent = "Results"
const ul = document.createElement("ul")
results.appendChild(ul)


let round = 1
let yourScore = 0
let computerScore = 0
 
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

function playGame(yourSelection){
    const computerSelection = getComputerChoice()
    const result = playRound(yourSelection ,computerSelection)

      
    const li = document.createElement("li")
    ul.appendChild(li)
    const div = document.createElement("div")
    div.style.border = "2px solid gray"
    div.style.display = "flex"
    div.style.justifyContent = "space-between"
    div.style.padding = "1em .5em"
    li.appendChild(div)
    const roundSpan = document.createElement("span")
    div.appendChild(roundSpan)
    const winnerSpan = document.createElement("span")
    winnerSpan.style.width = "33%"
    winnerSpan.style.backgroundColor = "red"
    div.appendChild(winnerSpan)
    const choiceSpan = document.createElement("span")
    div.appendChild(choiceSpan)
    roundSpan.textContent = round 

    if(result.includes("You win")) {
        yourScore++
        winnerSpan.textContent = " you "
        choiceSpan.textContent = yourSelection + " vs " +  computerSelection
    } else if (result.includes("You lose")) {
        computerScore++
        winnerSpan.textContent = " computer "
        choiceSpan.textContent = computerSelection + " vs " +  yourSelection
    } else {
        yourScore++
        computerScore++
        winnerSpan.textContent = " tie "
        choiceSpan.textContent = yourSelection
    }

    if(round === 5) {
        if(yourScore > computerScore){
            alert("You won " + yourScore + "-" + computerScore)
        } else {
            alert("You lost " + yourScore + "-" + computerScore)
        }
    } 

    round++
}