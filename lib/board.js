const Line = require('./line.js');
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

  markCellAtPosition(position, symbol) {
    this.cellAtPosition(position).markWithSymbol(symbol);
  }

  cellAtPosition(position) {
    return this.grid[position - 1];
  }

  hasTie() {
    return this.isFull() && !this.hasWin();
  }

  isFull() {
    return this.grid.every(cell => !cell.isAvailable());
  }

  hasWin() {
    return this.lines().some(line => line.hasWin());
  }

  lines() {
    return this.rows().concat(this.columns()).concat(this.diagonals());
  }

  rows() {
    return [
      new Line(this.grid[0], this.grid[1], this.grid[2]),
      new Line(this.grid[3], this.grid[4], this.grid[5]),
      new Line(this.grid[6], this.grid[7], this.grid[8])
    ]
  }

  columns() {
    return [
      new Line(this.grid[0], this.grid[3], this.grid[6]),
      new Line(this.grid[1], this.grid[4], this.grid[7]),
      new Line(this.grid[2], this.grid[5], this.grid[8])
    ]
  }

  diagonals() {
    return [
      new Line(this.grid[0], this.grid[4], this.grid[8]),
      new Line(this.grid[2], this.grid[4], this.grid[6])
    ]
  }

  winningSymbol() {
    if (!this.hasWin()) {
      return null;
    } else {
      let winningLine = this.lines().filter(line => line.hasWin())[0];
      let winningSymbol = winningLine.cells[0].symbol;
      return winningSymbol;
    }
  }

  availableMoves() {
    return this.grid.filter(cell => cell.isAvailable()).map(cell => cell.position);
  }
}
