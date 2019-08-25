// A big impact is how players are added to the game. One by one.
// It would be better to add all of them at the same time.
// Have a previous step where people join in a "waiting room", and then a "start game is pressed"
// This should check if there are enough players (the button could be disabled if there are not enough players)
// initialize all the connected players and then start the game loop

const Player = require('./player');

const players = ['Chet', 'Pat', 'Sue'];

const main = (players) => {

  if (!Player.enoughPlayers(players)) {
    // console.log('There are no enough players!');
    return;
  }

  const addedPlayers = Player.add(players);
  console.log(addedPlayers);
}


main(players);
