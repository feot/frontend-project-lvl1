import readlineSync from 'readline-sync';
import getRandomNumber from '../utils/getRandomNumber.js';
import gameBase from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const number = getRandomNumber();
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  console.log(question);

  const playerAnswer = readlineSync.question('Your answer: ');

  return [correctAnswer, playerAnswer];
};

export default () => gameBase(gameRule, generateGameData);
