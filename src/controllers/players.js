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
  init() {
    let c1, c2;
    for (let i = 1; i < 6; i++) {
      c1 = Math.floor(Math.random() * 10);
      c2 = Math.floor(Math.random() * 10);
      this.gameboard.placeShips(i, c1, c2);
    }
  }
  computerPlay() {
    let c1 = Math.floor(Math.random() * 10);
    let c2 = Math.floor(Math.random() * 10);
    let boardPos = this.gameboard.board[c1][c2];
    while (boardPos === "X") {
      c1 = Math.floor(Math.random() * 10);
      c2 = Math.floor(Math.random() * 10);
      boardPos = this.gameboard.board[c1][c2];
    }
    this.gameboard.receiveAttack(c1, c2);
  }
};
