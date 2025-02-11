const { LinkedList } = require("./linkedList");

class Ship {
  constructor(name, length, isHorizontal) {
    this.name = name;
    this.length = length;
    this.isHorizontal = isHorizontal;
    this.hitCount = 0;
    this.isSunk = false;
    this.isPlaced = false;
  }

  hit() {
    this.hitCount++;
    if (this.checkIfSunk()) {
      this.isSunk = true;
    }
  }

  checkIfSunk() {
    return this.length === this.hitCount;
  }

  randomizeIsHorizontal() {
    this.isHorizontal = Math.floor(Math.random() * 2) > 0 ? true : false;
  }
}

class GameBoard {
  constructor() {
    this.ships = [
      new Ship("Destroyer (2)", 2, true),
      new Ship("Submarine (3)", 3, true),
      new Ship("Cruiser (3)", 3, true),
      new Ship("Battleship (4)", 4, true),
      new Ship("Carrier (5)", 5, true),
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
    this.shotHistory = new LinkedList();
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
  }

  changeAcceptShipPlacementValue() {
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

  checkIfAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk === true);
  }

  checkIfAllShipsPlaced() {
    return this.ships.every((ship) => ship.isPlaced === true);
  }

  checkIfValidShipPlacement(x, y) {
    if (this.nextShipToPlace.isHorizontal) {
      return !(
        x + this.nextShipToPlace.length > 10 ||
        this.checkAdjacentCellsForShips(x, y)
      );
    } else {
      return !(
        y + this.nextShipToPlace.length > 10 ||
        this.checkAdjacentCellsForShips(x, y)
      );
    }
  }

  checkAdjacentCellsForShips(x, y) {
    for (let i = 0; i < this.nextShipToPlace.length; i++) {
      if (this.nextShipToPlace.isHorizontal) {
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
      this.boardMap[y][x].hit();
      this.recordHit(x, y);
      return true;
    }
  }

  recordHit(x, y) {
    this.hits.push([x, y]);
  }

  recordMissedAttack(x, y) {
    this.missedAttacks.push([x, y]);
  }

  recordShotInHistory(x, y, hitBool) {
    this.shotHistory.addNode([x, y], hitBool);
  }

  coordinatesAreInHits(x, y) {
    for (let i = 0; i < this.hits.length; i++) {
      if (this.hits[i][0] === x && this.hits[i][1] === y) {
        return true;
      }
    }
    return false;
  }

  coordinatesAreInMissedAttacks(x, y) {
    for (let i = 0; i < this.missedAttacks.length; i++) {
      if (this.missedAttacks[i][0] === x && this.missedAttacks[i][1] === y) {
        return true;
      }
    }
    return false;
  }

  getRandomCoordinates() {
    let randomCoordinate = Math.floor(Math.random() * 100);
    return [randomCoordinate % 10, Math.floor(randomCoordinate / 10)];
  }
}

class Player {
  constructor(playerName = "Computer", AI = false) {
    this.playerName = playerName;
    this.AI = AI;
    this.gameBoard = new GameBoard();
  }

  isAI() {
    return this.AI;
  }

  getAITurnDecision() {
    const previousMove = this.gameBoard.shotHistory.getTail();
    if (!this.gameBoard.shotHistory.getRoot() || !previousMove.hitBool) {
      let randomCoordinate = this.gameBoard.getRandomCoordinates();
      while (
        this.gameBoard.shotHistory.searchForCoordinates(
          randomCoordinate[0],
          randomCoordinate[1]
        )
      ) {
        randomCoordinate = this.gameBoard.getRandomCoordinates();
      }
      return randomCoordinate;
    } else {
      const possibleMoves = [
        [previousMove.coordinate[0] + 1, previousMove.coordinate[1]],
        [previousMove.coordinate[0] - 1, previousMove.coordinate[1]],
        [previousMove.coordinate[0], previousMove.coordinate[1] + 1],
        [previousMove.coordinate[0], previousMove.coordinate[1] - 1],
      ];

      const filteredMoves = possibleMoves.filter(
        (move) =>
          move[0] < 10 &&
          move[0] >= 0 &&
          move[1] < 10 &&
          move[1] >= 0 &&
          !this.gameBoard.shotHistory.searchForCoordinates(move[0], move[1])
      );
      if (filteredMoves.length > 0) {
        return filteredMoves[Math.floor(Math.random() * filteredMoves.length)];
      } else {
        let randomCoordinate = this.gameBoard.getRandomCoordinates();
        while (
          this.gameBoard.shotHistory.searchForCoordinates(
            randomCoordinate[0],
            randomCoordinate[1]
          )
        ) {
          randomCoordinate = this.gameBoard.getRandomCoordinates();
        }
        return randomCoordinate;
      }
    }
  }
}

module.exports = { Player, GameBoard, Ship };
