'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');

let scoreR = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscoreR = 0;
check.addEventListener('click', function () {
  const guessR = Number(guess.value);
  console.log(guessR, typeof guessR);

  //   when players no input
  if (!guessR) {
    message.textContent = 'no number !';

    // when player Wins
  } else if (guessR === secretNumber) {
    message.textContent = 'correct number !';
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (scoreR > highscoreR) {
      highscoreR = scoreR;
      highscore.textContent = highscoreR;
    }

    // when guess too high
  } else if (guessR > secretNumber) {
    if (scoreR > 1) {
      message.textContent = 'too high!';
      scoreR--;
      score.textContent = scoreR;
    } else {
      message.textContent = 'You lost Game!';
      score.textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      number.style.width = '30rem';
    }

    // when guess too low
  } else if (guessR < secretNumber) {
    if (scoreR > 1) {
      message.textContent = 'too low!';
      scoreR--;
      score.textContent = scoreR;
    } else {
      message.textContent = 'You lost Game!';
      score.textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      number.style.width = '30rem';
    }
  }
});

// again
again.addEventListener('click', function () {
  scoreR = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  message.textContent = 'Start Guessing ... ';
  score.textContent = scoreR;
  number.textContent = '?';
  guess.value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
