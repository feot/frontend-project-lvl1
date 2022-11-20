import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import gameBase from '../index.js';

const gameRule = 'What is the result of the expression?';

const gameData = () => {
  const numberA = getRandomNumber(1, 100);
  const numberB = getRandomNumber(1, 100);
  const operatorIndex = getRandomNumber(1, 3);
  let question = 'Question: ';
  let correctAnswer;

  switch (operatorIndex) {
    case 1:
      correctAnswer = (numberA + numberB).toString();
      question += `${numberA} + ${numberB}`;
      break;
    case 2:
      correctAnswer = (numberA - numberB).toString();
      question += `${numberA} - ${numberB}`;
      break;
    case 3:
      correctAnswer = (numberA * numberB).toString();
      question += `${numberA} * ${numberB}`;
      break;
    default:
      break;
  }

  console.log(question);

  const playerAnswer = readlineSync.question('Your answer: ');

  return [correctAnswer, playerAnswer];
};

export default () => gameBase(gameRule, gameData);
