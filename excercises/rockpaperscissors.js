const game = () => {
	let playerScoreCount = 0;
	let computerScoreCount = 0;

	const playGame = () => {

		const rock=document.querySelector('.rockBtn')
		const paper=document.querySelector('.paperBtn')
		const scissors= document.querySelector('.scissorsBtn')
		const playerOptionsList = [rock,paper,scissors];
		const computerOptionsList = ["rock","paper","scissors"];

		playerOptionsList.forEach(option => {
			option.addEventListener('click',function(){
				
				const computerNumber = Math.floor(Math.random()*3);
				const	computerChoice = computerOptionsList[computerNumber];

				winner(this.innerText,computerChoice);

				if (playerScoreCount === 5 || computerScoreCount === 5){
					gameOver();
				}
			})
		})
	}

	const winner = (player,computer) => {
		const result = document.querySelector('.gameWinner');
		const playerScore = document.querySelector(".playerScore")
		const computerScore = document.querySelector(".computerScore")
		console.log("im on winner")
		if (player==computer){
			result.textContent = "Tie";
			playerScore.textContent = playerScoreCount;
			console.log("its a tie")
		}
		else if (player == "rock" && computer == "scissors"){
			result.textContent = 'You Win!';
			playerScoreCount++;
			playerScore.textContent = playerScoreCount;
		}
		else if (player == "paper" && computer == "rock"){
			result.textContent = 'You Win!';
			playerScoreCount++;
			playerScore.textContent = playerScoreCount;
		}
		else if (player == "scissors" && computer == "paper"){
			result.textContent = 'You Win!';
			playerScoreCount++;
			playerScore.textContent = playerScoreCount;
		}
		else if (player === "rock" && computer === "paper"){
			result.textContent = 'You lose!';
			computerScoreCount++;
			computerScore.textContent = computerScoreCount;
		}
		else if (player === "paper" && computer === "scissors"){
			result.textContent = "You lose!";
			computerScoreCount++;
			computerScore.textContent = computerScoreCount;
		}
		else if (player === "scissors" && computer === "rock"){
			result.textContent = 'You lose!';
			computerScoreCount++;
			computerScore.textContent = computerScoreCount;
		}
	}

	const gameOver = () => {
		const rock = document.querySelector('.rockBtn');
		const paper = document.querySelector('.paperBtn')
		const scissors = document.querySelector('.scissorsBtn')
		rock.remove(),paper.remove(),scissors.remove();
		const playerOptions = document.querySelector('.playerOptions')
		const restart = document.createElement('button')
		restart.classList.add("restart");
		restart.textContent = "Restart game";
		playerOptions.appendChild(restart);
		restart.addEventListener('click', function () {
			window.location.reload();
			restart.remove();
		})
		
	}

	playGame();
}

{const playerOptions = document.querySelector('.playerOptions');

const rock = document.createElement('button');
rock.classList.add("rockBtn");
rock.textContent = "rock";

const paper = document.createElement('button');
paper.classList.add("paperBtn");
paper.textContent = "paper";

const scissors = document.createElement('button');
scissors.classList.add("scissorsBtn");
scissors.textContent = "scissors";

const container = document.querySelector('.container')

const score = document.createElement('div')
score.classList.add("score")
score.style.display = "flex";
score.style.justifyContent = "space-between";

const computerScore = document.createElement('div')
computerScore.classList.add("computerScore")
computerScore.textContent = "0";

const playerScore = document.createElement('div')
playerScore.classList.add("playerScore")
playerScore.textContent = "0";

const gameWinner = document.createElement('div')
gameWinner.classList.add("gameWinner")
gameWinner.textContent = "Winner:";


score.appendChild(playerScore);
score.appendChild(computerScore);
score.appendChild(gameWinner);
container.appendChild(score);


playerOptions.appendChild(rock);
playerOptions.appendChild(paper);
playerOptions.appendChild(scissors);}

game();