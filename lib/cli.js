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
          let isValidInput = board.availableMoves().includes(parseInt(input));
          return isValidInput || 'Please enter a valid move';
        }
      }
    ]

    return this.inquirer.prompt(questions);
  }

  printBoard() {
    for (let row of this.board.rows()) {
      console.log(row.cells.map(cell => cell.symbol || cell.position).join(" | "));
    }
  }

  announcePlayerTurn(player) {
    console.log(`Player ${player.symbol}, it's your turn.`);
  }

  announceWin(board) {
    console.log(`Player ${board.winningSymbol()} wins!`);
  }

  announceTie() {
    console.log(`It's a tie!`);
  }
}
