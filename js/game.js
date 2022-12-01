// prompt player to enter his selection
const getPlayerChoice = prompt('Select Rock, Paper, Scissors');

// function getComputerChoice where computer selects randomly from ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissor'];
    return choice[Math.floor(Math.random() * choice.length)];
}

// function playRound which determines the winner of the current round
// make it case insensitive 
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        console.log('It is a tie!');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if(playerSelection === 'Paper' && computerSelection === 'Paper') {
        console.log('It is a tie!');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log(`You lose! ${computerSelection} beat ${playerSelection}`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }  else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('It is a tie!');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else console.log('something went wrong');
}
   
 
  const computerSelection = getComputerChoice();
  console.log(playRound(getPlayerChoice, getComputerChoice()));

// function game in which the function playRound will loop for 5 rounds and display winner/looser