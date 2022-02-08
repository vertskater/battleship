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
  computerPlay(gameboard) {
    let c1 = Math.floor(Math.random() * 10);
    let c2 = Math.floor(Math.random() * 10);
    let boardPos = gameboard.board[c1][c2];
    while (boardPos === "X") {
      c1 = Math.floor(Math.random() * 10);
      c2 = Math.floor(Math.random() * 10);
      boardPos = gameboard.board[c1][c2];
    }
    const isShip = gameboard.receiveAttack(c1, c2);
    return { c1, c2, isShip };
  }
};
