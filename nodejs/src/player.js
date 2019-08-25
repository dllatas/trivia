const { outputEmitter } = require('./output'); 
const MINIMUM_PLAYERS_PER_GAME = 2; 
const MAX_PLAYER_PLACE = 12; 
const MAX_COINS = 6;

// add a player or a set of players to the game
const add = (playerList = []) => {
  return playerList.map((current, index) => {
    const player = {
      name: current,
      place: 0,
      purse: 0,
      penalty: false
    };
    outputEmitter.emit('newPlayer', player);
    outputEmitter.emit('totalPlayers', index + 1);
    return player;
  });
}

const move = (player, roll) => {
  let { name, place } = player;
  next = place + roll;
  if (next >= MAX_PLAYER_PLACE) {
    next = next - MAX_PLAYER_PLACE;
  }
  outputEmitter.emit('movePlayer', name, next);
  return next;
}

// check that the number of players is at least two before starting the game
const enough = (current = []) => {
  if (!Array.isArray(current)) {
    return false;
  }

  if (current.length < MINIMUM_PLAYERS_PER_GAME) {
    return false;
  }

  return true;
} 

const isWinner = (coins) => {
  if (coins === MAX_COINS) {
    return true;
  }
  return false;
}

module.exports = {
  add,
  move,
  enough,
  isWinner,
}
