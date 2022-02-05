"use strict";

const { random } = require("lodash");

module.exports = class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
};

module.exports = class Computer {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
  computerPlay() {
    const c1 = Math.floor(Math.random() * 9);
    const c2 = Math.floor(Math.random() * 9);
  }
};

/* module.exports.Player = Player;
module.exports.Computer = Computer;
 */
