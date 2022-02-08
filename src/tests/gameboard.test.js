"use strict";

const Board = require("../controllers/gameboard");

describe("testing gameboard object", () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = new Board();
  });
  test("should init an object", () => {
    expect(gameBoard).not.toBeNull();
    expect(typeof gameBoard).toBe("object");
  });
  describe("testing methods of gameboard object", () => {
    let position;
    beforeEach(() => {
      position = gameBoard.placeShips(1, 3, 5);
      position = gameBoard.placeShips(2, 5, 5);
      position = gameBoard.placeShips(3, 7, 5);
      position = gameBoard.placeShips(4, 9, 3);
      position = gameBoard.placeShips(5, 2, 3);
    });
    test("should return a array with string ship", () => {
      expect(position[3][5]).toMatch(/ship/);
      expect(position[7]).toEqual(
        expect.arrayContaining([1, 2, 3, 4, "ship3", "ship3", "ship3", 9])
      );
    });
    test("should not return a array with string ship", () => {
      position = gameBoard.placeShips(3, 1, 8);
      expect(position[1]).not.toEqual(
        expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, "ship3", "ship3", "ship3"])
      );
    });
    test("should place an x were the gameboard is hit", () => {
      position = gameBoard.receiveAttack(0, 2);
      expect(position[0][2]).toMatch("X");
    });
    test("should change length of ship object", () => {
      gameBoard.receiveAttack(7, 5);
      position = gameBoard.ships[2];
      expect(position.hitpoints).toBe(2);
      position = gameBoard.receiveAttack(7, 6);
      position = gameBoard.receiveAttack(7, 7);
      position = gameBoard.ships[2];
      expect(position.hitpoints).toBe(0);
    });
    test("should test if ship is sunk", () => {
      gameBoard.receiveAttack(7, 5);
      position = gameBoard.ships[2];
      expect(position.sunk).toBeFalsy();
      gameBoard.receiveAttack(7, 6);
      position = gameBoard.ships[2];
      expect(position.sunk).toBeFalsy();
      gameBoard.receiveAttack(7, 7);
      position = gameBoard.ships[2];
      expect(position.sunk).toBeTruthy();
    });
    test("should determine if all ships are sunk", () => {
      let sunken = gameBoard.allShipsSunk();
      expect(sunken).toBeFalsy();
      gameBoard.receiveAttack(3, 5);
      gameBoard.receiveAttack(5, 5);
      gameBoard.receiveAttack(5, 6);
      gameBoard.receiveAttack(7, 5);
      gameBoard.receiveAttack(7, 6);
      gameBoard.receiveAttack(7, 7);
      gameBoard.receiveAttack(9, 3);
      gameBoard.receiveAttack(9, 4);
      gameBoard.receiveAttack(9, 4);
      gameBoard.receiveAttack(9, 5);
      gameBoard.receiveAttack(9, 6);
      gameBoard.receiveAttack(2, 3);
      gameBoard.receiveAttack(2, 4);
      gameBoard.receiveAttack(2, 5);
      gameBoard.receiveAttack(2, 6);
      gameBoard.receiveAttack(2, 7);
      sunken = gameBoard.allShipsSunk();
      expect(sunken).toBeTruthy();
    });
  });
});
