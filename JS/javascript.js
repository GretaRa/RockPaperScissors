
//computer returns randomly either ‘Rock’, ‘Paper’ or ‘Scissors'

//create variable of array for possible values
const possible_choices = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    //take random value from the array
    let ComputerChoice = possible_choices[Math.floor(Math.random()* possible_choices.length)];

    return(ComputerChoice)
}

//play single round of game

function playRound(){
    //get user input
    let playerSelection = (prompt('Please choose rock, paper or scissors:')).toLowerCase();
    //create variable to be stable to have stable value (like for console.log)
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    //make conditions
    if (playerSelection === computerSelection){
        alert('It\'s a tie!');
    } else if {
        
    }
}
playRound()

//get input form user, make it case-insensitive

//compare the computer choice with users input


//three choices for output
//return a string "You Lose! Paper beats Rock" or "You Win! ... beats ..."