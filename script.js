// function to get a random number between 0 and 2 (both included)
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

// function that randomly returns "rock", "paper" or "scissors"
function getComputerChoice() {
    // create 3 variables and initialize them respectively with 'rock', 'paper', 'scissors' values
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    
    // create a variable to store a random number between 0 and 2 - both included -
    let random = getRandomInt();

    // conditional statements that randomly return rock, paper or scissors depending on random
    if (random === 0){
        return rock;
    }
    if (random === 1){
        return paper;
    }
    if (random === 2){
        return scissors;
    }
}