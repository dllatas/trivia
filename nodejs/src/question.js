const { outputEmitter } = require('./output');

const CATEGORIES = ['Pop', 'Science', 'Sports', 'Rock'];
const NUMBER_CATEGORIES = CATEGORIES.length;
const QUESTION = 'Question';
const ANSWER_DOMAIN = 10;
const WRONG_ANSWER = 7;

const generateCategoryCounter = () => CATEGORIES
  .reduce((count, category) => {
    count[category] = 0;
    return count;
  }, {});

const choose = (place) => {
  const category = place % NUMBER_CATEGORIES;
  return CATEGORIES[category];
};

const formulate = (category, index) => `${category} ${QUESTION} ${index}`;

const ask = (place, count) => {
  const category = choose(place);
  const index = count[category];

  outputEmitter.emit('currentCategory', category);
  outputEmitter.emit('askQuestion', formulate(category, index));

  return {
    index,
    category,
  };
};

const getAnswer = () => Math.floor(Math.random() * ANSWER_DOMAIN);

// The question is wrong if a random number between 0 and 9 is equal to 7
const isCorrect = (answer) => {
  if (answer !== WRONG_ANSWER) {
    outputEmitter.emit('correctAnswer');
    return true;
  }
  outputEmitter.emit('wrongAnswer');
  return false;
};


module.exports = {
  CATEGORIES,
  WRONG_ANSWER,
  generateCategoryCounter,
  choose,
  formulate,
  ask,
  isCorrect,
  getAnswer,
};
