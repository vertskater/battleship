"use strict";

const Ship = require("./ships");

class Gameboard {
  constructor() {
    this.board = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ];
    this.ships = [];
  }
  /**
   *
   * @param {Number} len
   * @param {Number} c1
   * @param {Number} c2
   * @returns
   */
  placeShips(len, c1, c2) {
    const newShip = new Ship(len, false);
    const isShip = this.board[c1][c2];
    if (isNaN(isShip)) c1 += 1;
    if (c1 > 9) c1 = 0;
    if (c2 + len <= 10) {
      this.ships.push(newShip);
      for (let i = 0; i < newShip.len; i++) {
        this.board[c1][c2 + i] = "ship" + newShip.len;
      }
    }
    if (c2 + len > 10) {
      let newC2 = c2 + len - 10;
      c2 = c2 - newC2;
      this.ships.push(newShip);
      for (let i = 0; i < newShip.len; i++) {
        this.board[c1][c2 + i] = "ship" + newShip.len;
      }
    }
    return this.board;
  }
  /**
   *
   * @param {Number} c1
   * @param {Number} c2
   * @returns
   */
  receiveAttack(c1, c2) {
    const fieldContent = this.board[c1][c2];
    if (fieldContent === c2 || fieldContent === "X") {
      this.board[c1][c2] = "X";
      return this.board;
    }
    if (fieldContent.includes("ship")) {
      let shipNr = this.board[c1][c2];
      shipNr = shipNr[4];
      let currentShip = this.ships[shipNr - 1];
      currentShip.isHit();
      currentShip.isSunk();
      this.board[c1][c2] = "X";
      return "ship";
    }
  }
  allShipsSunk() {
    let allSunk = false;
    let shipCounter = 5;
    this.ships.forEach((ship) => {
      if (ship.sunk) shipCounter -= 1;
    });
    if (shipCounter === 0) allSunk = true;
    return allSunk;
  }
}

module.exports = Gameboard;
