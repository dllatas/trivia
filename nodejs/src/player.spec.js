const { describe, it } = require('mocha');
const { expect } = require('chai');
const Player = require('./player');

describe('Player module', () => {
  it('add function returns an initialized array of player objects', () => {
    const expected = [
      {
        name: 'Daniel',
        place: 0,
        purse: 0,
        penalty: false,
      },
      {
        name: 'Jenny',
        place: 0,
        purse: 0,
        penalty: false,
      },
      {
        name: 'Sam',
        place: 0,
        purse: 0,
        penalty: false,
      },
    ];
    const players = ['Daniel', 'Jenny', 'Sam'];
    const added = Player.add(players);
    expect(added).to.deep.equal(expected);
  });

  it('move function returns a value between 0 and MAX_PLAYER_PLACE', () => {
    const first = Player.move({ name: 'Jorge', place: 5 }, 3);
    expect(first).to.equal(8);

    const second = Player.move({ name: 'Alicia', place: 10 }, 3);
    expect(second).to.equal(1);
  });

  it('enough function returns a boolean value', () => {
    const first = Player.enough({});
    // eslint-disable-next-line no-unused-expressions
    expect(first).to.be.false;

    const second = Player.enough(['alone']);
    // eslint-disable-next-line no-unused-expressions
    expect(second).to.be.false;

    const third = Player.enough(['first', 'second']);
    // eslint-disable-next-line no-unused-expressions
    expect(third).to.be.true;

    const fourth = Player.enough();
    // eslint-disable-next-line no-unused-expressions
    expect(fourth).to.be.false;
  });

  it('isWinner returns a boolean value', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(Player.isWinner(5)).to.be.false;
    // eslint-disable-next-line no-unused-expressions
    expect(Player.isWinner(6)).to.be.true;
  });
});
