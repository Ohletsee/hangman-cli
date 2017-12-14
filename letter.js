// Constructor function to process the letter input from the console
var Letter = function(answer) {

	this.letter = answer;
	this.isLetterGuessed = false;
	this.isLetterWasGuessed = false;
	this.phraseDisplay = "";

// See if the guessed letter is in the phrase.
// Display the phrase with the correct letters that have been guessed.
	this.matchGuessedLetter = function() {

		var i = 0;
		var j = 0;

		aPhrase.lettersGuessedDisplay = "";

		aPhrase.guessedLetters.push(aLetter.letter);

		// Sort the guessed letters in alphabetical order
		aPhrase.guessedLetters.sort();

		// Build the string of guessed letters, eliminating duplicate letters, which is later displayed on the console
		for (i = 0; i < aPhrase.guessedLetters.length; i++) {

// Has the letter been guessed before?
// If so, eliminate the duplicate from the array before adding it to the letters guessed display.
			if (aPhrase.guessedLetters[i] === aPhrase.guessedLetters [i + 1]) {
				aPhrase.guessedLetters.splice(i, 1);
			}
			aPhrase.lettersGuessedDisplay += aPhrase.guessedLetters[i] + " ";
		}

		// Insert the correctly guessed letters into the phrase display string
		for (i = 0; i < aPhrase.phraseToGuess.length; i++) {

			if (aPhrase.phraseToGuess.substr(i, 1) === " ") {
				aLetter.phraseDisplay += " ";
			}
			else {

				for (j = 0; j < aPhrase.guessedLetters.length; j++) {

					if (aPhrase.guessedLetters[j].toLowerCase() === aPhrase.phraseToGuess.substr(i, 1).toLowerCase()) {
						aLetter.isLetterGuessed = true;
						if (aLetter.letter.toLowerCase() === aPhrase.phraseToGuess.substr(i, 1).toLowerCase()) {
							aLetter.isLetterWasGuessed = true;
						}
						break;
					}
				}

				if (aLetter.isLetterGuessed === true) {
					aLetter.phraseDisplay += aPhrase.phraseToGuess.substr(i, 1);
				}
				else {
					aLetter.phraseDisplay += "_";
				}
			}

			aLetter.isLetterGuessed = false;		

		}

		if (aLetter.isLetterWasGuessed === false) {
				aPhrase.guessesCtr++;
		}

		aLetter.checkEndOfGame();

	}
}

module.exports = Letter;