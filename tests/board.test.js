const expect = require('chai').expect;
const Board = require('../lib/board.js');

it('is empty', () => {
  var board = new Board();
  expect(board.isEmpty()).to.equal(true);
});
