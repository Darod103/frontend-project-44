#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const isEven = (a) => a % 2 === 0;

const eveGame = () => {
  let count = 0;
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question:${randomNumber}`);
    const anser = readlineSync.question('Your answer:');
    const corentAnser = isEven(randomNumber) ? 'yes' : 'no';
    if (corentAnser === anser) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${anser} is wrong answer ;(. Correct answer was ${corentAnser}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

eveGame();
