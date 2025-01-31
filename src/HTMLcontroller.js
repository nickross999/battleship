const { Player } = require("./battleship");
const {placeShipClosureBuilder, showValidShipPlacementClosureBuilder} = require("./closures")

class HTMLController {
  constructor() {
    this.players = [
        new Player(),
        new Player()
    ];
  }

  buildBoards() {
    this.players.forEach((player, index) => {
      const playerContainer = document.querySelector(`#player${index + 1}-board`)
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
          cell.onclick = placeShipClosureBuilder(player, j, i, playerContainer);
          cell.onmouseenter = showValidShipPlacementClosureBuilder(
            player,
            j,
            i,
            playerContainer
          );
          cell.addEventListener("mouseout", () => {
            let cellArray = Array.from(document.querySelectorAll(".cell"));
            cellArray.forEach((cell) => {
              cell.classList.remove("red", "green");
            });
          });
          row.appendChild(cell);
        }
      }
    });
  }
}

module.exports = { HTMLController }