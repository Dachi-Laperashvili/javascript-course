'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 1;
*/

const guessNum = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '❌ Not a Number!';
  }
};

document.querySelector('.check').addEventListener('click', guessNum);
