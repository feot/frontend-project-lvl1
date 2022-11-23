import readlineSync from 'readline-sync';
import getRandomNumber from '../utils/getRandomNumber.js';
import isPrime from '../utils/isPrime.js';
import gameBase from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const number = getRandomNumber();
  const question = (`Question: ${number}`);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(question);

  const playerAnswer = readlineSync.question('Your answer: ');

  return [correctAnswer, playerAnswer];
};

export default () => gameBase(gameRule, generateGameData);
