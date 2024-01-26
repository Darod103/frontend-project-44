import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const ruls = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRound = () => {
  const question = getRandomNumber(1, 20);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  runGame(ruls, getRound);
};

export default runEvenGame;
