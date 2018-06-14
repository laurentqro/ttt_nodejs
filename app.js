#!/usr/bin/env node
'use strict';

const Board = require('./lib/board.js');
const Game = require('./lib/game.js');
const Player = require('./lib/player.js');
const cli = require('inquirer');

const board = new Board();
const playerX = new Player("X", cli);
const playerO = new Player("O", cli);

const game = new Game(board, playerX, playerO);

game.play();
