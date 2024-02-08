import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return Math.abs(a);
};

const getRound = () => {
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [question, String(correctAnswer)];
};

const runGcdGame = () => {
  runGame(gameRules, getRound);
};

export default runGcdGame;
