'use strict';
// ============= START PROJECT ===============

//* Implement randomly generated numbers
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//* Assign initial score value
let score = 20;

//* Assign intial highscore 
let highScore = 0;

//* Creat functions for dryer codes
const messageContent = function (message) {
    message.textContent = message;
}

//* Enable any value appear in the console on click of the "Check!" button
const check = document.querySelector('.check');

check.addEventListener('click', function (e) {

    const guessedNumber = Number(document.querySelector('.guess').value);

    const message = document.querySelector('.message');

    if (guessedNumber <= 20 && guessedNumber >= 1) {

        if (!guessedNumber) {
            messageContent(`🤷‍♂️ Enter a Number!`);
            // message.textContent = `🤷‍♂️ Enter a Number!`;
        }
        else if (guessedNumber === secretNumber) {

            messageContent(`🎉 You guessed right!`);
    
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

            //Display Highscore
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
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
    
                //! Change background color when score is wrong
                document.querySelector('.body-bg').style.backgroundColor = '#ff0000';
            }
        }
    
        else if (guessedNumber < secretNumber) {
    
            if (score > 0) {
                message.textContent = `😢 Too Low!`;
    
                // Decrease the score by 1
                score = score - 1;
                document.querySelector('.score').textContent = score;
            }
    
            else {
                message.textContent = `You lost the game! 🤣`;
    
                //Change background color when score is wrong
                document.querySelector('.body-bg').style.backgroundColor = '#ff0000';
            }
        }

    }

    else {
        message.textContent = `Your guess should be between 1 and 20 🤦‍♀️`;
    }
})

// Reset Game When Again is Clicked

const reload = document.querySelector('.again');

reload.addEventListener('click', function (e) {
    
    //Generate new random number
    secretNumber = Math.trunc(Math.random() * 20) + 1; 

    //Restore the background color
    document.querySelector('.body-bg').style.backgroundColor = '#222222';

    //Restore the width of the secret number 
    document.querySelector('.number').style.width = '15rem';

    //Restore Initial Messages 
    const message = document.querySelector('.message');
    message.textContent = `Start guessing...`;

    //Hide Secret Number
    const number = document.querySelector(".number");
    number.textContent = `?`;

    //Restore Score 
    score = 20;
    document.querySelector('.score').textContent = score;

    //Restore Input Field 
    document.querySelector('.guess').value = '';
})
