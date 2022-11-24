import getRandomNumber from '../utils/getRandomNumber.js';
import gameBase from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default () => gameBase(description, generateGameData);
