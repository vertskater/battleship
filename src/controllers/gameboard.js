"use strict";
const Ship = require("./ships");
/*
module.exports.Gameboard = function Gameboard() {
  const createShip = require("./ships");
  const board = [
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
  const ships = [];
  const placeShips = (length, c1, c2) => {
    //create a new Ship with factory Funkction
    const shipHit = [];
    shipHit.length = length;
    for (let i = 0; i < shipHit.length; i++) {
      shipHit[i] = 1;
    }
    const newShip = createShip.Ship(length, shipHit, false);
    ships.push(newShip);
    //place the ship with coordinates
    if (c2 + length <= 10) {
      for (let i = 0; i < newShip.length; i++) {
        board[c1][c2 + i] = "ship" + newShip.length;
      }
    }
    return board;
  };
  const receiveAttack = (c1, c2, len) => {
    let boardContent = board[c1][c2];
    currentShip = ships[len];
    boardContent === c2 ? (board[c1][c2] = "X") : currentShip.isHit(); //TODO:determine what ship is hit.
    return ships;
  };
  return { placeShips, receiveAttack };
};
 */

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
  placeShips(len, c1, c2) {
    const newShip = new Ship(len, false);
    this.ships.push(newShip);
    if (c2 + len <= 10) {
      for (let i = 0; i < newShip.len; i++) {
        this.board[c1][c2 + i] = "ship" + newShip.len;
      }
    }
    return this.board;
  }
  receiveAttack(c1, c2) {
    const fieldContent = this.board[c1][c2];
    if (fieldContent === c2) {
      this.board[c1][c2] = "X";
      return this.board;
    }
    if (fieldContent.includes("ship")) {
      let shipNr = this.board[c1][c2];
      shipNr = shipNr[4];
      let currentShip = this.ships[shipNr - 1];
      currentShip.isHit();
      currentShip.isSunk();
      return currentShip;
    }
  }
  allShipsSunk() {
    let allSunk = false;
    let shipCounter = 3;
    this.ships.forEach((ship) => {
      if (ship.sunk) shipCounter -= 1;
    });
    if (shipCounter === 0) allSunk = true;
    return allSunk;
  }
}

module.exports = Gameboard;
