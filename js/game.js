// starting score
let computerScore = 0;
let playerScore = 0;
let counter = 0;
const playerButtons = document.querySelectorAll('#player-buttons button');
const results = document.querySelector('#results');
const result = document.createElement('p');
result.innerText = 'Lets play a game! Select your choice.';
results.appendChild(result);

// function getComputerChoice where computer selects randomly from ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
}

// function playRound which determines the winner of the current round
function playRound(playerSelection, computerSelection) {
  let roundResult = '';
  switch (true) {
    case playerSelection === computerSelection:
      roundResult = 'It is a tie!';
      break;
    case playerSelection === 'rock' && computerSelection === 'paper' ||
      playerSelection === 'scissors' && computerSelection === 'rock' ||
      playerSelection === 'paper' && computerSelection === 'scissors':
      computerScore++;
      roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
      break;
    case playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock' ||
      playerSelection === 'scissors' && computerSelection === 'paper':
      playerScore++;
      roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
      break;
    default:
      roundResult = 'something went wrong.';
      break;
  }

  counter++;
  result.innerHTML = `${roundResult}<br>This is the game nr.${counter}.<br>The score is ${playerScore}:${computerScore} (player:computer)`;

  // Check if the game is over
  if (counter === 5) {
    if (playerScore > computerScore) {
      result.innerHTML = `${roundResult}<br>You win the game with the final score of ${playerScore}:${computerScore}!`;
    } else if (playerScore === computerScore) {
      result.innerHTML = `${roundResult}<br>It is a tie with the final score of ${playerScore}:${computerScore}!`;
    } else {
      result.innerHTML = `${roundResult}<br>You lose the game with the final score of ${playerScore}:${computerScore}!`;
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
    button.addEventListener('click', handleClick);
  });
}

function handleClick(e) {
  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

game();