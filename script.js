'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');
const openIt = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeIt = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', openIt);
  closeModal.addEventListener('click', closeIt);
  overlay.addEventListener('click', closeIt);
}

document.addEventListener('keydown', function (keys) {
  if (keys.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeIt();
  }
});
