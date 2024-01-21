import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const ruls = 'What number is missing in the progression?';
const getProgressinon = () => {
  const progression = [];
  const start = getRandomNumber(1, 50);
  const step = Math.floor(Math.random() * 4) + 2;
  for (let i = 0; i < 10; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};
const getRaund = () => {
  const question = getProgressinon();
  const hidenIndex = getRandomNumber(0, 9);
  const answer = question[hidenIndex];
  question[hidenIndex] = '..';
  return [question.join(' '), String(answer)];
};
export default function runProgressionGame() {
  runGame(ruls, getRaund);
}
