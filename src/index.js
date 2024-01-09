// import readlineSync from 'readline-sync';
// import greetUser from './cli.js';
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
// НОД
const nod = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};
// console.log(nod(100, 52));
export {
  getRandomNumber, randomOperand, calculate, isEven, nod,
};

// console.log(nod(25, 29));
