
//computer returns randomly either ‘Rock’, ‘Paper’ or ‘Scissors'

//create variable of array for possible values
const possible_choices = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    //take random value from the array
    let ComputerChoice = possible_choices[Math.floor(Math.random()* possible_choices.length)];

    return(ComputerChoice)
}

//get user input
    let playerSelection = (prompt('Please choose rock, paper or scissors:')).toLowerCase();
    console.log(playerSelection)
//create variable to have stable value (for console.log)
    let computerSelection = getComputerChoice();
    console.log(computerSelection);

//play single round of game

function playRound(playerSelection, computerSelection){
   
    //make conditions
    if (playerSelection === computerSelection){
        console.log('It\'s a tie!');
        return null;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You Win! Rock beats Scissors');
        return true;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You Win! Paper beats Rock');
        return true;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You Win! Scissors beat rock');
        return true;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You Lose! Paper beats Rock');
        return false;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You Lose! Scissors beat Paper');
        return false;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You Lose! Rock beats Scissors');
        return false;
    } else {
        console.log('Wrong input!');
        return;
    }
}


function game(){
    for (let i = 0; i < 5; i++) {
        let gameResult = playRound();
        console.log(gameResult)
     }
    

    //  let overallResult = Array(gameResult);
    //  console.log(overallResult)
}
game()


//get input form user, make it case-insensitive

//compare the computer choice with users input


//three choices for output
//return a string "You Lose! Paper beats Rock" or "You Win! ... beats ..."