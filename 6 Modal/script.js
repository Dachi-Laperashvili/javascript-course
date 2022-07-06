'use strict';

// variables for selected elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsShow = document.querySelectorAll('.show-modal');

// function to show modal window by removing class 'hidden' from it
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function to close modal window by adding class 'hidden'
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// looping through buttons to use showModal function when clicking on either of them
for (let i = 0; i < btnsShow.length; i++) {
  btnsShow[i].addEventListener('click', showModal);
}

// executing closeModal function when clicking on overlay or close button
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// executing closeModal function when user press 'Esc' on keyboard and when modal doesn't contain 'hidden' class
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
