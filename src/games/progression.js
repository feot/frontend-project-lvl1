import getRandomNumber from '../utils/getRandomNumber.js';
import getProgression from '../utils/getProgression.js';
import gameBase from '../index.js';

const gameRule = 'What number is missing in the progression?';

const generateGameData = () => {
  const progressionStart = getRandomNumber();
  const progressionLength = 10;
  const progressionStep = getRandomNumber(1, 5);
  const missingNumberIndex = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression(progressionStart, progressionLength, progressionStep);
  const correctAnswer = progression[missingNumberIndex].toString();
  const questionProgression = progression.map((item, i) => (i === missingNumberIndex ? '..' : item));

  const question = questionProgression.join(' ');

  console.log(question);

  return [question, correctAnswer];
};

export default () => gameBase(gameRule, generateGameData);
