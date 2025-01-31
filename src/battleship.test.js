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