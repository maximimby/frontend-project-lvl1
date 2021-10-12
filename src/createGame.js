import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default (startMessage, getQuestionAndCorrectAnswer) => {
  const game = () => {
    const userName = greeting();
    console.log(startMessage);

    for (let i = 0; i < 3; i += 1) {
      const { question, correctAnswer } = getQuestionAndCorrectAnswer();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }

    console.log(`Congratulations, ${userName}!`);
  };

  return game;
};
