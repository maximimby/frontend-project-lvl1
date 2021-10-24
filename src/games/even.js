import { createGame } from '../createGame.js';
import { generateRandomNumber } from '../utils/generateRandomNumber.js';
import { isEven } from '../utils/isEven.js';

export const even = createGame('Answer "yes" if the number is even, otherwise answer "no".', () => {
  const randomNumber = generateRandomNumber(5, 20);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question: randomNumber, correctAnswer };
});
