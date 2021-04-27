'use strict';

// ============= START PROJECT ===============

// Implement randomly generated numbers

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number");
number.textContent = secretNumber;

// Assign initial score value

let score = 20;

// Enable any value appear in the console on click of the "Check!" button

const check = document.querySelector('.check');

check.addEventListener('click', function (e) {

    const guessedNumber = Number(document.querySelector('.guess').value);

    const message = document.querySelector('.message');

    if (!guessedNumber) {
        message.textContent = `🤷‍♂️ Enter a Number!`;
    }
    else if (guessedNumber === secretNumber) {
        message.textContent = `🎉 You guessed right!`;

        // Increase the score by 1
        score = score + 1;
        document.querySelector('.score').textContent = score;
    }
    else if (guessedNumber > secretNumber) {
        message.textContent = `😢 Too high!`;
        // Decrease the score by 1
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }
    else if (guessedNumber < secretNumber) {
        message.textContent = `😢 Too low!`;
        // Decrease the score by 1
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }


})