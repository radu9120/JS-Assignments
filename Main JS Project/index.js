"use strict";

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

  console.log(score);
  getWinner(score);
}
