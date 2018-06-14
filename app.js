#!/usr/bin/env node
'use strict';

const Board = require('./lib/board.js');
const Game = require('./lib/game.js');
const Player = require('./lib/player.js');
const Cli = require('./lib/cli.js');

const board = new Board();
const cli = new Cli(board);
const playerX = new Player("X", cli);
const playerO = new Player("O", cli);

const game = new Game(board, playerX, playerO, cli);

game.play();
