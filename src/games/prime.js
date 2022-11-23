import getRandomNumber from '../utils/getRandomNumber.js';
import isPrime from '../utils/isPrime.js';
import gameBase from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default () => gameBase(gameRule, generateGameData);
