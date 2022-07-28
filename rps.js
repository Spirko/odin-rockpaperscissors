console.log("RPS starting.");

function getComputerChoice() {
  switch (Math.floor(Math.random()*3)) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  }
}

function verifyPlayerSelection(playerSelection) {
  switch (playerSelection.toLowerCase()) {
    case 'rock': case 'paper': case 'scissors': return true;
  }
  console.log('Please make a valid choice.');
  return false;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case 'rock':
      switch (computerSelection) {
        case 'rock': return 'Tie, both rock';
        case 'paper': return 'Computer, paper covers rock';
        case 'scissors': return 'Player, rock crushos scissors';
      }
    case 'paper':
      switch (computerSelection) {
        case 'rock': return 'Player, paper covers rock';
        case 'paper': return 'Tie, both paper';
        case 'scissors': return 'Computer, scissors cut paper';
      }
    case 'scissors':
      switch (computerSelection) {
        case 'rock': return 'Computer, rock crushes scissors';
        case 'paper': return 'Player, scissors cut paper';
        case 'scissors': return 'Tie, both scissors';
      }
  }
}

function game() {
  let scores = {
    Tie: 0, Computer: 0, Player: 0
  };
  for(let i=0; i<5; i++) {
    let playerSelection;
    do {
      playerSelection = prompt('Choose rock, paper, or scissors.');
    } while (!verifyPlayerSelection(playerSelection));
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    scores[result.split(',')[0]]++;
    console.log(result);
  }
  console.log(scores);
}