// starting score
let computerScore = 0;
let playerScore = 0;
let counter = 0;
const playerButtons = document.querySelectorAll('#player-buttons button');

// function getComputerChoice where computer selects randomly from ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
}

// function playRound which determines the winner of the current round
function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    console.log('It is a tie!');
  } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'scissors' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log('something went wrong');
  }
  counter++;
  if (counter === 5) {
    if (playerScore > computerScore) {
      console.log(`You win the game with the final score of ${playerScore}:${computerScore}!`);
    } else if (playerScore === computerScore) {
      console.log(`It is a tie with the final score of ${playerScore}:${computerScore}!`);
    } else {
      console.log(`You lose the game with the final score of ${playerScore}:${computerScore}!`);
    }
    resetGame();
  }
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  counter = 0;
}

function game() {
  playerButtons.forEach(button => {
    button.addEventListener('click', e => {
      const playerSelection = e.target.id;
      const computerSelection = getComputerChoice();

      playRound(playerSelection, computerSelection);
    });
  });
}

game();