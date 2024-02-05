import runGame from '../index.js';
import { getRandomNumber, getRandomElement } from '../utils.js';

const gameRules = 'What is the result of the expression?';
const operators = ['*', '-', '+'];
const getCalculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`'Ошибка! Добавьте вычисление для оператора!' ${operator}`);
  }
};

const getRound = () => {
  const num1 = getRandomNumber(10, 100);
  const num2 = getRandomNumber(10, 100);
  const operator = getRandomElement(operators);
  const question = `Question: ${num1} ${operator} ${num2}`;
  const correctAnswer = String(getCalculate(num1, num2, operator));
  return [String(question), String(correctAnswer)];
};

const runCalcGame = () => {
  runGame(gameRules, getRound);
};

export default runCalcGame;
