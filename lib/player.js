module.exports = class Player {
  constructor(symbol, cli) {
    this.symbol = symbol;
    this.cli = cli;
  }

  getInput() {
    return this.cli.getInput();
  }
}
