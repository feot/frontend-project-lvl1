import getRandomNumber from '../utils/getRandomNumber.js';
import gameBase from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const number = getRandomNumber();
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default () => gameBase(gameRule, generateGameData);
