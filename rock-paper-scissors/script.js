// function to get computer's play of rock, paper or scissors
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber > 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function for player to choose rock, paper or scissors
function getHumanChoice () {
    let humanChoice = prompt("Choose rock, paper or scissors:").toLowerCase(); // case insensitive
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("Invalid choice. Please select one of Rock, Paper or Scissors.");
        humanChoice = prompt("Choose Rock, Paper or Scissors:").toLowerCase();
    }
    return humanChoice
}

// function to play 5 rounds of game
function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let draws = 0;

    // function to enable a round to be played
    function playRound(computerChoice, humanChoice) {
        console.log("Computer: " + computerChoice);
        console.log("You: " + humanChoice);

        if (computerChoice === humanChoice) {
            console.log("It's a draw!");
            draws ++;
        } else if ((computerChoice === "rock" && humanChoice === "paper") 
                || (computerChoice === "paper" && humanChoice === "scissors") 
                || (computerChoice === "scissors" && humanChoice === "rock")) {
            console.log("You win!");
            humanScore ++;
        } else {
            console.log("Computer wins :(");
            computerScore ++;
        }
        console.log("Score is " + humanScore + ":" + computerScore);
    }

    // play 5 rounds
    for (let i = 1; i <= 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        console.log(playRound(computerChoice, humanChoice));
    }

    // print final score to screen
    console.log("You won " + humanScore + " and drew " + draws + " out of 5 rounds.")

    if (computerScore > humanScore) {
        console.log("Bad luck! Computer wins!")
    } else {console.log("Yay! You win!")}
}

// run the game
console.log(playGame())