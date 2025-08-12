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

function playRound(humanChoice, computerChoice){
    const resultdisplay = document.querySelector('div');
    let resultText = document.createElement('p')

    humanChoice = humanChoice.toLowerCase();

    if(humanChoice == computerChoice){
        resultText.textContent = `Tie, ${humanChoice} vs ${computerChoice}.`
    }
    else if (humanChoice == "rock" && computerChoice == "paper" 
        || humanChoice == "paper" && computerChoice == "scissor" 
        || humanChoice == "scissor" && computerChoice == "rock"
    ){
        resultText.textContent = `You Lose This Round! ${computerChoice} beats ${humanChoice}.`
        ++document.querySelector("#computerPoints").textContent
    }else{
        resultText.textContent = `You Win This Round! ${humanChoice} beats ${computerChoice}.`
        ++document.querySelector("#humanPoints").textContent
    }

    resultdisplay.appendChild(resultText)

    let winner = "";

    if(document.querySelector("#computerPoints").textContent == 5){
        winner = "Computer"
    }

    if(document.querySelector("#humanPoints").textContent == 5){
        winner = "You"
    }

    if(winner && !document.querySelector("#reset")){
        const winnerText = document.createTextNode(`${winner} reach 5 points! ${winner} are the winner.
            \n Press the reset button to rest the game or keep playing.`)
    
        document.querySelector('div').appendChild(winnerText)

        const resetgame = document.createElement("button")
        resetgame.setAttribute("id", "reset")
        resetgame.textContent = "Reset the Game."
        document.querySelector('body').appendChild(resetgame)
        
        resetgame.addEventListener("click", () => {
            document.querySelector("div").textContent = "";
            document.querySelector("#computerPoints").textContent = 0;
            document.querySelector("#humanPoints").textContent = 0;
            resetgame.remove();
        });
    }
}

function playGame(){
    const docBody = document.querySelector("body");

    const rockButton = document.createElement("button");
    rockButton.textContent = "rock";
    
    const paperButton = document.createElement("button");
    paperButton.textContent = "paper";
    
    const scissorButton = document.createElement("button");
    scissorButton.textContent = "scissor";

    rockButton.addEventListener("click", () => {playRound('rock', getComputerChoice())});
    paperButton.addEventListener("click", () => {playRound('paper', getComputerChoice())});
    scissorButton.addEventListener("click", () => {playRound('scissor', getComputerChoice())});

    docBody.appendChild(rockButton);
    docBody.appendChild(paperButton);
    docBody.appendChild(scissorButton);

    const humanSocre = document.createElement("p")
    const humanPoints = document.createElement("span")
    humanPoints.setAttribute("id", "humanPoints")
    humanPoints.textContent = 0;

    const computerScore = document.createElement("p")
    const computerPoints = document.createElement("span")
    computerPoints.setAttribute("id", "computerPoints")
    computerPoints.textContent = 0;

    humanSocre.textContent = "Human Score: ";
    humanSocre.appendChild(humanPoints)
    computerScore.textContent = "Computer Score: ";
    computerScore.appendChild(computerPoints)

    docBody.appendChild(humanSocre)
    docBody.appendChild(computerScore)

    const resultdiv = document.createElement("div");
    docBody.appendChild(resultdiv);
}

playGame()
