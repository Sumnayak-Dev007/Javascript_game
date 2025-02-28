let userScore = 0;
let compScore = 0;

// DOM Elements
const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const container = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const userChoiceDisplay = document.querySelector("#user-choice");
const compChoiceDisplay = document.querySelector("#comp-choice");


// Generate Computer Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

// Handle User Click
Choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        container.style.backgroundColor = "forestgreen";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        container.style.backgroundColor = "firebrick";
    }
};

// Draw Game
const drawGame = () => {
    msg.innerText = "It's a draw. Play again!";
    container.style.backgroundColor = "#081b31";
};

// Play Game Logic
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    
    // Display User Choice
    const userChoiceImage = document.querySelector(`#${userChoice} img`).src;
    userChoiceDisplay.innerHTML = `<img src="${userChoiceImage}" class="rounded-full w-full h-full">`;
    
    // Ensure choice display is visible
    userChoiceDisplay.style.display = "flex";
    compChoiceDisplay.style.display = "flex";

    // Display Computer Choice
    const compChoiceImage = document.querySelector(`#${compChoice} img`).src ;// Adjust path if needed
    compChoiceDisplay.innerHTML = `<img src="${compChoiceImage}" class="rounded-full w-full h-full">`;

    // Determine Winner
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = (userChoice === "rock" && compChoice === "scissors") ||
                      (userChoice === "paper" && compChoice === "rock") ||
                      (userChoice === "scissors" && compChoice === "paper");
        showWinner(userWin, userChoice, compChoice);
    }
};
