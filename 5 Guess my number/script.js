'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const display = function (element, text) {
  document.querySelector(element).textContent = text;
};

const guessNum = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    display('.message', '❌ Not a Number!');
  } else if (guess === secretNum) {
    display('.message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347 ';
    document.querySelector('.number').style.width = '30rem';
    display('.number', secretNum);

    if (secretNum > highscore) {
      highscore = secretNum;
      display('.highscore', highscore);
    }
  } else {
    display('.message', guess > secretNum ? '📈 Too High!' : '📉 Too Low!');
    score--;
    display('.score', score);

    if (score < 1) {
      display('h1', 'Game Over!');
      display('.message', '💥 You Lost The Game!');
      display('.score', 0);
    }
  }
};

const reset = function () {
  score = 10;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  display('.number', '?');
  display('.message', 'Start guessing...');
  display('.score', score);
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222 ';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', guessNum);
document.querySelector('.again').addEventListener('click', reset);
