#!/usr/bin/env node
'use strict';

var Game = require('./lib/game.js');
var Player = require('./lib/player.js');
var cli = require('inquirer');

var playerX = new Player("X", cli);
var playerO = new Player("O", cli);

var game = new Game(playerX, playerO);

game.play();
