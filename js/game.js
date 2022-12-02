// starting score
let computerScore = 0;
let playerScore = 0;


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
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock' ||
      playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else console.log('something went wrong');
  }   
 
function game() {  
  
  for (let i = 0; i < 5; i++) {
      
      // prompt player to enter his selection
      const getPlayerChoice = prompt('Select Rock, Paper, Scissors').toLowerCase();
      const computerSelection = getComputerChoice();

      console.log(playRound(getPlayerChoice, computerSelection)) === "You win"
  }
  
  if (playerScore > computerScore) {
    console.log(`You win the game with the final score of ${playerScore}:${computerScore}`); 
    // reset score
    computerScore = 0;
    playerScore = 0;
  } else if (playerScore === computerScore) {
    console.log(`It is a tie with the final score of ${playerScore}:${computerScore}`);
    // reset score
    computerScore = 0;
    playerScore = 0;
  } else {
    console.log(`You lose the game with the final score of ${playerScore}:${computerScore}`);
    // reset score
    computerScore = 0;
    playerScore = 0;
  }
}

game();