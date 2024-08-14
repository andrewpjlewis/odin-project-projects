const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const div = document.getElementById('results')



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
    return new Promise((resolve) => {
        rockButton.addEventListener('click', () => resolve('rock'));
        paperButton.addEventListener('click', () => resolve('paper'));
        scissorsButton.addEventListener('click', () => resolve('scissors'));
    });    
}

// function to play 5 rounds of game
async function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let draws = 0;

    for (let round = 1; round <= 5; round++) {
        const computerChoice = getComputerChoice();
        const humanChoice = await getHumanChoice();

        div.innerHTML = `<h2>Round ${round}</h2>`;
        div.innerHTML += `<p>Computer chose: ${computerChoice}</p>`;
        div.innerHTML += `<p>You chose: ${humanChoice}</p>`;

        if (computerChoice === humanChoice) {
            div.innerHTML += "<p>It's a draw!</p>";
            draws++;
        } else if (
            (computerChoice === "rock" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "rock")
        ) {
            div.innerHTML += "<p>You win this round!</p>";
            humanScore++;
        } else {
            div.innerHTML += "<p>Computer wins this round.</p>";
            computerScore++;
        }

        div.innerHTML += `<p>Score: You ${humanScore} - ${computerScore} Computer</p>`;
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before the next round
    }

    // Print final score to the screen
    div.innerHTML += `<h2>Final Score:</h2>`;
    div.innerHTML += `<p>You won ${humanScore} and drew ${draws} out of 5 rounds.</p>`;

    if (computerScore > humanScore) {
        div.innerHTML += `<p>Bad luck! Computer wins the game!</p>`;
    } else if (humanScore > computerScore) {
        div.innerHTML += `<p>Yay! You win the game!</p>`;
    } else {
        div.innerHTML += `<p>It's a tie overall!</p>`;
    }
}

// run the game
playGame()