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
      position = gameBoard.receiveAttack(2, 4);
      expect(position[2][4]).toMatch("X");
    });
    test("should change length of ship object", () => {
      position = gameBoard.receiveAttack(7, 5);
      expect(position.hitpoints).toBe(2);
      position = gameBoard.receiveAttack(7, 5);
      position = gameBoard.receiveAttack(7, 5);
      position = gameBoard.receiveAttack(7, 5);
      expect(position.hitpoints).toBe(0);
    });
    test("should test if ship is sunk", () => {
      position = gameBoard.receiveAttack(7, 5);
      expect(position.sunk).toBeFalsy();
      position = gameBoard.receiveAttack(7, 5);
      expect(position.sunk).toBeFalsy();
      position = gameBoard.receiveAttack(7, 5);
      expect(position.sunk).toBeTruthy();
    });
    test("should determine if all ships are sunk", () => {
      let sunken = gameBoard.allShipsSunk();
      expect(sunken).toBeFalsy();
      gameBoard.receiveAttack(3, 5);
      gameBoard.receiveAttack(5, 5);
      gameBoard.receiveAttack(5, 5);
      gameBoard.receiveAttack(7, 5);
      gameBoard.receiveAttack(7, 5);
      gameBoard.receiveAttack(7, 5);
      sunken = gameBoard.allShipsSunk();
      expect(sunken).toBeTruthy();
    });
  });
});
