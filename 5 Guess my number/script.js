'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 1;
*/

let secretNum = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let box = document.querySelector('.number');
let score = 10;

const guessNum = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '❌ Not a Number!';
  } else if (guess === secretNum) {
    message.textContent = '🎉 Correct Number!';
    box.textContent = secretNum;
  } else if (guess > secretNum) {
    message.textContent = '📈 Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNum) {
    message.textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score < 1) {
    document.querySelector('h1').textContent = 'Game Over!';
    message.textContent = 'You Lost The Game!';
    document.querySelector('.score').textContent = 0;
  }
};

const reset = function () {
  score = 10;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  box.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', guessNum);
document.querySelector('.again').addEventListener('click', reset);
