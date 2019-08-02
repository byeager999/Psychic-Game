
// variables to house the items needed for the below functions
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var yourGuessesSoFar = 0;
var computerGuess = ""

// below is the code for the user guess 
document.onkeyup = function (event) {

    var userGuess = event.key
    userGuess.toLowerCase();
    console.log(userGuess);
    
    if (letters.includes(userGuess)) {
        if (!yourGuessesSoFar.includes(userGuess)) {
            yourGuessesSoFar.push(userGuess)
            // this was an attempt at showing the already chosen letters on the screen
            if (userGuess === computerGuess) {
                console.log("you win!!!")
                alert("You're a winner!")
                wins++
                randomGuess()
            } else {
                console.log("wrong answer")
                // This was an attempt at counting down the guesses left
                guessesLeft--
                if (guessesLeft === 0) {
                    console.log("you lose!!")
                    alert("You're a loser!")
                    losses++
                    randomGuess()
                }
            }
        } else {
            alert("already guessed this letter")

        }
    } else {
        alert("not letter")
    }
}
// Below is the code for the random computer guess
randomGuess()
function randomGuess() {

    guessesLeft = 8
    yourGuessesSoFar = []
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
    document.getElementById("winz").innerHTML = wins
    document.getElementById("losez").innerHTML = losses
    document.getElementById("guesz").innerHTML = guessesLeft
    document.getElementById("soFar").innerHTML = yourGuessesSoFar



}




