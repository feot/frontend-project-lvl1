import getRandomNumber from '../utils/getRandomNumber.js';
import gameBase from '../index.js';

const gameRule = 'What is the result of the expression?';

const generateGameData = () => {
  const numberA = getRandomNumber();
  const numberB = getRandomNumber();
  const operatorIndexMin = 1;
  const operatorIndexMax = 3;
  const operatorIndex = getRandomNumber(operatorIndexMin, operatorIndexMax);
  let question;
  let correctAnswer;

  switch (operatorIndex) {
    case 1:
      correctAnswer = (numberA + numberB).toString();
      question = `${numberA} + ${numberB}`;
      break;
    case 2:
      correctAnswer = (numberA - numberB).toString();
      question = `${numberA} - ${numberB}`;
      break;
    case 3:
      correctAnswer = (numberA * numberB).toString();
      question = `${numberA} * ${numberB}`;
      break;
    default:
      throw new Error('incorrect operatorIndex', operatorIndex);
  }

  return [question, correctAnswer];
};

export default () => gameBase(gameRule, generateGameData);
