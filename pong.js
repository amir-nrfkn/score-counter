const player1 = {
    name: "Player 1",
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
    score: 0
}

const player2 = {
    name: "Player 2",
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
    score: 0
}


const playTo = document.querySelector("#playto");
const resetButton = document.querySelector("#reset");
const playingToText = document.querySelector("label[for='playto']");
const winner = document.querySelector("#winner");


const canvas = document.querySelector("#confetti")
const jsConfetti = new JSConfetti()

let winningScore = parseInt(playTo.value);
// let playingToText.innerText = `Play to: ${playTo.value}`;

// p1Button.classList.toggle('enable-p1btn')
// p2Button.classList.toggle('enable-p2btn')

function updateScore(player, opponent) {
    player.score++;
    player.display.innerText = player.score;
    if (player.score === winningScore) {
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        endGame(player);
    }
}

function endGame(player) {
    winner.innerText = player.name + " wins!";
    winner.classList.add('has-text-success', 'winner')

    jsConfetti.addConfetti({
   emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
})

    p1Button.disabled = true
    p2Button.disabled = true
}

function resetScore() {

    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
        winner.innerText = "Ping Pong Score Keeper";
        winner.classList.remove('has-text-success', 'winner')
    }
}


player1.button.addEventListener("click", function () {
    updateScore(player1, player2);
});

player2.button.addEventListener("click", function () {
    updateScore(player2, player1);
});

playTo.addEventListener("change", function () {
    winningScore = playTo.value;
    resetScore()
});

resetButton.addEventListener("click", resetScore);