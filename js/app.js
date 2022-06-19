let computerSelection = 0;
let playerSelection = 0;
let userScore = 0;
let pcScore = 0;
const selectionRock = document.getElementById("rock");
const selectionPaper = document.getElementById("paper");
const selectionScissors = document.getElementById("scissors");
const userScoreId = document.getElementById("userScore");
const pcScoreId = document.getElementById("pcScore");
const results = document.getElementById("results");

function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3);
    return computerSelection;
}

function playRound() {
    if(computerSelection == playerSelection) {
        results.innerHTML = "Draw, Play Again";
        userScoreId.innerHTML = userScore;
        pcScoreId.innerHTML = pcScore;
    }
    else if(computerSelection == 0 && playerSelection == 1) {
        results.innerHTML = "Paper beats Rock, Player wins!";
        userScore++;
        userScoreId.innerHTML = userScore;
        pcScoreId.innerHTML = pcScore;
    }
    else if(computerSelection == 0 && playerSelection == 2) {
        results.innerHTML = "Rock beats Scissors, Computer wins!";
        pcScore++;
        userScoreId.innerHTML = userScore;
        pcScoreId.innerHTML = pcScore;
    }
    else if(computerSelection == 1 && playerSelection == 0) {
        results.innerHTML = "Paper beats Rock, Computer wins!";
        pcScore++;
        userScoreId.innerHTML = userScore;
        pcScoreId.innerHTML = pcScore;
    }
    else if(computerSelection == 1 && playerSelection == 2) {
        results.innerHTML = "Scissors beats Paper, Player wins!";
        userScore++;
        userScoreId.innerHTML = userScore;
        pcScoreId.innerHTML = pcScore;
    }
    else if(computerSelection == 2 && playerSelection == 0) {
        results.innerHTML = "Rock beats Scissors, Player wins!";
        userScore++;
        userScoreId.innerHTML = userScore;
        pcScoreId.innerHTML = pcScore;
    }
    else if(computerSelection == 2 && playerSelection == 1) {
        results.innerHTML = "Scissors beats Paper, Computer wins!";
        pcScore++;
        userScoreId.innerHTML = userScore;
        pcScoreId.innerHTML = pcScore;
    }
    else {
        console.log("Error");
    }
    if(pcScore == 5) {
        results.innerHTML = "Computer has won. Try again.";
        pcScore = 0;
        userScore = 0;
    }
    else if(userScore == 5) {
        results.innerHTML = "You have won!";
        pcScore = 0;
        userScore = 0;
    }
}

selectionRock.addEventListener('click', function(){
    playerSelection = 0;
    computerPlay();
    playRound();
})

selectionPaper.addEventListener('click', function(){
    playerSelection = 1;
    computerPlay();
    playRound();
})

selectionScissors.addEventListener('click', function(){
    playerSelection = 2;
    computerPlay();
    playRound();
})
