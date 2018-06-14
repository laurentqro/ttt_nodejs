module.exports = class Cell {
  constructor() {
    this.symbol = null;
  }

  markWithSymbol(symbol) {
    this.symbol = symbol;
  }

  isAvailable() {
    return this.symbol === null;
  }

  isTaken() {
    return !this.isAvailable();
  }
}
