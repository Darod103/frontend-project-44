const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

export { getRandomElement, getRandomNumber, getRandomIndex };
