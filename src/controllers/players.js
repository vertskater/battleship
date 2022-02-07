"use strict";

const { random } = require("lodash");

module.exports.Player = class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
};

module.exports.Computer = class Computer {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
  computerPlay() {
    let c1 = Math.floor(Math.random() * 10);
    let c2 = Math.floor(Math.random() * 10);
    let boardPos = this.gameboard.board[c1][c2];
    while (boardPos === "X") {
      c1 = Math.floor(Math.random() * 9);
      c2 = Math.floor(Math.random() * 9);
      boardPos = this.gameboard.board[c1][c2];
    }
    this.gameboard.receiveAttack(c1, c2);
  }
};
