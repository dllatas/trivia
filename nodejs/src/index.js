const Player = require('./player');
const Roll = require('./roll');
const Question = require('./question');
const { outputEmitter } = require('./output');

const game = (players) => {
  if (!Player.enough(players)) {
    outputEmitter.emit('noPlayers');
    return;
  }

  let notWinner = true;
  const addedPlayers = Player.add(players);
  const categoryCount = Question.generateCategoryCounter();

  while (notWinner) {
    for (const player of addedPlayers) {
      outputEmitter.emit('currentPlayer', player);

      const roll = Roll.start();

      if (player.penalty) {
        if (Roll.isOdd(roll)) {
          outputEmitter.emit('penaltyOut', player);
          player.penalty = false;
        } else {
          outputEmitter.emit('penaltyStay', player);
          continue;
        }
      }

      player.place = Player.move(player, roll);

      const { index, category } = Question.ask(player.place, categoryCount);
      categoryCount[category] = index + 1;

      const answer = Question.getAnswer();
      if (Question.isCorrect(answer)) {
        player.purse += 1;
        outputEmitter.emit('coinsPlayer', player);
        if (Player.isWinner(player.purse)) {
          outputEmitter.emit('winner', player);
          notWinner = false;
          break;
        }
      } else {
        player.penalty = true;
        outputEmitter.emit('penaltySent', player);
      }
    }
  }
};

module.exports = {
  game,
};
