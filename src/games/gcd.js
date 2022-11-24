// GCD stands for Greatest common divisor

import getRandomNumber from '../utils/getRandomNumber.js';
import gameBase from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (numbers) => {
  const [numberA, numberB] = numbers;
  const lowestNumber = Math.min(...numbers);
  const diffNumber = Math.abs(numberA - numberB);

  if (numberA === numberB) {
    return lowestNumber;
  }

  return getGCD([lowestNumber, diffNumber]);
};

const generateGameData = () => {
  const numberA = getRandomNumber();
  const numberB = getRandomNumber();
  const question = (`${numberA} ${numberB}`);
  const correctAnswer = getGCD([numberA, numberB]).toString();

  return [question, correctAnswer];
};

export default () => gameBase(description, generateGameData);
