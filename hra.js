import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const kdoHraje = document.querySelector('.symbol');
const buttons = document.querySelectorAll('.game-square');

const aiMove = async () => {
  const herniPole = Array.from(buttons).map((button) => {
    if (button.classList.contains('game__square--circle')) {
      return 'o';
    } else if (button.classList.contains('game__square--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const response = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board: herniPole,
        player: 'x',
      }),
    },
  );

  const data = await response.json();
  const { x, y } = data.position;
  const index = x + y * 10;
  buttons[index].click();
};

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

  const herniPole = Array.from(buttons).map((button) => {
    if (button.classList.contains('game__square--circle')) {
      return 'o';
    } else if (button.classList.contains('game__square--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const vitez = findWinner(herniPole);
  if (vitez === 'o' || vitez === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${vitez}.`);
      location.reload();
    }, 150);
  } else if (!herniPole.includes('_')) {
    setTimeout(() => {
      alert('Hra skončila nerozhodně.');
      location.reload();
    }, 150);
  } else if (currentPlayer === 'cross') {
    setTimeout(() => {
      aiMove();
    }, 250);
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
