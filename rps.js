console.log("hello world")

// function return getComputerChoice
function getComputerChoice(){
    // use Math.random and floor to select number between 0, 1, 2
    const random_number = Math.floor(Math.random() * 3);

    switch(random_number){
        case 0:
            return "rock";
        case 1:
            return "paper"
        default:
            return "scissor";
    }
}

// function propmt for user input
function getHumanChoice(){
    const user_choice = prompt("Enter rock, paper, or scissor")

    return user_choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    // make human choice case-insensitive
    humanChoice = humanChoice.toLowerCase();
    
    // conditions for round result
    if(humanChoice == computerChoice){
        console.log(`Tie, ${humanChoice} vs ${computerChoice}`)
        return 0;
    }
    else if (humanChoice == "rock" && computerChoice == "paper" 
        || humanChoice == "paper" && computerChoice == "scissor" 
        || humanChoice == "scissor" && computerChoice == "rock"
    ){
        console.log(`You Lose This Round! ${computerChoice} beats ${humanChoice}.`)
        return -1;
    }else{
        console.log(`You Win This Round! ${humanChoice} beats ${computerChoice}.`)
        return 1;
    }
}

// function to play 5 round and return output of the game
function playGame(){
    let humanScore = 0,computerScore = 0, humanChoice, computerChoice, winner;

    for(let i = 1; i <= 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        winner = playRound(humanChoice, computerChoice);
        if(winner == 1){
            humanScore++;
        }
        else if(winner == -1){
            computerScore++;
        }
    }

    if(computerScore == humanChoice){
        console.log("This Game is a Tie.")
    }
    else if(computerScore > humanScore){
        console.log("You Lose Thise Game.")
    }
    else if(computerScore < humanScore){
        console.log("You Win This Game.")
    }

    console.log(`Final Score, Human: ${humanScore} and Computer ${computerScore}`)
}

playGame()
