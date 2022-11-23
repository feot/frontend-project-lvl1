import getRandomNumber from '../utils/getRandomNumber.js';
import getGCD from '../utils/getGCD.js';
import gameBase from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const numberA = getRandomNumber();
  const numberB = getRandomNumber();
  const question = (`${numberA} ${numberB}`);
  const correctAnswer = getGCD([numberA, numberB]).toString();

  return [question, correctAnswer];
};

export default () => gameBase(gameRule, generateGameData);
