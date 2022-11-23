import getRandomNumber from '../utils/getRandomNumber.js';
import gameBase from '../index.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (progressionStart, progressionLength, progressionStep) => {
  const res = [];

  for (let i = 0; i < progressionLength; i += 1) {
    res.push(progressionStart + progressionStep * i);
  }

  return res;
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

export default () => gameBase(gameRule, generateGameData);
