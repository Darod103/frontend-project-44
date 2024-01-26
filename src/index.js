import readlineSync from 'readline-sync';

const runGame = (gameRuls, getRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRuls);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Youe answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
