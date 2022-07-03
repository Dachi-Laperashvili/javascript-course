'use strict';

console.log(document.querySelector('.message').textContent);

let message = (document.querySelector('.message').textContent =
  '🎉 Correct Number! ');
console.log(message);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 1;
console.log(document.querySelector('.guess').value);
