let currentPlayer = 'circle';

const handleClick = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('game__square--circle');
    currentPlayer = 'cross';
  } else {
    event.target.classList.add('game__square--cross');
    currentPlayer = 'circle';
  }
  event.target.disabled = true;
};

const buttons = document.querySelectorAll('.game-square');
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});

// const kdoHraje = document.querySelector('.square');
