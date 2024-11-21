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
    let userInput = prompt(`Please enter one of the valid choices between: "rock", "paper" or "scissors" `, '');
    // // make it case insensitive calling toLowerCase only if he doesn't press esc
    if (userInput != null){
        userInput = userInput.toLowerCase();
    } 
    
    // initialize sentry variable for while loop
    let keepGoing = true;

    // while loop till the user enter a valid input
    while(keepGoing){
        // stop prompting if Esc or empty string
        if(userInput === null || userInput === ''){
            return userInput;
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


    // initialize two global variables to keep track of the score
let humanScore = 0;
let computerScore = 0;

// create a function named playRound with two parameters: humanChoice and computerChoice
// the function increments the humanScore or computerScore variable based on the round winner
    function playRound(humanChoice, computerChoice) {

        // if human doesn't enter a value or presses esc stop game
        if (humanChoice === null || humanChoice === '')
        {
            alert('Human did not enter a value, stop game');
            return humanChoice;
        }
        // how to play Rock, Paper, Scissors:
        // if both players throw th same object, it's a tie. Play again
        // rock "crushes" scissors, but is "covered" by paper
        // paper "covers" rock but is "cut" by scissors
        // scissors is "crushed" by rock but "cuts" paper

        if(humanChoice === computerChoice){
            alert(`It's a tie! Play again`);
            return playRound(getHumanChoice(), getComputerChoice());
        }
        // if user beats the computer increment humanScore
        if  ( ((humanChoice === 'rock') && (computerChoice === 'scissors')) 
            || ((humanChoice === 'paper') && (computerChoice === 'rock')) 
            || ((humanChoice === 'scissors') && (computerChoice === 'paper')) 
            )
            {
                humanScore++;
            }
        // else the computer wins and computerScore gets incremented
        else{
            computerScore++
        }
    }

    // add event listeners to buttons
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.id, getComputerChoice())
        });
    });
    
    
    
    
    
    
    
    
    /* // initialize sentry for while loop
    let counter = 0;
    // initialize condition for while loop
    let keepGoing = true;
    // use while loop to call playRound 5 times
    while(keepGoing){
        let humanSelection= getHumanChoice();
        let computerSelection = getComputerChoice();
        //stop game if user enters esc or empty string
        let signal = playRound(humanSelection, computerSelection);
        if (signal === null || signal === '')   return;
        // increment counter
        counter++;
        if (counter >= 5){
            keepGoing = false;
        }
    } */
/*     // return the winner and score
    winner = (humanScore > computerScore) ? 'User' : 'Computer';  
    console.log(`Score:
User: ${humanScore}
Computer: ${computerScore}
Winner is: ${winner}`); */




