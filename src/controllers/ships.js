/* module.exports.Ship = (len, sunk) => {
  const isHit = () => {
    if (len > 0) {
      len - 1;
    }
    return len;
  };
  const isSunk = () => {
    return len === 0 ? (sunk = true) : (sunk = false);
  };
  return { len, sunk, isHit, isSunk };
}; */

module.exports = class Ship {
  /**
   *
   * @param {Number} len
   * @param {Boolean} sunk
   */
  constructor(len, sunk) {
    this.len = len;
    this.sunk = sunk;
    this.hitpoints = len;
  }
  isHit() {
    if (this.hitpoints > 0) this.hitpoints -= 1;
  }
  isSunk() {
    this.hitpoints === 0 ? (this.sunk = true) : (this.sunk = false);
  }
};
