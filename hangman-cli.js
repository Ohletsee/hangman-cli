var Letter = require("./letter.js");
var Phrase = require("./phrase.js");

console.log("\n*** Good Luck!");
console.log("\n*** Enter a letter to try and guess the phrase.");

// Start the Hangman Command Line Interface game
aPhrase = new Phrase();

// Displays the initial underscores on the console
Phrase.prototype.displayUnderscores = function() {

	for (i = 0; i < aPhrase.phraseToGuess.length; i++) {

		if (aPhrase.phraseToGuess.substr(i, 1) === " ") {
			aPhrase.phraseDisplay += " ";
		}
		else {
			aPhrase.phraseDisplay += "_";
		}
	}

	console.log("\n" + aPhrase.phraseDisplay);
}

// Check for the end of a game
Letter.prototype.checkEndOfGame = function() {

	if (aLetter.phraseDisplay === aPhrase.phraseToGuess) {
		console.log("\n" + aPhrase.phraseToGuess);
		console.log("\n*** You Won :)");
	}
	else {
		if (aPhrase.guessesCtr >= aPhrase.maxGuesses) {
			aPhrase.endOfGame();
		}
		else {
			aPhrase.remainingGuesses = aPhrase.maxGuesses - aPhrase.guessesCtr;
			console.log("\n*** You have " + aPhrase.remainingGuesses + " guesses remaining.");
			console.log("\n" + aLetter.phraseDisplay);
			console.log("\n*** Letters Guessed:", aPhrase.lettersGuessedDisplay);
			aPhrase.letterPrompt();
		}
	}
}

aPhrase.displayUnderscores();

aPhrase.letterPrompt();