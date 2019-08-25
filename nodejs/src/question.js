const CATEGORIES = ['Pop', 'Science', 'Sports', 'Rock'];
const NUMBER_CATEGORIES = CATEGORIES.length;
const QUESTION = 'Question';
const RIGHT_ANSWER_DOMAIN = 10;
const RIGHT_ANSWER = 7;

const choose = (place) => {
  const category = place % NUMBER_CATEGORIES;
  return CATEGORIES[category];
}

const formulate = (category, index) => `${category} ${QUESTION} ${index}`;

const ask = (place, count) => {
  const category = choose(place);
  const index = count[category] + 1;
  const question = formulate(category, index);
  return {
    index,
    category,
    question,
  };
}

// The question is correct if a random number between 0 and 9 is equal to 7
const isCorrect = () => Math.floor(Math.random() * RIGHT_ANSWER_DOMAIN) === RIGHT_ANSWER;

module.exports = {
  CATEGORIES,
  ask,
  isCorrect
}
