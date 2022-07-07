'use strict';

// Selecting elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const roll = function () {
  //1 Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2 Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3 Check for rolled 1:if true,switch player
};

btnRoll.addEventListener('click', roll);
