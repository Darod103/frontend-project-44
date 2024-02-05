import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const getGcd = (number1, number2) => {
  let firstNumber = number1;
  let secondNumber = number2;

  while (secondNumber !== 0) {
    const temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
  }

  return Math.abs(firstNumber);
};

const getRound = () => {
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [String(question), String(correctAnswer)];
};

const runGcdGame = () => {
  runGame(gameRules, getRound);
};

export default runGcdGame;
