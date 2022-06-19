let computerSelection = 0

function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3);
    return computerSelection
}

function pick() {
    let playerSelection = window.prompt("Rock, Paper, Scissors: ");
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection == "ROCK") {
        playerSelection = 0;
    }
    else if(playerSelection == "PAPER") {
        playerSelection = 1;
    }
    else if(playerSelection == "SCISSORS") {
        playerSelection = 2;
    }
    else {
        pick();
    }
    return playerSelection;
}

function playRound() {
    if(computerSelection == playerSelection) {
        console.log("Draw, Play Again");
    }
    else if(computerSelection == 0 && playerSelection == 1) {
        console.log("Paper beats Rock, Player wins!");
    }
    else if(computerSelection == 0 && playerSelection == 2) {
        console.log("Rock beats Scissors, Computer wins!");
    }
    else if(computerSelection == 1 && playerSelection == 0) {
        console.log("Paper beats Rock, Computer wins!");
    }
    else if(computerSelection == 1 && playerSelection == 2) {
        console.log("Scissors beats Paper, Player wins!");
    }
    else if(computerSelection == 2 && playerSelection == 0) {
        console.log("Rock beats Scissors, Player wins!");
    }
    else if(computerSelection == 2 && playerSelection == 1) {
        console.log("Scissors beats Paper, Computer wins!");
    }
    else {
        console.log("Error");
    }
}

function game() {
    for(i=0; i==4; i++) {
        computerPlay();
        pick();
        playRound();
    }
}
 game();





