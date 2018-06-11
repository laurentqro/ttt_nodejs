const Cell = require('./cell.js');

module.exports = class Board {
  constructor() {
    this.grid = [
      new Cell(1), new Cell(2), new Cell(3),
      new Cell(4), new Cell(5), new Cell(6),
      new Cell(7), new Cell(8), new Cell(9)
    ]
  }

  isEmpty() {
    return this.grid.every(cell => cell.isAvailable());
  }
}
