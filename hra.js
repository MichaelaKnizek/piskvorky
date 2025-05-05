import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const kdoHraje = document.querySelector('.symbol');

const handleClick = (event) => {
  kdoHraje.classList.remove('symbol', 'symbol__circle', 'symbol__cross');

  if (currentPlayer === 'circle') {
    event.target.classList.add('game__square--circle');
    currentPlayer = 'cross';
    kdoHraje.classList.add('symbol__cross');
  } else {
    event.target.classList.add('game__square--cross');
    currentPlayer = 'circle';
    kdoHraje.classList.add('symbol__circle');
  }
  event.target.disabled = true;
};

const buttons = document.querySelectorAll('.game-square');
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
