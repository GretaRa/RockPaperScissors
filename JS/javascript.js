//create variable of array for possible values
const possible_choices = ['rock', 'paper', 'scissors'];

//computer returns randomly either ‘rock’, ‘paper’ or ‘scissors'
function getComputerChoice(){
    //take random value from the array
    let ComputerChoice = possible_choices[Math.floor(Math.random()* possible_choices.length)];

    return(ComputerChoice);
}

let buttons = document.querySelectorAll('button');
//select div container
const container = document.querySelector('.container');
//create element for showing overall scores
const userPoints = document.createElement('p');
userPoints.classList.add('userPoints');
container.appendChild(userPoints);

const computerPoints = document.createElement('p');
computerPoints.classList.add('computerPoints');
container.appendChild(computerPoints);

//create element for printing outcome of each round
const roundResult = document.createElement('p');
roundResult.classList.add('roundResult');
container.appendChild(roundResult);

//create final result output
const finalResult = document.createElement('p');
finalResult.classList.add('finalResult');
container.appendChild(finalResult);

//variables to record the scores
let playerScore = 0;
let computerScore = 0;

//add element for tracking scores
userPoints.textContent = `Your score: ${playerScore}`;
computerPoints.textContent = `Computer score: ${computerScore}`;

//play single round of game

function playRound(playerSelection, computerSelection){

    //make conditions
    if (playerSelection === computerSelection){
        roundResult.textContent = 'This turn is a tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        roundResult.textContent = 'You Win this turn! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        roundResult.textContent = 'You Win this turn! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        roundResult.textContent = 'You Win this turn! Scissors beat rock';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        roundResult.textContent = 'You Lose this turn. Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        roundResult.textContent = 'You Lose this turn. Scissors beat Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        roundResult.textContent = 'You Lose this turn. Rock beats Scissors';
    }   
}

function calcScore(){
    if (roundResult.innerHTML.includes('tie')){
        computerScore++;
        computerPoints.innerHTML = `Computer score: ${computerScore}`;
        playerScore++;
        userPoints.innerHTML = `Your score: ${playerScore}`;
        return;
    } else if (roundResult.innerHTML.includes('You Lose')){
        computerScore++;
        computerPoints.innerHTML = `Computer score: ${computerScore}`;
        return;
    } else if (roundResult.innerHTML.includes('You Win')){
        playerScore++;
        userPoints.innerHTML = `Your score: ${playerScore}`;
        return;
    }
}

function endGame() {
    if (computerScore === 5) finalResult.textContent = 'Computer wins..';
    if (playerScore === 5) finalResult.textContent = 'You win!';

    if (playerScore === 5 || computerScore === 5){
        for (let i = 0; i < buttons.length; i++){
            buttons[i].disabled = true;
        }
        const retry = document.querySelector('.retry');
        const retryBtn = document.createElement('button');
            retryBtn.classList.add('retryBtn');
            retryBtn.textContent = 'Try again';
            retry.appendChild(retryBtn);

        retryBtn.addEventListener('click', () => {
            document.location.reload();
            clearInterval(interval);
        });
    }
}


//when pressing button player selects their choice wether its rock paper or scissors
//button then plays a turn, if player wins, a point is awarded to him
//if player loses a point goes to computer score
//when one of the running scores have 5 points, a player wins or loses and game ends/page refreshes

const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    calcScore();
    endGame();
});

const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    calcScore();
    endGame();
});

const btnScissors = document.querySelector('.btnScissors');
btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    calcScore();
    endGame();
});