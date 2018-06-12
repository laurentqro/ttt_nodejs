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

it('identifies no win', () => {
  var board = new Board();

  board.markCellAtPosition(1, 'X');
  board.markCellAtPosition(2, 'X');
  board.markCellAtPosition(6, 'X');
  board.markCellAtPosition(7, 'X');
  board.markCellAtPosition(9, 'X');

  board.markCellAtPosition(3, 'O');
  board.markCellAtPosition(4, 'O');
  board.markCellAtPosition(5, 'O');
  board.markCellAtPosition(8, 'O');

  expect(board.hasWin()).to.equal(false);
});

it('identifies a win', () => {
  var board = new Board();

  board.markCellAtPosition(1, 'X');
  board.markCellAtPosition(2, 'X');
  board.markCellAtPosition(3, 'X');

  expect(board.hasWin()).to.equal(true);
});

it('identifies a tie', () => {
  var board = new Board();

  board.markCellAtPosition(1, 'X');
  board.markCellAtPosition(2, 'X');
  board.markCellAtPosition(6, 'X');
  board.markCellAtPosition(7, 'X');
  board.markCellAtPosition(9, 'X');

  board.markCellAtPosition(3, 'O');
  board.markCellAtPosition(4, 'O');
  board.markCellAtPosition(5, 'O');
  board.markCellAtPosition(8, 'O');

  expect(board.hasTie()).to.equal(true);
});
