const MINIMUM_PLAYERS_PER_GAME = 2; 
const MAX_PLAYER_PLACE = 12; 

// add a player or a set of players to the game
const add = (playerList = []) => {
  // 
  return playerList.map((player, index) => {
    return {
      name: player,
      place: 0,
      purse: 0,
      penalty: false
    };
  });
}

const move = (place, roll) => {
  next = place + roll;
  if (next >= MAX_PLAYER_PLACE) {
    next = next - MAX_PLAYER_PLACE;
  }
  return next;
}

// check that the number of players is at least two before starting the game
const enoughPlayers = (current = []) => {
  if (!Array.isArray(current)) {
    return false;
  }

  if (current.length < MINIMUM_PLAYERS_PER_GAME) {
    return false;
  }

  return true;
} 

module.exports = {
  add,
  move,
  enoughPlayers,
}
