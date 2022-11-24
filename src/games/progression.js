import getRandomNumber from '../utils/getRandomNumber.js';
import gameBase from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (progressionStart, progressionLength, progressionStep) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    result.push(progressionStart + progressionStep * i);
  }

  return result;
};

const generateGameData = () => {
  const progressionStart = getRandomNumber();
  const progressionLength = 10;
  const progressionStepMin = 1;
  const progressionStepMax = 5;
  const progressionStep = getRandomNumber(progressionStepMin, progressionStepMax);
  const missingNumberIndex = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression(progressionStart, progressionLength, progressionStep);
  const correctAnswer = progression[missingNumberIndex].toString();

  progression[missingNumberIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => gameBase(description, generateGameData);
