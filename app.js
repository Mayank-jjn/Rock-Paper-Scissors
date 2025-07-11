let user_score = 0;
let computer_score = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const user_scorePara = document.querySelector("#user");
const computer_scorePara = document.querySelector("#computer");

// Function to generate random computer choice
const gen_computer_choice = () => {
    const options = ["rock", "paper", "scissor"];
    const random_idx = Math.floor(Math.random() * 3);
    return options[random_idx];
}

// Function to handle draw
const draw = () => {
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "#F4C430";
}

// Function to display winner
const show_winner = (user_win, user_choice, computer_choice) => {
    if (user_win) {
        user_score++;
        user_scorePara.innerText = user_score;
        msg.innerText = `You Win! Your ${user_choice} beats ${computer_choice}`;
        msg.style.backgroundColor = "#6C4AB6"; 
    } else {
        computer_score++;
        computer_scorePara.innerText = computer_score;
        msg.innerText = `You Lose. ${computer_choice} beats Your ${user_choice}`;
        msg.style.backgroundColor = "#F86F03"; 
    }
}

// Main play function
const play = (user_choice) => {
    const computer_choice = gen_computer_choice();

    if (user_choice === computer_choice) {
        draw();
    } else {
        let user_win = true;
        if (
            (user_choice === "rock" && computer_choice === "paper") ||
            (user_choice === "paper" && computer_choice === "scissor") ||
            (user_choice === "scissor" && computer_choice === "rock")
        ) {
            user_win = false;
        }
        show_winner(user_win, user_choice, computer_choice);
    }
}

// Add click listeners to all choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        play(user_choice);
    });
});
