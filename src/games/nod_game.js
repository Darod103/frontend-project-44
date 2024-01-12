import readlineSync from 'readline-sync';
import { getRandomNumber, nod } from '../index.js';
import greetUser from '../cli.js';

export default function gameNod() {
  const name = greetUser();
  let count = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (count < 3) {
    const firstNumb = getRandomNumber();
    const secondNumb = getRandomNumber();
    console.log(`Question: ${firstNumb} ${secondNumb}`);
    const answer = readlineSync.question('Your answer: ');
    const coreectAnswer = nod(firstNumb, secondNumb);
    if (parseInt(coreectAnswer, 10) === parseInt(answer, 10)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${coreectAnswer}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
