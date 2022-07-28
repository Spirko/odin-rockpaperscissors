console.log("RPS starting.");

const choices = ['rock', 'paper', 'scissors'];
Object.freeze(choices);

const results = ['tie', 'player', 'computer'];
Object.freeze(results);

function getComputerChoice() {
  return Math.floor(Math.random()*3);
}

function interpretPlayerResponse(playerResponse) {
  let direct = parseInt(playerResponse);
  if (direct >= 0 && direct < 3) return direct;

  let index = choices.indexOf(playerResponse.toLowerCase());
  if (index >= 0) return index;

  console.log('Please make a valid choice.');
  return -1;
}

function playRound(playerSelection, computerSelection) {
  return (playerSelection - computerSelection + 3)%3;
}

function explain(playerSelection, computerSelection, result) {
  console.log(`Player: ${choices[playerSelection]}    Computer: ${choices[computerSelection]}    Result: ${results[result]}`);
}

function logScores(scores) {
  for(let i in scores) {
    console.log(`${results[i]}: ${scores[i]}`);
  }
}

function processScores(scores) {
  let winner;
  if (scores[1] > scores[2]) winner = 1;
  else if (scores[2] > scores[1]) winner = 2;
  else winner = 0;

  console.log(`Winner is ${results[winner]}.`);
}

function game() {
  let scores = [ 0, 0, 0 ];
  for(let i=0; i<5; i++) {
    let playerSelection;
    do {
      const playerResponse = prompt('Choose rock, paper, or scissors.');
      playerSelection = interpretPlayerResponse(playerResponse);
    } while (!(playerSelection >= 0));

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    scores[result]++;
    explain(playerSelection, computerSelection, result);
  }
  logScores(scores);
  processScores(scores);
}
