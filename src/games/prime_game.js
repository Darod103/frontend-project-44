import readlineSync from 'readline-sync';
import { isPrime } from '../index.js';
import greetUser from '../cli.js';

export default function primGame() {
  const name = greetUser();
  let count = 0;
  while (count < 3) {
    const number = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no"\nQuestion: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

primGame();
