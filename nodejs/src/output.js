const { EventEmitter } = require('events');

const outputEmitter = new EventEmitter();

const display = (message) => console.log(message);

outputEmitter.on('noPlayers', player => display(`There are no enough players`));

outputEmitter.on('newPlayer', player => display(`${player.name} was added`));

outputEmitter.on('winner', player => display(`${player.name} is the winner!!!`));

outputEmitter.on('totalPlayers', index => display(`They are player number ${index}`));

outputEmitter.on('currentPlayer', player => display(`${player.name} is the current player`));

outputEmitter.on('penaltyOut', player => display(`${player.name} is getting out of the penalty box`));

outputEmitter.on('penaltyStay', player => display(`${player.name} is not getting out of the penalty box`));

outputEmitter.on('penaltySent', player => display(`${player.name} was sent to the penalty box`));

outputEmitter.on('movePlayer', (name, place) => display(`${name}'s new location is ${place}`));

outputEmitter.on('coinsPlayer', player => display(`${player.name} now has ${player.purse} Gold Coins.`));

outputEmitter.on('askQuestion', question => display(question));

outputEmitter.on('roll', roll => display(`They have rolled a ${roll}`));

outputEmitter.on('currentCategory', category => display(`The category is ${category}`));

outputEmitter.on('correctAnswer', () => display('Answer was correct!!!!'));

outputEmitter.on('wrongAnswer', () => display('Question was incorrectly answered'));

module.exports = {
  outputEmitter
}
