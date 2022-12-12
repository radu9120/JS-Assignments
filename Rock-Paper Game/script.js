"use strict";

const rockIcon = document.getElementById("rock");
const paperIcon = document.getElementById("paper");
const scissorIcon = document.getElementById("scissors");
const playerChoicesElements = [rockIcon, paperIcon, scissorIcon];
const movesLeft = document.querySelector(".movesleft");
const resetRoundButton = document.querySelector(".reset-round");
const resultElement = document.querySelector(".round-result");
const resetTotalGame = document.querySelector(".reset-game");

const score = {
  playerScore: 0,
  computerScore: 0,
};

let moves = 0;
let isPlaying = true;
let playerChoice = "";
let computerChoice = "";

const picks = {
  rock: {
    beats: "scissors",
  },
  paper: {
    beats: "rock",
  },
  scissors: {
    beats: "paper",
  },
};

//Function to select the html elements
const initGame = () => {
  resetRoundButton.addEventListener("click", resetRound);
  resetTotalGame.addEventListener("click", resetAllbutton);
  movesLeft.innerText = `Moves Left: ${10 - moves}`;

  // Start fo the game Function
  playerChoicesElements.forEach((choice) => {
    choice.addEventListener("click", function (event) {
      if (!isPlaying) {
        return;
      }

      isPlaying = false;

      event.target.classList.add("player-choice-active");
      playerChoice = event.target.id;

      moves++;
      movesLeft.innerText = `Moves Left: ${10 - moves}`;

      const roundWinner = getRoundWinner(playerChoice);
      updateScore(roundWinner);
      displayRoundWinner(roundWinner);
      displayMovesleft(roundWinner);
    });
  });
};

initGame();

function getRoundWinner(playerChoice) {
  const computerChoice = getComputerChoice();
  const roundWinner = playRound(playerChoice, computerChoice);

  return roundWinner;
}

function getComputerChoice() {
  const picksKeys = Object.keys(picks); //The Object.keys select all the Keys of the picks object.
  computerChoice = picksKeys[Math.floor(Math.random() * picksKeys.length)];

  document
    .getElementById(`computer-${computerChoice}`)
    .classList.add("computer-choice-active");

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  console.log(`Computer picked: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return "tie";
  }
  if (picks[playerSelection].beats === computerSelection) {
    return "player";
  } else {
    return "computer";
  }
}

function updateScore(roundWinner) {
  if (roundWinner !== "tie") {
    score[`${roundWinner}Score`] += 1;
    document.querySelector(`.${roundWinner}-count`).innerText =
      score[`${roundWinner}Score`];
  }
}

function displayRoundWinner(roundWinner) {
  resultElement.innerHTML =
    roundWinner === "tie" ? "It's a tie" : `${roundWinner} won this round!`;
}

function displayMovesleft(updateScore) {
  // movesLeft.innerHTML;
  if (moves > 10) {
    movesLeft.innerHTML = `Game Over ${updateScore} Won`;
    resetRoundButton.disabled = true;
  } else {
    ("continue palying ");
  }
  // moves >= 10 ? `Game Over ${roundWinner} won` :` moves === 0 Reset Game`;
}

function resetRound() {
  document
    .getElementById(playerChoice)
    .classList.remove("player-choice-active");
  document
    .getElementById(`computer-${computerChoice}`)
    .classList.remove("computer-choice-active");

  resultElement.innerHTML = "";
  isPlaying = true;
}

function resetAllbutton() {
  document
    .getElementById(playerChoice)
    .classList.remove("player-choice-active");
  document
    .getElementById(`computer-${computerChoice}`)
    .classList.remove("computer-choice-active");
  isPlaying = true;
}

// previos code addapted only for terminal play!!!

/*
const picks = {
  rock: {
    beats: "scissors",
  },
  paper: {
    beats: "rock",
  },
  scissors: {
    beats: "paper",
  },
};

function computerPlay() {
  const picksKeys = Object.keys(picks); //The Object.keys select all the Keys of the picks object.

  return picksKeys[Math.floor(Math.random() * picksKeys.length)];
}

// console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
  console.log(`Computer picked: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return "tie";
  }
  if (picks[playerSelection].beats === computerSelection) {
    return "player";
  } else {
    return "computer";
  }
}

function getWinner(score) {
  if (score.player === score.computer) {
    console.log(`It's a tie!`);
  } else if (score.player > score.computer) {
    console.log(`Player won!`);
  } else {
    console.log(`Computer won!`);
  }
}

function game() {
  let score = {
    tie: 0,
    player: 0,
    computer: 0,
  };

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter rock, paper or scissors");
    const computerSelection = computerPlay();
    const winner = playRound(playerSelection, computerSelection);
    score[winner] += 1;
  }
}
*/
