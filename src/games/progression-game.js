import { getRandomNumber, getRandomIndex } from '../utils.js';
import runGame from '../index.js';

const gameRules = 'What number is missing in the progression';

const getProgression = (start, step, length = 10) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getRound = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 5);
  const question = getProgression(start, step);
  const hiddenIndex = getRandomIndex(question);
  const correctAnswer = question[hiddenIndex];
  question[hiddenIndex] = '..';

  return [question.join(' '), String(correctAnswer)];
};

const runProgressionGame = () => {
  runGame(gameRules, getRound);
};

export default runProgressionGame;
