let userScore = 0;
let compScore = 0;

// DOM OBJECTS //
const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const container = document.querySelector(".msg-container");
const uerScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");
const userChoiceDisplay = document.querySelector("#user-choice");
const compChoiceDisplay = document.querySelector("#comp-choice");

// COMP CHOICE //
const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

// USER CHOICE //
Choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// INTERACTIVE UI\UX //
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        uerScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        container.style.backgroundColor = "forestgreen";
        container.style.border = "2px ridge darkgreen";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        container.style.backgroundColor = "firebrick";
        container.style.border = "2px ridge darkred";
    }

    if (userScore > compScore) {
        user.style.boxShadow = "0 0 10px green";
        comp.style.boxShadow = "0 0 10px red";
    } else if (compScore > userScore) {
        comp.style.boxShadow = "0 0 10px green";
        user.style.boxShadow = "0 0 10px red";
    } else {
        user.style.boxShadow = "0 0 10px blue";
        comp.style.boxShadow = "0 0 10px blue";
    }
};

// LOGIC BEHIND THE GAME //
const drawGame = () => {
    msg.innerText = "Game was a draw. Play again!";
    container.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    // Display user's choice
    const userChoiceImage = document.querySelector(`#${userChoice} img`).src;
    userChoiceDisplay.innerHTML = `<img src="${userChoiceImage}" class="rounded-full object-fill w-full h-full">`;
    
    // Ensure display divs are visible
    userChoiceDisplay.style.display = "flex";
    compChoiceDisplay.style.display = "flex";

    // Display computer's choice
    const compChoiceImage = `${compChoice}.png`; // Adjust this if images are in another folder
    compChoiceDisplay.innerHTML = `<img src="${compChoiceImage}" class="rounded-full object-fill w-full h-full">`;

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
