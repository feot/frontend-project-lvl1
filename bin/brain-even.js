#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const playRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

  console.log('Question: ', number);

  const answer = readlineSync.question('Your answer: ');

  const isAnswerCorrect = answer === correctAnswer;

  if (isAnswerCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isAnswerCorrect;
};

const game = () => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);

  let correctAnswersCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswersCount < 3) {
    const isAnswerCorrect = playRound();

    if (isAnswerCorrect) {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

game();
