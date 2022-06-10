"use strict";

let playerScore = 0;
let computerScore = 0;
let tie = 0;



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
const playRound = function(playerSelection, computerSelection) {
    //rock Scenarios
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You Win! - Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Computer Wins! - Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        tie++;
        return "Draw! You both selected Rock."
    }
    // scissors Scenarios
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You Win! - Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Computer Wins! - Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        tie++;
        return "Draw! You both selected Scissors";
    }
    //paper Scenarios
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You Win! - Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Computer wins! - Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        tie++;
        return "Draw! You both selected Paper";
    } else {
        return "Uh oh! Something went wrong. Please try again.";
    }
    
}

//This is out game function that will loop through the playRounds function and it
//will have us play 5 rounds. At the end of the 5 rounds the if/else statement
//then lets us know who won out of the 5 rounds. 
const game = function() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choose Rock, Paper, or Scissors").toLowerCase();
        const computerSelection = computerChoice();
        // playRound(playerSelection, computerSelection);
        console.log(`You selected ${playerSelection}`);
        console.log(`The computer selected ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));  //<-- Note to future self: Your score was being doubled because you had your playRound function here as well as above. When you remove the console.log everything will still work you just wont see the "You win! - Paper beats Rock" or other outcomes in the console.
        console.log(playerScore, computerScore, tie);
        }
        if (playerScore > computerScore) {                          // <--- Note to future self: The scoring currently doesnt take into consideration replaying a hand if you tie. So if a player score is 0, computer score is 2, and a tie is 3 then it will still come back saying that computer won. Which yes, technically the computer did win, but later we will need to code in replaying hands when there is a tie.                
            console.log("You beat the computer!");
        } else if (computerScore > playerScore) {
            console.log("Computer wins. Try again!");
        } else {
            console.log("The game has ended in a tie.");  
        } 
}

game();