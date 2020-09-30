// import functions and grab DOM elements
const userGuess = document.getElementById('user-input');
const submitButton = document.getElementById('submit-guess-button');
const resetButton = document.getElementById('game-reset-button');
const guessResponse = document.getElementById('guess-results-message');
const guessesLeft = document.getElementById('guesses-remaining');

// initialize state
// let losses = 0;
let guesses = 4;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guesses--;
    guessesLeft.textContent = guesses;
    const magicNum = 14; 
    const userNumber = userGuess.valueAsNumber;

    if (userNumber < magicNum) {
        guessResponse.textContent = `Sorry, that number was too low!`;
    } else if (userNumber > magicNum) {
        guessResponse.textContent = `Sorry, that number was too high!`;
    } else if (userNumber === magicNum) {
        guessResponse.textContent = `Way to go, you guessed the right number!`;
        
    } else if (guesses.value === 0) {
        guessResponse.textContent = `Sorry, you ran out of tries!`;
        
    }
    userGuess.value = '';
});

resetButton.addEventListener('click', () => {
    guessResponse.textContent = '';
    guessesLeft.textContent = 4;
});


// button.classList.toggle('hidden');
 