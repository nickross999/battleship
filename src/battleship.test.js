const battleship = require("./battleship");

test("all ships placed", () => {
    let gameBoard = new battleship.GameBoard();
    gameBoard.ships.forEach((ship) => {
        ship.isPlaced = true;
    })
    expect(gameBoard.checkIfAllShipsPlaced()).toBe(true);
})

test("no ships placed", () => {
    let gameBoard = new battleship.GameBoard();
    expect(gameBoard.checkIfAllShipsPlaced()).toBe(false);
})

test("coordinates found in missed hits", () => {
    let gameBoard = new battleship.GameBoard();
    gameBoard.missedAttacks.push([1, 2]);
    expect(gameBoard.coordinatesAreInMissedAttacks(1, 2)).toBe(true);
})

test("all ships sunk", () => {
    let gameBoard = new battleship.GameBoard();
    gameBoard.ships.forEach((ship) => {
        ship.isSunk = true;
    })

    expect(gameBoard.checkIfAllShipsSunk()).toBe(true);
})