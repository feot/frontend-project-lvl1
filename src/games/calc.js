import getRandomNumber from '../utils/getRandomNumber.js';
import gameBase from '../index.js';

const description = 'What is the result of the expression?';

const calc = (numberA, numberB, operator) => {
  switch (operator) {
    case '+':
      return numberA + numberB;
    case '-':
      return numberA - numberB;
    case '*':
      return numberA * numberB;
    default:
      throw new Error('incorrect operator', operator);
  }
};

const generateOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorIndexMin = 0;
  const operatorIndex = getRandomNumber(operatorIndexMin, operators.length - 1);

  return operators[operatorIndex];
};

const generateGameData = () => {
  const numberA = getRandomNumber();
  const numberB = getRandomNumber();
  const operator = generateOperator();
  const question = `${numberA} ${operator} ${numberB}`;
  const correctAnswer = (calc(numberA, numberB, operator)).toString();

  return [question, correctAnswer];
};

export default () => gameBase(description, generateGameData);
