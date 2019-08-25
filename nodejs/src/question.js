const CATEGORIES = ['Pop', 'Science', 'Sports', 'Rock'];
const NUMBER_CATEGORIES = CATEGORIES.length;
const QUESTION = 'Question';

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

module.exports = {
  CATEGORIES,
  ask
}
