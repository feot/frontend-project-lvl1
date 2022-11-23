import readlineSync from 'readline-sync';
import getPlayerName from './utils/getPlayerName.js';

export default (gameRule, gameData) => {
  const playerName = getPlayerName();

  console.log(`Hello, ${playerName}!`);

  let correctAnswersCount = 0;

  console.log(gameRule);

  while (correctAnswersCount < 3) {
    const [question, correctAnswer] = gameData();

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = correctAnswer === playerAnswer;

    if (isAnswerCorrect) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
