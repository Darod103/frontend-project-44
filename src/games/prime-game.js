import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [String(question), String(correctAnswer)];
};

const runPrimeGame = () => {
  runGame(gameRules, getRound);
};

export default runPrimeGame;
