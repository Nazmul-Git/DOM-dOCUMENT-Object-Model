'use strict';
// console.log(document.querySelector('.message').textContent);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
//   when guess false like 0 etc.
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !!';
  } 
//   when guess equal to secretNumber
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number.';

    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').style.width='30rem';
  } 
//   when guess is too high
  else if (guess > secretNumber) {
    // for did not match the secret number score chance will be decrease.
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high !';
      score--;
      document.querySelector('.score').textContent = score;
      
    }else{
        document.querySelector('.message').textContent='You lost the game.!';
        document.querySelector('.score').textContent=0;
    }
  } 
//   when guess is too low 
  else if (guess < secretNumber) {
    if(score>1){
        document.querySelector('.message').textContent='Too Low !';
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent='You lost the game !';
        document.querySelector('.score').textContent=0;
    }
  }
});
