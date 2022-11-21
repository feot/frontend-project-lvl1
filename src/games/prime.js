import readlineSync from 'readline-sync';
import getRandomNumber from '../utils/getRandomNumber.js';
import getPrimeNumbers from '../utils/getPrimeNumbers.js';
import gameBase from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const number = getRandomNumber(1, 100);
  const primeNumbers = getPrimeNumbers(100);
  const question = (`Question: ${number}`);
  const correctAnswer = (primeNumbers.includes(number)) ? 'yes' : 'no';

  console.log(question);

  const playerAnswer = readlineSync.question('Your answer: ');

  return [correctAnswer, playerAnswer];
};

export default () => gameBase(gameRule, gameData);
