import readlineSync from 'readline-sync';
import { getRandomNumber, randomOperand, calculate } from '../index.js';
import greetUser from '../cli.js';

export default function calculateGame() {
  const name = greetUser();
  let count = 0;
  console.log('What is the result of the expression?');
  while (count < 3) {
    const fitsNumb = getRandomNumber();
    const secondNumb = getRandomNumber();
    const operator = randomOperand();
    console.log(`Question: ${fitsNumb} ${operator} ${secondNumb}`);
    const answer = readlineSync.question('Your answer: ');
    const corectAnswer = calculate(fitsNumb, secondNumb, operator);
    if (parseInt(corectAnswer, 10) === parseInt(answer, 10)) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
