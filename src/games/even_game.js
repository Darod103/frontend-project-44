import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'Answer "yes" if the number is even, otherwise answer "no".';
const getEven = () => {
  const question = getRandomNumber(1, 20);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default function runEvenGame() {
  runGame(ruls, getEven);
}
