const expect = require('chai').expect;
const Board = require('../lib/board.js');

it('is empty', () => {
  var board = new Board();
  expect(board.isEmpty()).to.equal(true);
});

it('marks a position', () => {
  var board = new Board();
  board.markCellAtPosition(1, "X");
  expect(board.isEmpty()).to.equal(false);
});
