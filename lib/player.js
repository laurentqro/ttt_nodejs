module.exports = class Player {
  constructor(symbol, cli) {
    this.symbol = symbol;
    this.cli = cli;
    this.questions = [
      {
        name: 'move',
        type: 'input',
        message: 'Please pick your move: ',
      }
    ]
  }

  getInput() {
    return this.cli.prompt(this.questions);
  }
}
