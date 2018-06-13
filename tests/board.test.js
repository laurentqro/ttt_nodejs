const expect = require('chai').expect;
const Board = require('../lib/board.js');

it('is empty', () => {
  var board = new Board();
  expect(board.isEmpty()).to.equal(true);
});

it('marks a position', () => {
  var board = new Board();
  board.markCellAtPosition(1, 'X');

  expect(board.isEmpty()).to.equal(false);
  expect(board.getCellAtPosition(1).getSymbol()).to.equal('X');
});

it('identifies new board has no win', () => {
  var board = new Board();
  expect(board.hasWin()).to.equal(false);
});

it('identifies new board has no tie', () => {
  var board = new Board();
  expect(board.hasTie()).to.equal(false);
});

it('identifies a win', () => {
  var board = createBoardWithMoves("X", "X", "X",
                                    4,   5,   6,
                                    7,   8,   9);

  expect(board.hasWin()).to.equal(true);
});

it('identifies a tie', () => {
  var board = createBoardWithMoves("X", "X", "O",
                                   "O", "O", "X",
                                   "X", "O", "X");

  expect(board.hasTie()).to.equal(true);
});

function createBoardWithMoves(...moves) {
  var board = new Board();

  for (let move of moves.entries()) {
    board.markCellAtPosition(move[0] + 1, move[1]);
  }

  return board;
}
