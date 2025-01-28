const battleship = require("./battleship");

test("no ships sunk", () => {
  let gameBoard = new battleship.GameBoard();
  expect(gameBoard.checkAllShipsSunk()).toBe(false);
});

test("all ships sunk", () => {
  let gameBoard = new battleship.GameBoard();
  gameBoard.ships.forEach((ship) => {
    ship.sunk = true;
  });
  expect(gameBoard.checkAllShipsSunk()).toBe(true);
});

test("some ships sunk", () => {
  let gameBoard = new battleship.GameBoard();
  gameBoard.ships[0].sunk = true;
  expect(gameBoard.checkAllShipsSunk()).toBe(false);
});

test("ships don't extend past board X boundaries", () => {
  let gameBoard = new battleship.GameBoard();
  gameBoard.ships.forEach((ship) => {
    if (ship.orientation === "horizontal") {
      expect(ship.position[0] + ship.length).toBeLessThan(gameBoard.boardSize);
    } else {
      expect(ship.position[0]).toBeLessThan(gameBoard.boardSize);
    }
  });
});

test("ships don't extend past board Y boundaries", () => {
  let gameBoard = new battleship.GameBoard();
  gameBoard.ships.forEach((ship) => {
    if (ship.orientation === "vertical") {
      expect(ship.position[1] + ship.length).toBeLessThan(gameBoard.boardSize);
    } else {
        expect(ship.position[1]).toBeLessThan(gameBoard.boardSize);
    }
  });
});
