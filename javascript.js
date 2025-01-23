function playGame() {
    let humanScore = 0;
    let computerScore = 0;

function getComputerChoice() {
   /* const max = Math.ceil(4);
    const min = Math.floor(1);*/
    let randomNumber = Math.floor(Math.random() * 3) +1; /*(max-min) + min);*/
        if (randomNumber === 1) {
            return "rock";
        }
        else if (randomNumber === 2) {
            return "paper";
        }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Choose Rock, Paper, or Scissors").toUpperCase();
    if (userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS") {
        return userInput;
    }
    else {
        console.error("NOT A VALID INPUT");
    }
}

function playRound(humanChoice, computerChoice) {
    

    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {   
        console.log("You win! Rock beats scissors!");
        humanScore ++;
    
    }   else if (humanChoice === "PAPER" && computerChoice === "ROCK") { 
        console.log("You win! Paper beats Rock!");
        humanScore ++;
    
    
    }   else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You win! Scissors beat Paper!");
        humanScore ++;
    
    }   else if (humanChoice === computerChoice .toUpperCase()) { 
        console.log("It's a tie! No one wins.");
    
    }   else {
        console.log("You lose!" + computerChoice + "beats" + humanChoice + "!")
        computerScore ++;
    }
}

    


playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

if (humanScore > computerScore) {
    console.log("Human is the overall winner with a score of: " + humanScore);
}
else if (humanScore === computerScore) {
    console.log("Human and computer both have the same score. It's a tie overall.")
}
else {
    console.log("Computer is the winner with a score of: " + computerScore);
}

}



playGame();






/* let computerScore = 0

let humanScore = 0



function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices [Math.floor(Math.random() * 3 )];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
}   else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') 
    

    
){           
    result = `You win! Computer chose ${computerChoice}.`; 
    
    
 } else {
    result = `You lose! Computer chose ${computerChoice}.`;
    
 }

 console.log(document.getElementById('result').innerText = result);
}

function playRound(playerChoice, computerChoice) {
    
}*/
