// function to get a random number between 0 and 2 (both included)
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

// function that randomly returns "rock", "paper" or "scissors"
function getComputerChoice() {
    
    // create a variable to store a random number between 0 and 2 - both included -
    let random = getRandomInt();

    // conditional statements that randomly return 'rock', 'paper' or 'scissors' depending on random
    if (random === 0){
        return 'rock';
    }
    if (random === 1){
        return 'paper';
    }
    if (random === 2){
        return 'scissors';
    }
}

// create getHumanChoice function that will return one of the valid choices depending on what the user inputs
function getHumanChoice() {
    // prompt the user for a valid input and store the value in userInput variable
    // make it case insensitive calling toLowerCase
    let userInput = prompt(`Please enter one of the valid choices between: "rock", "paper" or "scissors" `, '').toLowerCase();
    
    // initialize sentry variable for while loop
    let keepGoing = true;

    // while loop till the user enter a valid input
    while(keepGoing){
        // stop prompting if Esc is entered
        if(userInput === null){
            return;
        }
        // check if the user enter one of the valid input. If he doesn't, prompt again for valid input
        if(userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors'){
            userInput = prompt(`Invalid input. Please enter one of the valid choices between: "rock", "paper" or "scissors". `, '');
        }

        // if userInput is a valid input, return userInput
        else{
            return userInput;
        }
    } 
}

// Initialize two global variables to keep track of the score
let humanScore = 0;
let computerScore = 0;

