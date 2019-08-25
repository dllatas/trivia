const { describe, it } = require('mocha');
const { expect } = require('chai');
const Question = require('./question');

describe('Question module', () => {
  it('generateCategoryCounter returns an object with props initialized to 0', () => {
    const expected = {
      Pop: 0,
      Science: 0,
      Sports: 0,
      Rock: 0,
    };

    const counter = Question.generateCategoryCounter();
    expect(counter).to.deep.equal(expected);
  });

  it('choose function returns the proper category per place', () => {
    expect(Question.choose(0)).to.equal(Question.CATEGORIES[0]);
    expect(Question.choose(5)).to.equal(Question.CATEGORIES[1]);
    expect(Question.choose(10)).to.equal(Question.CATEGORIES[2]);
    expect(Question.choose(11)).to.equal(Question.CATEGORIES[3]);
  });

  it('formulate function returns the question', () => {
    expect(Question.formulate('Pop', 10)).to.equal('Pop Question 10');
  });

  it('ask returns an object with index and category as props', () => {
    const count = {
      Pop: 0,
      Science: 0,
      Sports: 0,
      Rock: 0,
    };
    expect(Question.ask(5, count)).to.deep.equal({ index: 0, category: Question.CATEGORIES[1] });
  });

  it('getAnswer returns a number between 0 and 9', () => {
    expect(Question.getAnswer()).to.be.within(0, 9);
  });

  it('isCorrect returns true when answer is different than wrong answer', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(Question.isCorrect(Question.WRONG_ANSWER - 1)).to.be.true;
    // eslint-disable-next-line no-unused-expressions
    expect(Question.isCorrect(Question.WRONG_ANSWER)).to.be.false;
  });
});
