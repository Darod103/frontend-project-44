import readlineSync from 'readline-sync';
//  Проверка на четность
const isEven = (a) => a % 2 === 0;
//  Генератор рандомного числа до 100
const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);
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

const generateProgressinon = () => {
  const length = 10; // Фиксируем длину на 10
  const progression = [];
  const start = getRandomNumber();
  const step = Math.floor(Math.random() * 4) + 2;// Генирируем с 2 до 5
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const runGame = (gameRuls, round) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRuls);
  let count = 0;
  while (count < 3) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Youe answer: ')
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
    } else {
      console.log('Correct!');
      count += 1;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export {
  getRandomNumber, randomOperand,
  calculate, isEven, nod, generateProgressinon,
  isPrime,
};
