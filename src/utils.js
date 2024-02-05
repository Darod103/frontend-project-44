const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomElement = (data) => data[Math.floor(Math.random() * data.length)];
const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

export { getRandomElement, getRandomNumber, getRandomIndex };
