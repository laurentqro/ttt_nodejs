var Board = require('./board.js');
var Player = require('./player.js');

module.exports = class Game {
  constructor(cli) {
    this.board = new Board();
    this.playerX = new Player("X", cli);
    this.playerO = new Player("O", cli);
    this.currentPlayer = this.playerX;
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
    console.log("Welcome to Tic Tac Toe");
  }

  playTurn() {
    this.printBoard();
    console.log(`Player ${this.currentPlayer.getSymbol()}, it's your turn.`);

    this.currentPlayer.getInput().then(input => {
      this.markBoard(input.move);
      this.switchPlayers();
      this.play();
    });
  }

  markBoard(position) {
    this.board.markCellAtPosition(position, this.currentPlayer.getSymbol());
  }

  switchPlayers() {
    var nextPlayer = this.currentPlayer.getSymbol() === this.playerX.getSymbol() ? this.playerO : this.playerX;
    this.currentPlayer = nextPlayer;
  }

  printBoard() {
    console.log(this.board);
  }

  endGame() {
    if (this.board.hasWin()) {
      console.log(`Player ${this.board.getWinningSymbol()} wins!`);
    } else {
      console.log(`It's a tie!`);
    }
  }
}
