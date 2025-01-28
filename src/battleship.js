class Ship {
    constructor(length) {
        this.length = length;
        this.hitCount = 0;
        this.sunk = false;
    }

    hit() {
        this.hitCount++;
        if (this.isSunk()) {
            this.sunk = true;
        };
    }

    isSunk() {
        return this.hitCount == this.length === this.hitCount;;
    }
}

class GameBoard {
    constructor() {
        this.ships = [
            new Ship(5),
            new Ship(4),
            new Ship(3),
            new Ship(3),
            new Ship(2)
        ];    
    }

    receiveAttack(x, y) {

    }
}

class Player {
    constructor(AI = false) {
        this.AI = AI;
        this.gameBoard = new GameBoard();
    }
}