import readlineSync from 'readline-sync';
import getRandomNumber from '../utils/getRandomNumber.js';
import getGCD from '../utils/getGCD.js';
import gameBase from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const numberA = getRandomNumber(1, 100);
  const numberB = getRandomNumber(1, 100);
  const question = (`Question: ${numberA} ${numberB}`);
  const correctAnswer = getGCD([numberA, numberB]).toString();

  console.log(question);

  const playerAnswer = readlineSync.question('Your answer: ');

  return [correctAnswer, playerAnswer];
};

export default () => gameBase(gameRule, gameData);
