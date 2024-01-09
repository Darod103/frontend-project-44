import readlineSync from 'readline-sync';
import greetUser from './cli.js';
//  Проверка на четность
const isEven = (a) => a % 2 === 0;
//  Генератор рандомного числа до 100
const getRandomNumber = () => Math.floor(Math.random() * 100);
// Рандомный оператор
const randomOperand = () => {
  const operand = ['*', '-', '+'];
  return operand[Math.floor(Math.random() * operand.length)];
};
// Калькулятор
const calculate = (num1, num2, operator) => {
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

// console.log(calculate(2, 2, randomOperand()));
export {
  getRandomNumber, randomOperand, calculate, isEven,
};
