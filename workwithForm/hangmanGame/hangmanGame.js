//1. Create a constuctor function for the the hangman game

//2. Setup two attributes. One for the word itself. Another for the number of guesses allowed
// 3.Create two instances of it and print both to the console

const Hangman = function(word, remaingGuesses) {
    this.word = word;
    this.remaingGuesses = remaingGuesses;
}

const game1 = new Hangman('Cat', 2);
console.log(game1);


const game2 = new Hangman('Bangladesh', 4);
console.log(game2);

//setting up the prototype object as the game object

