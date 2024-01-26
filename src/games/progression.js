import { getRandomNumber, getRandomIndex } from '../utils.js';
import runGame from '../index.js';

const gameRuls = 'What number is missing in the progression?';
const getProgressinon = () => {
  const progressions = [];
  const start = getRandomNumber(1, 50);
  const step = Math.floor(Math.random() * 4) + 2;
  for (let i = 0; i < 10; i += 1) {
    progressions.push(start + i * step);
  }
  return progressions;
};
const getRound = () => {
  const question = getProgressinon();
  const hidenIndex = getRandomIndex(question);
  const correctAnswer = question[hidenIndex];
  question[hidenIndex] = '..';
  return [question.join(' '), String(correctAnswer)];
};
const runProgressionGame = () => {
  runGame(gameRuls, getRound);
};

export default runProgressionGame;
