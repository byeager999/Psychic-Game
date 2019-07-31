
var letters = ["a","b","c","d","e","f","g","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var yourGuessesSoFar = 0;


function randomGuess(){
    var computerGuess = letters[Math.floor(Math.random()*letters.length)];

    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).
            toLowerCase();
            
            for (i=0; i < 10; i++){
                if (userGuess == computerGuess){
                    break;
                } 
            }
        console.log(userGuess);
    }
    
}




