const expect = require('chai').expect;
const Board = require('../lib/board.js');

it('is empty', () => {
  let board = new Board();
  expect(board.isEmpty()).to.equal(true);
});

it('marks a position', () => {
  let board = new Board();
  board.markCellAtPosition(1, 'X');

  expect(board.isEmpty()).to.equal(false);
  expect(board.cellAtPosition(1).symbol).to.equal('X');
});

it('identifies new board has no win', () => {
  let board = new Board();
  expect(board.hasWin()).to.equal(false);
});

it('identifies new board has no tie', () => {
  let board = new Board();
  expect(board.hasTie()).to.equal(false);
});

it('identifies a win', () => {
  let board = createBoardWithMoves('X', 'X', 'X',
                                    null,   null,   null,
                                    null,   null,   null);

  expect(board.hasWin()).to.equal(true);
});

it('identifies a tie', () => {
  let board = createBoardWithMoves('X', 'X', 'O',
                                   'O', 'O', 'X',
                                   'X', 'O', 'X');

  expect(board.hasTie()).to.equal(true);
});

it('gives available moves', () => {
  let board = createBoardWithMoves('X', 'X', 'O',
                                   'O', 'O', 'X',
                                   'X', 'O',  null);

  let expected = [9];

  expect(board.availableMoves().toString()).to.equal(expected.toString());
});

function createBoardWithMoves(...moves) {
  let board = new Board();

  for (let move of moves.entries()) {
    board.markCellAtPosition(move[0] + 1, move[1]);
  }

  return board;
}
