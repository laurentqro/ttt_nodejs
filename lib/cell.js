module.exports = class Cell {
  constructor(position) {
    this.position = position;
    this.mark = null;
  }

  isAvailable() {
    return this.mark === null;
  }

  markWithSymbol(symbol) {
    this.mark = symbol;
  }
}
