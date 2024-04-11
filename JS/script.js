const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const player1_score = document.querySelector(".score");
const computer_score = document.querySelector(".score1");
let player_1_image = document.getElementById("player--image");
let computer_image = document.getElementById("computer--image");

let container = document.querySelector("body");

let score = 0;
let score1 = 0;
let random_image;

function Computer() {
    random_image = Math.floor(Math.random() * 3) + 1;
    computer_image.src = `../Images/p-${random_image}.png`;
}

function Game() {
    function Rock() {
        Computer();
        player_1_image.src = `./Images/p-1.png`;
        Scoring(1, random_image);
    }

    function Paper() {
        Computer();
        player_1_image.src = `./Images/p-2.png`;
        Scoring(2, random_image);
    }

    function Scissor() {
        Computer();
        player_1_image.src = `./Images/p-3.png`;
        Scoring(3, random_image);
    }

    rock.addEventListener("click", Rock);
    paper.addEventListener("click", Paper);
    scissor.addEventListener("click", Scissor);
}


let Scoring = function(player1, computer) {
    if (player1 === computer) {
        console.log("Tie");
    }
    else if ((player1 == 1 && computer == 3) || (player1 == 2 && computer == 1) || (player1 == 3 && computer == 2)) {
        if (score < 10) {
            score++;
            if (score === 10) {
                alert("Player 1 Wins");
                Winner(score);
            }
        }
        player1_score.textContent = score;
    }
    else {
        if (score1 < 10) {
            score1++;
            if (score1 === 10) {
                alert("Computer Wins");
                Winner(score1);
            }
        }
        computer_score.textContent = score1;
    }
}

let Winner = function(winner) {
    if (winner === 10) {
        container.classList.add("win");
    }
}

Game();