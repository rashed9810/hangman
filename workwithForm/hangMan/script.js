const words = [
    "javascript",
    "programming",
    "computer",
    "algorithm",
    "function",
    "variable",
    "array",
    "object",
    "string",
    "number"
  ];
  
  let currentWord, guesses, wrongGuesses, letters;
  let gameStarted = false;
  
  const wordDisplay = document.getElementById("word");
  const guessesDisplay = document.getElementById("guesses");
  const lettersDisplay = document.getElementById("letters");
  const startButton = document.getElementById("start-btn");
  const resultDisplay = document.getElementById("result");
  
  startButton.addEventListener("click", startGame);
  
  function startGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    guesses = 6;
    wrongGuesses = [];
    letters = [];
    gameStarted = true;
  
    updateDisplay();
  }
  
  function updateDisplay() {
    wordDisplay.textContent = currentWord.split("").map(letter => (letters.includes(letter) ? letter : "_")).join(" ");
    guessesDisplay.textContent = `Guesses left: ${guesses}`;
    lettersDisplay.textContent = `Letters guessed: ${letters.join(", ")}`;
  
    if (wordDisplay.textContent.replace(/\s/g, "") === currentWord) {
      resultDisplay.textContent = "You win!";
      gameStarted = false;
    } else if (guesses === 0) {
      resultDisplay.textContent = `You lose! The word was "${currentWord}".`;
      gameStarted = false;
    }
  }
  
  document.addEventListener("keydown", (event) => {
    if (gameStarted) {
      const letter = event.key.toLowerCase();
      if (/^[a-z]$/.test(letter) && !letters.includes(letter)) {
        letters.push(letter);
        if (!currentWord.includes(letter)) {
          guesses--;
          wrongGuesses.push(letter);
        }
        updateDisplay();
      }
    }
  });

