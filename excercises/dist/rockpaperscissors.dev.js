"use strict";

//this function selects rock, paper or scissors randomly from an array
//as the computer option
function getComputerChoice() {
  return choice;
}

var game = function game() {
  var playerScore = 0;
  var computerScore = 0;

  var gameOver = function gameOver(playerScore, computerScore) {
    if (playerScore > computerScore) {
      gameWinner.textContent = "player won the game";
    } else if (playerScore < computerScore) {
      gameWinner.textContent = "computer won the game";
    }

    var playGame = function playGame() {
      var playerOptions = [rock, paper, scissors];
      var computerOption = ["rock", "paper", "scissors"];
      playerOptions.forEach(function (button) {
        button.addEventListener('click', function () {
          var computerChoice = computerOption[Math.floor(Math.random() * computerOption.length)];
          winner(this.innerText, computerChoice);
        });
      });

      var winner = function winner(player, computer) {
        var result = document.querySelector(".gameWinner");
        var playerScoreCount = document.querySelector(".playerScore");
        var computerScoreCount = document.querySelector(".computerScore");
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player === computer) {
          gameWinner.textContent = "Tie";
        }

        if (player === 'rock' && computer === 'scissors') {
          gameWinner.textContent = "Player Won";
          playerScoreCount++;
          playerScore.textContent = playerScoreCount;
        }

        if (player === 'paper' && computer === 'rock') {
          gameWinner.textContent = "Player Won";
          playerScore++;
          playerScoreCount.textContent = playerScore;
        }

        if (player === 'scissors' && computer === 'paper') {
          gameWinner.textContent = "Player Won";
          playerScoreCount++;
          playerScore.textContent = playerScoreCount;
        }

        if (player === 'rock' && computer === 'paper') {
          gameWinner.textContent = "Computer Won";
          computerScoreCount++;
          computerScore.textContent = computerScoreCount;
        }

        if (player === 'paper' && computer === 'scissors') {
          gameWinner.textContent = "Computer Won";
          computerScore.textContent = computerScoreCount;
        }

        if (player === 'scissors' && computer === 'rock') {
          gameWinner.textContent = "Computer Won";
          computerScore.textContent = computerScoreCount;
        }

        if (playerScoreCount >= 5) {
          gameOver(playerScoreCount, computerScoreCount);
        } else if (computerScore >= 5) {
          gameOver(playerScore, computerScore);
        }
      };
    };

    playGame();
  };
};

var container = document.querySelector('.container');
var rock = document.createElement('button');
rock.classList.add("rockBtn");
rock.textContent = "rock";
var paper = document.createElement('button');
paper.classList.add("paperBtn");
paper.textContent = "paper";
var scissors = document.createElement('button');
scissors.classList.add("scissorsBtn");
scissors.textContent = "scissors";
var score = document.createElement('div');
score.classList.add("score");
score.style.display = "flex";
score.style.justifyContent = "space-between";
var computerScore = document.createElement('div');
computerScore.classList.add("computerScore");
computerScore.textContent = "0";
var playerScore = document.createElement('div');
playerScore.classList.add("playerScore");
playerScore.textContent = "0";
var gameWinner = document.createElement('div');
gameWinner.classList.add("gameWinner");
gameWinner.textContent = "Winner:";
score.appendChild(playerScore);
score.appendChild(computerScore);
container.appendChild(score);
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
game();