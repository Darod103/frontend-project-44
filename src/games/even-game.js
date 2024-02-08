import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = getRandomNumber(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

const runEvenGame = () => {
  runGame(gameRules, getRound);
};

export default runEvenGame;
