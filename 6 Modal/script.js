'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsShow = document.querySelectorAll('.show-modal');

console.log(btnsShow);

for (let i = 0; i < btnsShow.length; i++) console.log(btnsShow[i].textContent);
