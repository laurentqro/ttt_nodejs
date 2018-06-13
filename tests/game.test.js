const expect = require('chai').expect;
const PlayerStub = require('./playerStub.js');
const Game = require('../lib/game.js');
const Board = require('../lib/board.js');

it('is not over at start', () => {
  var game = new Game();
  expect(game.isOver()).to.equal(false);
});

it('is over when there is a winner', () => {
  var game = new Game();
  var board = createBoardWithMoves("X", "X", "X",
                                    4,   5,   6,
                                    7,   8,   9);
  game.board = board;

  expect(game.isOver()).to.equal(true);
});

it('is over when there is a tie', () => {
  var game = new Game();
  var board = createBoardWithMoves("X", "X", "O",
                                   "O", "O", "X",
                                   "X", "O", "X");
  game.board = board;

  expect(game.isOver()).to.equal(true);
});

it('marks the board', async () => {
  var playerStubX = new PlayerStub("X");
  var playerStubO = new PlayerStub("O");
  var game = new Game(playerStubX, playerStubO);

  playerStubX.moves = [1];

  game.playerX = playerStubX;
  game.playerO = playerStubO;

  await game.playTurn();
  expect(game.board.getCellAtPosition(1).isTaken()).to.equal(true);
});

function createBoardWithMoves(...moves) {
  var board = new Board();

  for (let move of moves.entries()) {
    board.markCellAtPosition(move[0] + 1, move[1]);
  }

  return board;
}
