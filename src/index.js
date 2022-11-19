import readlineSync from 'readline-sync';

export default (gameRule, game) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);

  let correctAnswersCount = 0;

  console.log(gameRule);

  while (correctAnswersCount < 3) {
    const [correctAnswer, playerAnswer] = game();
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
