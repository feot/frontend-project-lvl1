import getRandomNumber from '../utils/getRandomNumber.js';
import gameBase from '../index.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = (operatorIndex, numberA, numberB) => {
  let question;
  let correctAnswer;

  switch (operatorIndex) {
    case 1:
      question = `${numberA} + ${numberB}`;
      correctAnswer = (numberA + numberB).toString();
      break;
    case 2:
      question = `${numberA} - ${numberB}`;
      correctAnswer = (numberA - numberB).toString();
      break;
    case 3:
      question = `${numberA} * ${numberB}`;
      correctAnswer = (numberA * numberB).toString();
      break;
    default:
      throw new Error('incorrect operatorIndex', operatorIndex);
  }

  return [question, correctAnswer];
};

const generateGameData = () => {
  const numberA = getRandomNumber();
  const numberB = getRandomNumber();
  const operatorIndexMin = 1;
  const operatorIndexMax = 3;
  const operatorIndex = getRandomNumber(operatorIndexMin, operatorIndexMax);
  const [question, correctAnswer] = getQuestionAndAnswer(operatorIndex, numberA, numberB);

  return [question, correctAnswer];
};

export default () => gameBase(description, generateGameData);
