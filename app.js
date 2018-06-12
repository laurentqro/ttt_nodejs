#!/usr/bin/env node
'use strict';

var Game = require('./lib/game.js');
var cli = require('inquirer');

var game = new Game(cli);
game.play();
