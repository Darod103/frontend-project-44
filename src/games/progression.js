import readlineSync from 'readline-sync';
import greetUser from '../cli.js';
import { generateProgressinon } from '../index.js';

export default function gameProgression() {
  const name = greetUser();
  let count = 0;
  while (count < 3) {
    const progression = generateProgressinon();
    const hidenIndex = Math.floor(Math.random() * 10);
    const truAnswer = progression[hidenIndex];
    progression[hidenIndex] = '..';
    // console.log(truAnswer);
    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (parseInt(answer, 10) === truAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
