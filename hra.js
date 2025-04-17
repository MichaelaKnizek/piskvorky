let currentPlayer = 'circle';

const handleClick = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('game__square--circle');
    currentPlayer = 'cross';
  } else {
    event.target.classList.add('game__square--cross');
    currentPlayer = 'circle';
  }
};

const buttons = document.querySelectorAll('.game-square');
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
