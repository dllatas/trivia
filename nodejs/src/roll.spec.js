const { describe, it } = require('mocha');
const { expect } = require('chai');
const Roll = require('./roll');

describe('Roll module', () => {
  it('start returns an integer between 1 and 6', () => {
    expect(Roll.start()).to.be.within(1, 6);
  });

  it('isOdd returns true when the input is an odd number', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(Roll.isOdd(1)).to.be.true;
    // eslint-disable-next-line no-unused-expressions
    expect(Roll.isOdd(2)).to.be.false;
  });
});
