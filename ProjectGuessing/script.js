document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const restartButton = document.getElementById('restart-btn');
    const guessInput = document.getElementById('guess-input');
    const remainingCounter = document.getElementById('remaining-counter');
    let secretNumber = null;
    let guessesRemaining = 3;

    function resetGame() {
        secretNumber = Math.floor(Math.random() * 20) + 1;
        guessesRemaining = 3;
        remainingCounter.textContent = guessesRemaining;
        guessInput.value = '';
        guessInput.disabled = false;
        restartButton.disabled = true;
    }

    function endGame(win) {
        let message = win ? 'Congratulations, you guessed correctly!' : 'Sorry, you ran out of guesses!';
        alert(message);
        guessInput.disabled = true;
        restartButton.disabled = false;
    }

    startButton.addEventListener('click', () => {
        resetGame();
        startButton.disabled = true;
    });

    restartButton.addEventListener('click', () => {
        resetGame();
        startButton.disabled = false;
    });

    guessInput.addEventListener('input', () => {
        const guess = parseInt(guessInput.value, 10);
        if (guess < 1 || guess > 20 || isNaN(guess)) {
            alert('Please enter a number between 1 and 20.');
            return;
        }
        if (guess === secretNumber) {
            endGame(true);
        } else {
            guessesRemaining -= 1;
            remainingCounter.textContent = guessesRemaining;
            if (guessesRemaining === 0) {
                endGame(false);
            } else {
                alert('Wrong guess! Try again.');
            }
        }
    });
});