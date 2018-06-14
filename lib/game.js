const Board = require('./board.js');
const Player = require('./player.js');

module.exports = class Game {
  constructor(board, playerX, playerO, cli) {
    this.board = board || new Board();
    this.playerX = playerX;
    this.playerO = playerO;
    this.cli = cli;
    this.currentPlayer = playerX;
  }

  play() {
    if (!this.isOver()) {
      this.playTurn();
    } else {
      this.endGame();
    }
  }

  isOver() {
    return this.board.hasWin() || this.board.hasTie();
  }

  startGame() {
    this.cli.greetPlayers();
  }

  async playTurn() {
    this.cli.printBoard(this.board);
    this.cli.announcePlayerTurn(this.currentPlayer);

    let input = await this.currentPlayer.getInput();
    this.markBoard(input.move);
    this.switchPlayers();
    this.play();
  }

  markBoard(position) {
    this.board.markCellAtPosition(position, this.currentPlayer.symbol);
  }

  switchPlayers() {
    let nextPlayer = this.currentPlayer.symbol === this.playerX.symbol ? this.playerO : this.playerX;
    this.currentPlayer = nextPlayer;
  }

  endGame() {
    if (this.board.hasWin()) {
      this.cli.announceWin(this.board);
    } else {
      this.cli.announceTie();
    }
  }
}
