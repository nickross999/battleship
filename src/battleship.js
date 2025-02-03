class Ship {
  constructor(name, length, isHorizontal) {
    this.name = name;
    this.length = length;
    this.isHorizontal = isHorizontal;
    this.hitCount = 0;
    this.sunk = false;
    this.isPlaced = false;
  }

  hit() {
    this.hitCount++;
    if (this.isSunk()) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.length === this.hitCount;
  }
}

class GameBoard {
  constructor() {
    this.ships = [
      new Ship("destroyer", 2, true),
      new Ship("submarine", 3, true),
      new Ship("cruiser", 3, true),
      new Ship("battleship", 4, true),
      new Ship("carrier", 5, true),
    ];
    this.acceptingShipPlacement = true;
    this.nextShipToPlace = this.ships[0];
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
    this.hits = [];
    this.missedAttacks = [];
  }

  changeNextShipToPlace(nextShipID = null) {
    if (!nextShipID) {
      for (let i = 0; i < this.ships.length; i++) {
        if (!this.ships[i].isPlaced) {
          this.nextShipToPlace = this.ships[i];
          i = this.ships.length;
        }
      }
    } else {
      this.nextShipToPlace = this.ships[nextShipID];
    }
  }

  changeNextShipDirection() {
    this.nextShipToPlace.isHorizontal = !this.nextShipToPlace.isHorizontal;
    console.log(this.nextShipToPlace.isHorizontal);
  }

  changeAcceptShipPlacementValue(){
    this.acceptingShipPlacement = !this.acceptingShipPlacement;
  }

  placeShip(x, y) {
    for (let i = 0; i < this.nextShipToPlace.length; i++) {
      if (this.nextShipToPlace.isHorizontal) {
        this.boardMap[y][x + i] = this.nextShipToPlace;
        this.nextShipToPlace.isPlaced = true;
      } else {
        this.boardMap[y + i][x] = this.nextShipToPlace;
        this.nextShipToPlace.isPlaced = true;
      }
    }
    if (!this.checkIfAllShipsPlaced()) {
      this.changeNextShipToPlace();
    } else {
      this.nextShipToPlace = new Ship("null", 0, true);
    }
  }

  checkIfAllShipsPlaced() {
    return this.ships.every((ship) => ship.isPlaced === true)
  }

  checkIfValidShipPlacement(x, y) {
    if (this.nextShipToPlace.isHorizontal) {
      if (
        x + this.nextShipToPlace.length > 10 ||
        this.checkAdjacentCellsForShips(x, y)
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      if (
        y + this.nextShipToPlace.length > 10 ||
        this.checkAdjacentCellsForShips(x, y)
      ) {
        return false;
      } else {
        return true;
      }
    }
  }

  checkAdjacentCellsForShips(x, y) {
    for (let i = 0; i < this.nextShipToPlace.length; i++) {
      if (this.nextShipToPlace.isHorizontal){
        if (this.boardMap[y][x + i] !== null) {
          return true;
        }
      } else {
        if (this.boardMap[y + i][x] !== null) {
          return true;
        }
      }
    }
    return false;
  }

  receiveAttack(x, y) {
    if (this.boardMap[y][x] === null) {
      this.recordMissedAttack(x, y);
      return false;
    } else {
      this.recordHit(x, y);
      return true;
    }
  }

  recordMissedAttack(x, y) {
    this.missedAttacks.push([x, y]);
  }
}

class Player {
  constructor(playerName, AI = false) {
    this.playerName = playerName;
    this.AI = AI;
    this.gameBoard = new GameBoard();
  }
}

module.exports = { Player, GameBoard, Ship };
