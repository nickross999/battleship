//initial board setup and player creation
const { Player } = require("./battleship");
const {placeShipClosureBuilder, showValidShipPlacementClosureBuilder} = require("./closures")

const player1 = new Player();
const player2 = new Player();
let currentPlayer = player1;
const player1Container = document.querySelector("#player1-board");
const player2Container = document.querySelector("#player2-board");
const flipShipButton = document.querySelector("#flip-ship-button");

flipShipButton.addEventListener("click", () => {
  currentPlayer.gameBoard.changeNextShipDirection();
})

function buildBoard(playerContainer, player) {
  const board = document.createElement("div");
  board.classList.add("board");
  playerContainer.appendChild(board);

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    board.appendChild(row);

    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add("blue");
      cell.onclick = placeShipClosureBuilder(player, j, i, playerContainer)
      cell.onmouseenter = showValidShipPlacementClosureBuilder(cell, player, j, i);
      cell.addEventListener("mouseout", () => {
        cell.classList.remove("red", "green");
      });
      row.appendChild(cell);
    }
  }
}

buildBoard(player1Container, player1);
buildBoard(player2Container, player2);