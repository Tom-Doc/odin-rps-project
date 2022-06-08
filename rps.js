"use strict";

// const calcTip = function (bill) {
//     return bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
// }
    
// for (let i = 0; i < bills.length; i++) {   
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     const total = bills[i]+tips[i]
//     totals.push(total);     
// }



const playerChoice = function() {
    const playerSelection = prompt("Please choose Rock, Paper, or Scissors").toLowerCase();
    return playerSelection
}



const computerChoice = function () {
    let compSelection = Math.random();
    if (compSelection <= 0.34) {
        compSelection = "rock";
    } else if (compSelection <= 0.67) {
        compSelection = "paper";
    } else {
        compSelection = "scissors";
    }
    return compSelection;
}




const playRound = function (playerSelection, computerSelection) {
    //rock Scenarios
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! - Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer Wins! - Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "Draw! You both selected Rock."
    }
    // scissors Scenarios
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! - Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer Wins! - Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Draw! You both selected Scissors";
    }
    //paper Scenarios
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! - Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer wins! - Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Draw! You both selected Paper"
    } else {
        return "Uh oh! Something went wrong. Please try again."
    }
}

const game = function() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = computerChoice();
        console.log(`You selected ${playerSelection}`);
        console.log(`The computer selected ${computerSelection}`);
        
        console.log(playRound(playerSelection, computerSelection));
     }
}
// const playerSelection = playerChoice();
// const computerSelection = computerChoice();
// console.log(`You selected ${playerSelection}`);
// console.log(`The computer selected ${computerSelection}`);

// console.log(playRound(playerSelection, computerSelection));

game();


// These were for testing purposes
// const playerSelection = playerChoice();
// const computerSelection = computerChoice();
// console.log(playRound(playerSelection, computerSelection));





