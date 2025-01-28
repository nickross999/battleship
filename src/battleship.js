class Ship {
  constructor(orientation, length, positionX, positionY) {
    this.orientation = orientation;
    this.length = length;
    this.position = [positionX, positionY];
    this.hitCount = 0;
    this.sunk = false;
  }

  hit() {
    this.hitCount++;
    if (this.isSunk()) {
      this.sunk = true;
    }
  }

  setPosition(x, y) {
    this.position = [x, y];
  }

  changeOrientation() {
    this.orientation =
      this.orientation === "horizontal" ? "vertical" : "horizontal";
  }

  isSunk() {
    return (this.hitCount == this.length) === this.hitCount;
  }
}

class GameBoard {
  constructor() {
    this.MAX_SHIP_LENGTH = 5;
    this.MIN_SHIP_LENGTH = 3;
    this.boardSize = 20;
    this.numberOfShips = 6;
    this.ships = this.generateShips();
    this.hits = [];
    this.missedAttacks = [];
  }

  generateShips() {
    let ships = [];
    for (let i = 0; i < this.numberOfShips; i++) {
      let orientation = Math.random() * 10 > 5 ? "horizontal" : "vertical";
      let length = Math.floor(
        Math.random() * (this.MAX_SHIP_LENGTH - this.MIN_SHIP_LENGTH) +
          this.MIN_SHIP_LENGTH
      );
      let positionX =
        orientation === "horizontal"
          ? Math.floor(Math.random() * this.boardSize) - length
          : Math.floor(Math.random() * this.boardSize);
      let positionY =
        orientation === "vertical"
          ? Math.floor(Math.random() * this.boardSize) - length
          : Math.floor(Math.random() * this.boardSize);
      ships.push(new Ship(orientation, length, positionX, positionY));
    }
    return ships;
  }

  checkAllShipsSunk() {
    return this.ships.every((ship) => ship.sunk);
  }

  receiveAttack(x, y) {
    this.hits.push([x, y]);
  }

  recordMissedAttack(x, y) {
    this.missedAttacks.push([x, y]);
  }
}

class Player {
  constructor(AI = false) {
    this.AI = AI;
    this.gameBoard = new GameBoard();
  }
}

module.exports = { Player, GameBoard, Ship };
