"use strict";

let playerScore = 0;
let computerScore = 0;
let tie = 0;

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const outcomeDiv = document.querySelector(".outcome")
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")
const gameWinner = document.querySelector(".game-winner")

const p = document.createElement("p") // Moving from the playRound() up to here makes it so each outcome displays once and then replaced with the next outcome.

//This is our function that allows the computer to pick rock, paper, or scissors.
const computerChoice = function () {
    let compSelection = Math.random();
    if (compSelection < 0.34) {
        compSelection = "rock";
    } else if (compSelection <= 0.67) {
        compSelection = "paper";
    } else {
        compSelection = "scissors";
    }
    return compSelection;
}

//This is our function that goes through all the logic of rock, paper, scissors
//and can determine who wins each round depending on what they picked. 
const playRound = function (playerSelection, computerSelection) {
    //rock Scenarios
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        // const p = document.createElement("p") // Removed all creatElement p's from playRound due to every single outcome showing when selected.
        // Below outcomeDiv.appendChild needs to be there in order to display createElement ("p")
        outcomeDiv.appendChild(p)
        // Each p.innerText will display the text below as a paragraph in the HTML
        p.innerText = "You Win! - Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        // const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "Computer Wins! - Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        tie++;
        // const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "Draw! You both selected Rock."
    }
    // scissors Scenarios
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        // const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "You Win! - Scissors beats Paper"
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        // const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "Computer Wins! - Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        tie++;
        // const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "Draw! You both selected Scissors";
    }
    //paper Scenarios
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        // const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "You Win! - Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        // const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "Computer wins! - Scissors beats Paper"
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        tie++;
        // const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "Draw! You both selected Paper";
    } else {

        return "Uh oh! Something went wrong. Please try again.";
    }

}

// Below will check the score to determine the winner. First to 5 will win the game. 
const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        document.querySelector(".rock").disabled = true; // These 3 along with the 3 in the if below will disable each button once a winner is determined. 
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;
        outcomeDiv.innerText = ""; // This will remove the text for the outcome of the choices once a winner is determined so that only the  h2 displaying the winner will show. 
        // h2 that will display when the player wins 
        const h2 = document.createElement("h2")
        h2.classList.add("player-won")
        h2.innerText = `Player wins ${playerScore} to ${computerScore}`
        outcomeDiv.appendChild(h2)
    }

    if (computerScore === 5) {
        document.querySelector(".rock").disabled = true;
        document.querySelector(".paper").disabled = true;
        document.querySelector(".scissors").disabled = true;
        outcomeDiv.innerText = "";
        // h2 that will display when the computer wins
        const h2 = document.createElement("h2")
        h2.classList.add("computer-won")
        h2.innerText = `Computer wins ${computerScore} to ${playerScore}`
        outcomeDiv.appendChild(h2)
    }
}

// function that will display and keep a running score
const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore} |`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`

}

// All 3 below are the Event Listeners for each button. On click the computer choice will run, playRound will run since you
// selected a choice and so did the computer, and then scores will run a long with the function checking for a winner. 
rockButton.addEventListener("click", () => {

    const computerSelection = computerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
});

paperButton.addEventListener("click", () => {
    const computerSelection = computerChoice()
    const playerSelection = "paper"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
});

scissorsButton.addEventListener("click", () => {
    const computerSelection = computerChoice()
    const playerSelection = "scissors"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
});

document.querySelector(".reset").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    document.querySelector(".rock").disabled = false; // Each of these 3 will reset the buttons so they're no longer disabled. 
    document.querySelector(".paper").disabled = false;
    document.querySelector(".scissors").disabled = false;
    playerScoreSpan.innerText = `Player Score: 0 |`; //resets Player Score at the top
    computerScoreSpan.innerText = `Computer Score: 0` // resets Computer Score at the top
    outcomeDiv.innerText = ""; // resets outcomeDiv i.e messages like "Computer Wins! - Scissors beats paper"
})


//Below is original code for when we were playing the game just in the browser. 

//This is out game function that will loop through the playRounds function and it
//will have us play 5 rounds. At the end of the 5 rounds the if/else statement
//then lets us know who won out of the 5 rounds. 
// const game = function() {
//     for (let i = 0; i < 5; i++) {
//         // const playerSelection = prompt("Please choose Rock, Paper, or Scissors").toLowerCase();
//         // const computerSelection = computerChoice();
//         // playRound(playerSelection, computerSelection);
//         console.log(`You selected ${playerSelection}`);
//         console.log(`The computer selected ${computerSelection}`);
//         console.log(playRound(playerSelection, computerSelection));  //<-- Note to future self: Your score was being doubled because you had your playRound function here as well as above. When you remove the console.log everything will still work you just wont see the "You win! - Paper beats Rock" or other outcomes in the console.
//         console.log(playerScore, computerScore, tie);
//         }
//         if (playerScore > computerScore) {                          // <--- Note to future self: The scoring currently doesnt take into consideration replaying a hand if you tie. So if a player score is 0, computer score is 2, and a tie is 3 then it will still come back saying that computer won. Which yes, technically the computer did win, but later we will need to code in replaying hands when there is a tie.                
//             console.log("You beat the computer!");
//         } else if (computerScore > playerScore) {
//             console.log("Computer wins. Try again!");
//         } else {
//             console.log("The game has ended in a tie.");  
//         } 
// }

// game();