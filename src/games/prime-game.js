import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  const sqrtNumber = Math.sqrt(number);
  for (let i = 3; i <= sqrtNumber; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
};

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

const runPrimeGame = () => {
  runGame(gameRules, getRound);
};

export default runPrimeGame;
