import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRuls = 'What is the result of the expression?';

const getRandomOperand = () => {
  const operand = ['*', '-', '+'];
  return operand[Math.floor(Math.random() * operand.length)];
};
const getcalculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      return undefined;
  }
};

const getRaund = () => {
  const num1 = getRandomNumber(10, 100);
  const num2 = getRandomNumber(10, 100);
  const operand = getRandomOperand();
  const question = `Question: ${num1} ${operand} ${num2}`;
  const trueAnswer = String(getcalculate(num1, num2, operand));
  return [question, trueAnswer];
};
export default function runCalcGame() {
  runGame(gameRuls, getRaund);
}
