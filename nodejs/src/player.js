const MINIMUM_PLAYERS_PER_GAME = 2; 

// add a player or a set of players to the game
const add = (playerList = []) => {
  // 
  return playerList.map((player, index) => {
    return {
      name: player,
      place: 0,
      purse: 0,
      inPenaltyBox: false
    };
  });
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
  enoughPlayers,
}
