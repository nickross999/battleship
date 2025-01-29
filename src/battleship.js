class Ship {
  constructor(shipName, orientation, length, positionX, positionY) {
    this.shipName = shipName;
    this.orientation = orientation;
    this.length = length;
    this.headPosition = [positionX, positionY];
    this.hitCount = 0;
    this.sunk = false;
  }

  hit() {
    this.hitCount++;
    if (this.isSunk()) {
      this.sunk = true;
    }
  }

  setHeadPosition(x, y) {
    this.position = [x, y];
  }

  changeOrientation() {
    this.orientation =
      this.orientation === "horizontal" ? "vertical" : "horizontal";
  }

  isSunk() {
    return this.length === this.hitCount;
  }
}

class GameBoard {
  constructor() {
    this.ships = this.generateShips();
    this.boardMap = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    this.populateBoardMap();
    this.hits = [];
    this.missedAttacks = [];
  }

  checkIfSafeToPlaceShip(x, y, length, orientation) {
    if (orientation === "horizontal") {
      for (let i = 0; i < length; i++) {
        if (this.boardMap[y][x + i] !== null) {
          return false;
        }
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < length; i++) {
        if (this.boardMap[y + i][x] !== null) {
          return false;
        }
      }
    }
    return true;
  }

  populateBoardMap() {
    this.ships.forEach((ship) => {
      let shipPlaced = false;
      while (!shipPlaced) {
        if (ship.orientation === "horizontal") {
          if (
            this.checkIfSafeToPlaceShip(
              ship.headPosition[0],
              ship.headPosition[1],
              ship.length,
              ship.orientation
            )
          ) {
            for (let i = 0; i < length; i++) {
              this.boardMap[ship.headPosition[1]][ship.headPosition[0] + i] =
                ship;
            }
            shipPlaced = true;
          } else {
            this.randomizeShipPosition(ship);
          }
        } else if (ship.orientation === "vertical") {
          if (
            this.checkIfSafeToPlaceShip(
              ship.headPosition[0],
              ship.headPosition[1],
              ship.length,
              ship.orientation
            )
          ) {
            for (let i = 0; i < length; i++) {
              this.boardMap[ship.headPosition[1] + i][ship.headPosition[0]] =
                ship;
            }
            shipPlaced = true;
          } else {
            this.randomizeShipPosition(ship);
          }
        }
      }
    });
  }

  randomizeShipPosition(ship) {
    let positionX = -1;
    let positionY = -1;
    while (
      positionX < 0 ||
      positionY < 0 ||
      this.boardMap[positionY][positionX] !== null
    ) {
      positionX =
        ship.orientation === "horizontal"
          ? Math.floor(Math.random() * 10) - length
          : Math.floor(Math.random() * 10);
      positionY =
        ship.orientation === "vertical"
          ? Math.floor(Math.random() * 10) - length
          : Math.floor(Math.random() * 10);
    }

    ship.setHeadPosition(positionX, positionY);
  }

  generateShips() {
    let shipDetails = [
      { name: "carrier", length: 5 },
      { name: "battleship", length: 4 },
      { name: "cruiser", length: 3 },
      { name: "submarine", length: 3 },
      { name: "destroyer", length: 2 },
    ];
    let ships = [];
    for (let i = 0; i < shipDetails.length; i++) {
      let shipName = shipDetails[i].name;
      let orientation = Math.random() * 10 >= 5 ? "horizontal" : "vertical";
      let length = shipDetails[i].length;
      let positionX =
        orientation === "horizontal"
          ? Math.floor(Math.random() * 10) - length
          : Math.floor(Math.random() * 10);
      let positionY =
        orientation === "vertical"
          ? Math.floor(Math.random() * 10) - length
          : Math.floor(Math.random() * 10);
      ships.push(new Ship(shipName, orientation, length, positionX, positionY));
    }
    return ships;
  }

  checkAllShipsSunk() {
    return this.ships.every((ship) => ship.sunk);
  }

  checkValidAttack(x, y) {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].orientation === "horizontal") {
        if (
          this.ships[i].position[0] <= x &&
          x <= this.ships[i].position[0] + this.ships[i].length &&
          this.ships[i].position[1] === y
        ) {
          this.receiveAttack(x, y);
          return true;
        } else {
          this.recordMissedAttack(x, y);
          return false;
        }
      } else if (this.ships[i].orientation === "vertical") {
        if (
          this.ships[i].position[0] === x &&
          this.ships[i].position[1] <= y &&
          y <= this.ships[i].position[1] + this.ships[i].length
        ) {
          this.receiveAttack(x, y);
          return true;
        } else {
          this.recordMissedAttack(x, y);
          return false;
        }
      }
    }
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
