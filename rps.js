let getComputerChoice = () => {
    let choice;
    let randomNumber = Math.random();
    randomNumber > 0.66 ? choice = "rock" :
        randomNumber > 0.33 ? choice = "paper" : choice = "scissors";
    return choice;
}

let getHumanChoice = () => {
    let choice = prompt("Choose between rock, paper, and scissors!");
    return choice.toLowerCase();
}

let playRound = () => {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let status = "";

    switch(true){
        case(humanChoice === "rock" && computerChoice === "paper"):
            status = "lose";
            break;
        case(humanChoice === "paper" && computerChoice === "scissors"):
            status = "lose";
            break;
        case(humanChoice === "scissors" && computerChoice === "rock"):
            status = "lose";
            break;
        case(humanChoice === "rock" && computerChoice === "rock"):
            status = "draw";
            break;
        case(humanChoice === "paper" && computerChoice === "paper"):
            status = "draw";
            break;
        case(humanChoice === "scissors" && computerChoice === "scissors"):
            status = "draw";
            break;
        case(humanChoice === "rock" && computerChoice === "scissors"):
            status = "win"; 
            break;
        case(humanChoice === "paper" && computerChoice === "rock"):
            status = "win";
            break;
        case(humanChoice === "scissors" && computerChoice === "paper"):
            status = "win";
            break;
    }

    let statusAlert = alert(`You chose ${humanChoice} and I chose ${computerChoice}. You ${status}!`)
    statusAlert;
    return status;
}

let playGame = () => {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++){
        let status = playRound();
        status === "win" ? humanScore++ : 
            status === "lose" ? computerScore++ : "" // empty string = continue
    }
    let winStatus;
    humanScore > computerScore ? winStatus = "win" :
        humanScore === computerScore ? winStatus = "draw" : 
            winStatus = "lose";
    alert(`Your score: ${humanScore}\nComputer score: ${computerScore}. You ${winStatus}!`);
}