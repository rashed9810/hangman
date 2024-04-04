const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const guessInput = document.getElementById('guessInput');
const remainingGuesses = document.getElementById('remainingGuesses');

let secretNumber;
let guessesLeft = 3;

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
}

function validateGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        alert("Please enter a number between 1 and 20!");
        return false;
    }
    return true;
}

function checkGuess() {
    if (secretNumber === parseInt(guessInput.value)) {
        alert("Congratulations! You guessed the number correctly!");
        restartGame();
    } else {
        guessesLeft--;
        remainingGuesses.textContent = `Remaining guesses: ${guessesLeft}`;

        if (guessesLeft === 0) {
            alert("Out of guesses! Try again.");
        }
    }
}

function restartGame() {
    generateSecretNumber();
    guessesLeft = 3;
    remainingGuesses.textContent = `Remaining guesses: ${guessesLeft}`;
    guessInput.value = '';
}

startButton.addEventListener('click', function () {
    generateSecretNumber();
    guessInput.disabled = false;
    remainingGuesses.textContent = `Remaining guesses: ${guessesLeft}`;
});

restartButton.addEventListener('click', restartGame);

guessInput.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        if (validateGuess()) {
            checkGuess();
        }
    }
});