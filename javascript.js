// console.log('Hello World');
// console.log('I sure love my baby');

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


