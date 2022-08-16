//create variable of array for possible values
const possible_choices = ['rock', 'paper', 'scissors'];

//computer returns randomly either ‘rock’, ‘paper’ or ‘scissors'
function getComputerChoice(){
    //take random value from the array
    let ComputerChoice = possible_choices[Math.floor(Math.random()* possible_choices.length)];

    return(ComputerChoice);
}

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

//variables to record the scores
let playerScore = 0;
let computerScore = 0;

//add element for tracking scores
userPoints.textContent = `Player score: ${playerScore}`;
computerPoints.textContent = `Computer score: ${computerScore}`;

//play single round of game

function playRound(playerSelection, computerSelection){

    //make conditions
    if (playerSelection === computerSelection){
        
        roundResult.textContent = 'This turn is a tie';
        playerScore++;
        computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        roundResult.textContent = 'You Win this turn! Rock beats Scissors';
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        roundResult.textContent = 'You Win this turn! Paper beats Rock';
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        roundResult.textContent = 'You Win this turn! Scissors beat rock';
        playerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        roundResult.textContent = 'You Lose this turn. Paper beats Rock';
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        roundResult.textContent = 'You Lose this turn. Scissors beat Paper';
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        roundResult.textContent = 'You Lose this turn. Rock beats Scissors';
        computerScore++;
    }   
}

//when pressing button player selects their choice wether its rock paper or scissors
//button then plays a turn, if player wins, a point is awarded to him
//if player loses a point goes to computer score
//when one of the running scores have 5 points, a player wins or loses and game ends/page refreshes

const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    //add element for tracking scores
    userPoints.textContent = `Player score: ${playerScore}`;
    computerPoints.textContent = `Computer score: ${computerScore}`;

    if (playerScore === 5){
        alert('You win!!!')
        document.location.reload();
        clearInterval(interval);
    } else if(computerScore === 5){
        alert('You lose..')
        document.location.reload();
        clearInterval(interval);
    }
});

const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    //add element for tracking scores
    userPoints.textContent = `Player score: ${playerScore}`;
    computerPoints.textContent = `Computer score: ${computerScore}`;

    if (playerScore === 5){
        alert('You win!!!')
        document.location.reload();
        clearInterval(interval);
    } else if(computerScore === 5){
        alert('You lose..')
        document.location.reload();
        clearInterval(interval);
    }
});

const btnScissors = document.querySelector('.btnScissors');
btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    //add element for tracking scores
    userPoints.textContent = `Player score: ${playerScore}`;
    computerPoints.textContent = `Computer score: ${computerScore}`;
    
    if (playerScore === 5){
        alert('You win!!!')
        document.location.reload();
        clearInterval(interval);
    } else if(computerScore === 5){
        alert('You lose..')
        document.location.reload();
        clearInterval(interval);
    }
    
});