'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let box = document.querySelector('.number');
let score = 10;
let highscore = 0;

const guessNum = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '❌ Not a Number!';
  } else if (guess === secretNum) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347 ';
    document.querySelector('.number').style.width = '30rem';
    box.textContent = secretNum;
    if (secretNum > highscore) {
      highscore = secretNum;
      document.querySelector('.highscore').textContent = highscore;
    }
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
  document.querySelector('body').style.backgroundColor = '#222 ';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', guessNum);
document.querySelector('.again').addEventListener('click', reset);
