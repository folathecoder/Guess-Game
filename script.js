'use strict';

// ============= START PROJECT ===============

document.querySelector('.check').addEventListener('click', function () {
    // =================== 
    // Displays The Number(s) Guessed By A User
    // Convert Value To Number
    // ===================
    const guess = Number(document.querySelector('.guess').value);
    // ===== Output the Guessed Number(s)
    console.log(guess, typeof guess);

}); 