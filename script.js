'use strict';

// ============= START PROJECT ===============

// Enable any value appear in the console on click of the "Check!" button

const check = document.querySelector('.check');

check.addEventListener('click', function(e) {

    const guessedNumber = document.querySelector('.guess').value;

    if (!guessedNumber) {
        console.log(`Oops! 🤷‍♀️.... Enter only a number!`)
    }
    else {
        console.log(`You guessed ${guessedNumber}!`);
    }

})