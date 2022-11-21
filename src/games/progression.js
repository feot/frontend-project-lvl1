import readlineSync from 'readline-sync';
import getRandomNumber from '../utils/getRandomNumber.js';
import getProgression from '../utils/getProgression.js';
import gameBase from '../index.js';

const gameRule = 'What number is missing in the progression?';

const gameData = () => {
  const progressionStart = getRandomNumber(1, 100);
  const progressionLength = 10;
  const progressionStep = getRandomNumber(1, 5);
  const missingNumberIndex = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression(progressionStart, progressionLength, progressionStep);
  const correctAnswer = progression[missingNumberIndex].toString();
  const questionProgression = progression.map((item, i) => {
    if (i === missingNumberIndex) {
      return '..';
    }

    return item;
  });

  const question = (`Question: ${questionProgression.join(' ')}`);

  console.log(question);

  const playerAnswer = readlineSync.question('Your answer: ');

  return [correctAnswer, playerAnswer];
};

export default () => gameBase(gameRule, gameData);
