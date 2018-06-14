module.exports = class Cli {
  constructor(board) {
    this.inquirer = require('inquirer');
    this.board = board;
  }

  getInput() {
    let board = this.board;
    let questions = [
      {
        name: 'move',
        type: 'input',
        message: 'Please pick your move: ',
        validate: function isValidInput(input) {
          return board.availableMoves().includes(parseInt(input));
        }
      }
    ]

    return this.inquirer.prompt(questions);
  }
}
