var inquirer = require("inquirer");
var Letter = require("./letter.js");

var phrasesArray = ["Hitch your wagon to a star", "The buck stops here", "Never leave that till tomorrow which you can do today", "Around the World in Eighty Days", "Time is money", "Now is the time for all good men to come to the aid of their country", "Early to Bed and Early to Rise Makes a Man Healthy Wealthy and Wise", "There are no gains without pains", "I am patient with stupidity but not with those who are proud of it"];

// Constructor function to select a phrase from the phrases array and process user input
var Phrase = function() {

	this.guessesCtr = 0;
	this.guessedLetters = [];
	this.lettersGuessedDisplay = "";
	this.maxGuesses = 6;
	this.phraseDisplay = "";
	this.phraseToGuess = "";
	this.remainingGuesses = 0;
	var randomNumber = 0;

// Generate a random number between 0 and 8
	randomNumber = Math.floor(Math.random() * 9); 

// Assign the phrase from the phrases array
	this.phraseToGuess = phrasesArray[randomNumber];

	console.log("\n*** You have " + this.maxGuesses + " guesses remaining.");

// Accept a letter from the user
	this.letterPrompt = function() {

	  inquirer.prompt(
    [
      {
        name: "inqLetter",
        type: "input",
        message: "\nEnter a letter:"
      }
    ])

// Validate the letter entered by the user
  	.then(function(answer) {

// Must enter a single letter
			if (answer.inqLetter.length === 1) {

// Match the guessed letter to the phrase
				aLetter = new Letter(answer.inqLetter);
				aLetter.matchGuessedLetter();
			}
			else {
		  	console.log("\n*** Please enter a single letter.");
			  aPhrase.letterPrompt();
			}
		})
	}

// Invoked when the user runs out of guesses
	this.endOfGame = function() {

		console.log("\n*** You have run out of guesses.");

// End the game?
	  inquirer.prompt(
  [
    {
      name: "inqYN",
      type: "confirm",
      message: "\n*** Would you like to end the game?"
    }
  ])

// See if the user wants to end the game
	.then(function(answer) {

		if (answer.inqYN === true) {
	  	console.log("\n*** Goodbye. Better luck next time :)");
		}
		else {
			console.log("\n*** You have " + aPhrase.maxGuesses + " guesses remaining.");
			console.log("\n" + aLetter.phraseDisplay);
			console.log("\n*** Letters Guessed:", aPhrase.lettersGuessedDisplay);
			aPhrase.guessesCtr = 0;
			aPhrase.letterPrompt();
		}
	})
	}
}

module.exports = Phrase;