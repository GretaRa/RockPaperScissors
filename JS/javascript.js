//create variable of array for possible values
const possible_choices = ['rock', 'paper', 'scissors'];

//computer returns randomly either ‘rock’, ‘paper’ or ‘scissors'
function getComputerChoice(){
    //take random value from the array
    let ComputerChoice = possible_choices[Math.floor(Math.random()* possible_choices.length)];

    return(ComputerChoice);
}

//play single round of game

function playRound(playerSelection, computerSelection){
   
    //make conditions
    if (playerSelection === computerSelection){
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = 'This turn is a tie';
        //console.log('This turn is a tie');
        return null;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = 'You Win this turn! Rock beats Scissors';
        //console.log('You Win this turn! Rock beats Scissors');
        return true;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = 'You Win this turn! Paper beats Rock';
        //console.log('You Win this turn! Paper beats Rock');
        return true;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = 'You Win this turn! Scissors beat rock';
        //console.log('You Win this turn! Scissors beat rock');
        return true;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = 'You Lose this turn. Paper beats Rock';
        //console.log('You Lose this turn. Paper beats Rock');
        return false;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = 'You Lose this turn. Scissors beat Paper';
        //console.log('You Lose this turn. Scissors beat Paper');
        return false;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = 'You Lose this turn. Rock beats Scissors';
        //console.log('You Lose this turn. Rock beats Scissors');
        return false;
    } else {
        const roundResult = document.querySelector('.roundResult');
        roundResult.textContent = 'Wrong input!';
        //console.log('Wrong input!');
        return;
    }
}
let computerSelection = getComputerChoice();
console.log(computerSelection);

// //play a game of 5 rounds and determine if player won or lost
// function game(){
//     //create starting point of scores for player and computer
//     let playerScore = 0;
//     let computerScore = 0;
//     //play 5 games, repeat while the result is not known to get a value(in case of wrong input)
//     //for (let i = 0; i < 5; i++) {
//         let outcome;
//         while (outcome === undefined){
//             //get user input
//             let playerSelection = (prompt('Please choose rock, paper or scissors:')).toLowerCase();
//             //console.log(playerSelection);

//             let computerSelection = getComputerChoice();
//             //console.log(computerSelection);
            
//             outcome = playRound(playerSelection, computerSelection);
//             //console.log(outcome);
//         }
//         //when player wins (true) a point gets added to the player's score sheet, if loses, to computer score sheet
//         if (outcome === true){
//             playerScore++ ;
//             //console.log(playerScore);
//         } else if(outcome === false){
//             computerScore++ ;
//             //console.log(computerScore);
//         }
//      //}
//     //determine if player won by checking who got the higher score. If scores are equal - its a tie
//     if (playerScore === computerScore){
//         console.log('This game is a tie!');
//     } else if (playerScore > computerScore){
//         console.log('You Win the game! Congratulations.');
//     } else {
//         console.log('You Lose the game. Better luck next time.');
//     }
// }
// game();

const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', (round) => {
    playRound('rock', computerSelection);
});

const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', (round) => {
    playRound('paper', computerSelection);
});

const btnScissors = document.querySelector('.btnScissors');
btnScissors.addEventListener('click', (round) => {
    playRound('scissors', computerSelection);
});

