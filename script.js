'use strict';

// ============= START PROJECT ===============

// Enable any value appear in the console on click of the "Check!" button

const check = document.querySelector('.check');

check.addEventListener('click', function(e) {

    const guessedNumber = Number(document.querySelector('.guess').value);

    const message = document.querySelector('.message');

    if (!guessedNumber) {
        message.textContent = `🤷‍♂️ Enter a Number!`;
    }
    else {
        console.log(`You guessed ${guessedNumber}!`);
    }

})