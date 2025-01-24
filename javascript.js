    

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

function GetComputerChoice() {
   /* const max = Math.ceil(4);
    const min = Math.floor(1);*/
    let computerChoice = Math.floor(Math.random() * 3) +1 /*(max-min) + min)*/;
        if (computerChoice === 1) {
            return "rock";
            
        }
        else if (computerChoice === 2) {
            return "paper";
        }
    else {
        return "scissors";
    }



    }

function GetHumanChoice() {
    let userInput = prompt("Choose Rock, Paper, or Scissors").toUpperCase();
    if (userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS") {
        return userInput;
    }
    else {
        console.error("NOT A VALID INPUT");
    }
}

function playRound(humanChoice, computerChoice) {

    /* The logic below works most of the time however, not consistant as expected */

   /* if (humanChoice === computerChoice) {
        console.log("It's a tie; neither win nor lose!");


    } else if  (
        (humanChoice === "ROCK" && computerChoice === "PAPER") ||
        (humanChoice === "PAPER" && computerChoice === "SCISSOR") ||
        (humanChoice === "SCISSOR" && computerChoice === "ROCK")
    ) {
        console.log(`"You lose! computer chose ${computerChoice}."`);
        computerScore ++;
    } else {
        console.log(`"You win! Computer chose ${computerChoice}."`);
        humanScore ++;
    }*/

    /* The logic below does not work as intended; I need to figure out why.*/
    
    /*if (humanChoice === computerChoice) {
        console.log("it's a tie!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`"You win!  Computer chose ${computerChoice}."`);
        humanScore ++; 
    } else {
        console.log(`"You lose! Computer chose ${computerChoice}."`);
    }*/
   
   /* The logic below does work */
   
     if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {   
        console.log("You win! Rock beats scissors!");
        humanScore ++;
    
    }   else if (humanChoice === "PAPER" && computerChoice === "ROCK") { 
        console.log("You win! Paper beats Rock!");
        humanScore ++;
    
    
    }   else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You win! Scissors beat Paper!");
        humanScore ++;
    
    }  else if (humanChoice === computerChoice .toUpperCase()) { 
        console.log("It's a tie! No one wins.");
    
    }   else {
        console.log("You lose!" + computerChoice + "beats" + humanChoice + "!")
        computerScore ++;
    }
}

    


playRound(GetHumanChoice() .toUpperCase(), GetComputerChoice() .toUpperCase());
playRound(GetHumanChoice() .toUpperCase(), GetComputerChoice() .toUpperCase());
playRound(GetHumanChoice() .toUpperCase(), GetComputerChoice() .toUpperCase());
playRound(GetHumanChoice() .toUpperCase(), GetComputerChoice() .toUpperCase());
playRound(GetHumanChoice() .toUpperCase(), GetComputerChoice() .toUpperCase());


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
