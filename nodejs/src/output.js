const { EventEmitter } = require('events');

const outputEmitter = new EventEmitter();

const display = (message) => console.log(message);

outputEmitter.on('newPlayer', player => display(`${player.name} was added`));

outputEmitter.on('currentPlayer', player => display(`${player.name} is the current player`));

outputEmitter.on('allPlayers', players => display(`They are player number ${players.length}`));

outputEmitter.on('penaltyOut', player => display(`${player.name} is getting out of the penalty box`));

outputEmitter.on('penaltyIn', player => display(`${player.name} is not getting out of the penalty box`));

outputEmitter.on('penaltySent', player => display(`${player.name} was sent to the penalty box`));

outputEmitter.on('locationPlayer', player => display(`${player.name}'s new location is ${player.place}`));

outputEmitter.on('coinsPlayer', player => display(`${player.name} now has ${player.purse} Gold Coins.`));

outputEmitter.on('askQuestion', question => display(question));

outputEmitter.on('roll', roll => display(`They have rolled a ${roll}`));

outputEmitter.on('currentCategory', category => display(`They category is ${category}`));

outputEmitter.on('correctAnswer', () => display('Answer was correct!!!!'));

outputEmitter.on('wrongAnswer', () => display('Question was incorrectly answered'));

module.exports = {
  outputEmitter
}
// myEmitter.emit('event', 'a', 'b');
