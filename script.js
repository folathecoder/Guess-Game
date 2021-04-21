'use strict';

// ============= START PROJECT ===============

// Enable any value appear in the console on click of the "Check!" button

const check = document.querySelector('.check');

const message = document.querySelector('.message');

const bodyBg = document.querySelector('.body-bg');

// const body = document.getElementsByTagName('body');

// Array.from(body).forEach(
//     function (e) {
//         console.log(e);
//     }
// )

// const score = document.querySelector('.score').textContent;
// const gameScore = Number(score);
// console.log(gameScore, typeof(gameScore));

check.addEventListener('click', function (e) {

    const guess = document.querySelector('.guess').value;

    // const score = document.querySelector('.score').text;

    console.log(guess);



    const score = document.querySelector('.score').textContent;
    const gameScore = Number(score);
    console.log(gameScore, typeof(gameScore));





    if (!guess) {
        console.log(`Not a number!`);

        message.textContent = `Oopps!🤷‍♂️...Not a number!`;

        const currentScore = gameScore - 1;

        console.log(currentScore);


    }
    else {
        message.textContent = `Nice👌, try again!`;

        const currentScore = gameScore + 1;

        console.log(currentScore);

    }
})