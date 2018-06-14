const Player = require('../lib/player.js');

module.exports = class PlayerStub extends Player {
  constructor(symbol, moves) {
    super(symbol);
    this.moves = moves;
  }

  getInput() {
    return { move: this.moves.shift() };
  }
}
