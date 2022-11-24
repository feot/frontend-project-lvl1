import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default (description, generateGameData) => {
  const roundsCount = 3;
  const playerName = greeting();
  let correctAnswersCount = 0;

  console.log(description);

  while (correctAnswersCount < roundsCount) {
    const [question, correctAnswer] = generateGameData();

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
