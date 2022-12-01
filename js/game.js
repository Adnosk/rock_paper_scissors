// array with rock, paper or scissor
const choice = ['Rock', 'Paper', 'Scissor'];

// function getComputerChoice where computer selects randomly from ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}
console.log(getComputerChoice());
// prompt player to enter his selection
// function playRound which determines the winner of the current round
// make it case insensitive 
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

// function game in which the function playRound will loop for 5 rounds and display winner/looser