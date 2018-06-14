const expect = require('chai').expect;
const PlayerStub = require('./playerStub.js');
const Game = require('../lib/game.js');
const Board = require('../lib/board.js');

it('is not over at start', () => {
  let game = new Game();

  expect(game.isOver()).to.equal(false);
});

it('is over when there is a winner', () => {
  let board = createBoardWithMoves('X', 'X', 'X',
                                    4,   5,   6,
                                    7,   8,   9);

  let game = new Game(board);

  expect(game.isOver()).to.equal(true);
});

it('is over when there is a tie', () => {
  let board = createBoardWithMoves('X', 'X', 'O',
                                   'O', 'O', 'X',
                                   'X', 'O', 'X');
  let game = new Game(board);

  expect(game.isOver()).to.equal(true);
});

it('marks the board', async () => {
  let board = createBoardWithMoves( 1,  'X', 'O',
                                   'O', 'O', 'X',
                                   'X', 'O', 'X');

  let playerStubX = new PlayerStub('X', [1]);
  let playerStubO = new PlayerStub('O');

  let game = new Game(board, playerStubX, playerStubO);

  game.playerX = playerStubX;
  game.playerO = playerStubO;

  await game.playTurn();

  expect(game.board.cellAtPosition(1).isTaken()).to.equal(true);
});

function createBoardWithMoves(...moves) {
  let board = new Board();

  for (let move of moves.entries()) {
    board.markCellAtPosition(move[0] + 1, move[1]);
  }

  return board;
}
