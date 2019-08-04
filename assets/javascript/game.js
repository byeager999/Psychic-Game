
// variables to house the items needed for the below functions
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var yourGuessesSoFar = [];
var computerGuess = ""
// Function resetting the computer guess 
function randomGuess() {    
    guessesLeft = 9;
    yourGuessesSoFar = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("Computer guessed " + computerGuess);
}

randomGuess();
// below is the code for the user guess 

document.onkeyup = function (event) {
    var userGuess = event.key
    userGuess.toLowerCase();
    console.log("You guessed " + userGuess);
    guessesLeft--;
    console.log("You have " + guessesLeft + " guesses left");

    // If user wins the game
    if (userGuess === computerGuess) {
        wins++;
        document.getElementById("winz").textContent = wins;
        // guessesLeft = 9;
        alert("You're a winner!");
        randomGuess();
    }
    // Capturing user guesses
    else {
        yourGuessesSoFar.push(userGuess);
        console.log("These are your guesses so far " + yourGuessesSoFar);
        document.getElementById("soFar").textContent = yourGuessesSoFar;
        document.getElementById("guesz").textContent = guessesLeft;
        // If user looses the game
        if (guessesLeft === 0) {
            console.log("You lose.");
            losses++;
            document.getElementById("losez").textContent = losses;
            // guessesLeft = 9;
            alert("You're a loser!");
            randomGuess();
        }


    }

}

