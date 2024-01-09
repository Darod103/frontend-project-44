import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from './index.js';
import greetUser from './cli.js';

export default function evenGame() {
  let count = 0;
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const randomNumber = getRandomNumber();
    console.log(`Question:${randomNumber}`);
    const answer = readlineSync.question('Your answer:');
    const corentAnwser = isEven(randomNumber) ? 'yes' : 'no';
    if (corentAnwser === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${corentAnwser}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}`);
  }
}
