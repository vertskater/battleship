"use stric";

const Ship = require("../controllers/ships");

describe("testing ship object", () => {
  beforeEach(() => {
    newShip = new Ship(2, false);
  });
  test("should init an object", () => {
    expect(newShip).not.toBeNull();
  });
  describe("testing methods", () => {
    beforeEach(() => {});
    test("should change len property", () => {
      expect(newShip.len).toBe(2);
      newShip.isHit();
      expect(newShip.hitpoints).toBe(1);
    });
    test("should proof, if ship is sunk", () => {
      newShip.isSunk();
      expect(newShip.sunk).toBeFalsy();
      newShip.isHit();
      newShip.isHit();
      newShip.isSunk();
      expect(newShip.sunk).toBeTruthy();
    });
  });
});
