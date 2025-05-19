const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const playTo = document.querySelector("#playto");
const resetButton = document.querySelector("#reset");
const playingToText = document.querySelector("label[for='playto']");
const winner = document.querySelector("#winner");

const p1ScoreText = document.querySelector("#p1Display");
const p2ScoreText = document.querySelector("#p2Display");

const canvas = document.querySelector("#confetti")
const jsConfetti = new JSConfetti()

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(playTo.value);
// let playingToText.innerText = `Play to: ${playTo.value}`;

p1Button.classList.toggle('enable-p1btn')
p2Button.classList.toggle('enable-p2btn')

p1Button.addEventListener("click", function () {
    p1Score++;
    p1ScoreText.innerText = p1Score;

    if (p1Score == winningScore) {
        endGame("Player 1")
    }
});

p2Button.addEventListener("click", function () {
    p2Score++;
    p2ScoreText.innerText = p2Score;

    if (p2Score == winningScore) {
        endGame("Player 2")
    }
});

playTo.addEventListener("change", function () {
    winningScore = playTo.value;
    resetScore()
});

resetButton.addEventListener("click", resetScore);

function endGame(player) {
    jsConfetti.addConfetti({
   emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
}).then(() => {
    // change the text of the winner element
        winner.innerText = player + " wins!";
        winner.classList.add('winner')
    }
    )

    p1Button.classList.add('disable-btn')
    p2Button.classList.add('disable-btn')
    p1Button.disabled = true
    p2Button.disabled = true
}

function resetScore() {
    if (p1Score == 0 & p2Score == 0){
        console.log("already reset")
    } else {
        winner.innerText = "";
        winner.classList.remove('winner')
        p1Score = 0;
        p2Score = 0;
        p1ScoreText.innerText = p1Score;
        p2ScoreText.innerText = p2Score;
        p1Button.disabled = false
        p2Button.disabled = false
        p1Button.classList.remove('disable-btn')
        p2Button.classList.remove('disable-btn')
        p1Button.classList.add('enable-p1btn')
        p2Button.classList.add('enable-p2btn')
    }
}