import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const getPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const ruls = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const getRaund = () => {
  const question = getRandomNumber(1, 100);
  const answer = getPrime(question) ? 'yes' : 'no';
  return [String(question), answer];
};
export default function runPrimeGame() {
  runGame(ruls, getRaund);
}
