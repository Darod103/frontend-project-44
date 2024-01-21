import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const ruls = 'Find the greatest common divisor of given numbers.';
const getNod = () => {
  let num1 = getRandomNumber(1, 30);
  let num2 = getRandomNumber(1, 30);
  const question = `${num1} ${num2}`;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return [question, String(num1)];
};

export default function runNodGame() {
  runGame(ruls, getNod);
}
