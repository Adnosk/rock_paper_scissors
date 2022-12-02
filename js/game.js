

// function getComputerChoice where computer selects randomly from ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

// function playRound which determines the winner of the current round
// make it case insensitive 
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || 
      playerSelection === 'scissors' && computerSelection === 'rock' ||
      playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock' ||
      playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else console.log('something went wrong');
  }   
 
  
  for (let i = 0; i < 5; i++) {
    // prompt player to enter his selection
    const getPlayerChoice = prompt('Select Rock, Paper, Scissors').toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(playRound(getPlayerChoice, computerSelection));
  }
