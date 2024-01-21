import readlineSync from 'readline-sync';

export default function runGame(gameRuls, round) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRuls);
  let count = 0;
  while (count < 3) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Youe answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
      count += 1;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
