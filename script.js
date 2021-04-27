'use strict';

// ============= START PROJECT ===============

// Implement randomly generated numbers

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// const number = document.querySelector(".number");
// number.textContent = secretNumber;

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

        //Change background color when score is correct
        document.querySelector('.body-bg').style.backgroundColor = '#60b347';

        //Change Width when correct
        document.querySelector('.number').style.width = '30rem';

        //Display Secret Number
        const number = document.querySelector(".number");
        number.textContent = secretNumber;
    }
    else if (guessedNumber > secretNumber) {

        if (score > 0) {
            message.textContent = `😢 Too high!`;
            // Decrease the score by 1
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else {
            message.textContent = `You lost the game! 🤣`;

            //Display Secret Number
            const number = document.querySelector(".number");
            number.textContent = secretNumber;

            //Change Width when correct
            document.querySelector('.number').style.width = '30rem';
        }
    }

    else if (guessedNumber < secretNumber) {

        if (score > 0) {
            message.textContent = `😢 Too Low!`;

            // Decrease the score by 1
            score = score - 1;
            document.querySelector('.score').textContent = score;

            //Change background color when score is wrong
            document.querySelector('.body-bg').style.backgroundColor = '#fffff';
        }
    
        else {
            message.textContent = `You lost the game! 🤣`;
        }
    }
})

// Reset Game When Again is Clicked