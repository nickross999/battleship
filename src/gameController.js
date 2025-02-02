const { Player } = require("./battleship");
const {
  placeShipClosureBuilder,
  showValidShipPlacementClosureBuilder,
} = require("./closures");

class GameController {
  constructor() {
    this.players = [];
  }

  clearPlayerInfoDiv() {
    const playerInfoDiv = document.querySelector("#player-info");
    while (playerInfoDiv.firstChild) {
      playerInfoDiv.removeChild(playerInfoDiv.firstChild);
    }
  }

  clearBoards() {
    for (let i = 0; i < 2; i++) {
      let container = document.querySelector(`#player${i + 1}-board`);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  }

  getPlayer1Info() {
    const playerInfoDiv = document.querySelector("#player-info");
    playerInfoDiv.classList.toggle("hidden");
    const playerInfoForm = document.querySelector("#player-info-form");
    playerInfoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.players.push(new Player(e.target[0].value));
      this.checkIfPlayer2IsHuman(playerInfoDiv);
    });
  }

  checkIfPlayer2IsHuman(playerInfoDiv) {
    this.clearPlayerInfoDiv();
    const AIorPlayerQuestion = document.createElement("h1");
    AIorPlayerQuestion.textContent = "Is Player 2 a human or a computer?";
    playerInfoDiv.appendChild(AIorPlayerQuestion);

    const humanButton = document.createElement("button");
    humanButton.textContent = "Human";
    humanButton.addEventListener("click", () => {
      this.getPlayer2Info(playerInfoDiv);
    });
    playerInfoDiv.appendChild(humanButton);

    const AIButton = document.createElement("button");
    AIButton.textContent = "Computer";
    AIButton.addEventListener("click", () => {
      this.players.push(new Player("Computer", true));
      this.clearPlayerInfoDiv();
      playerInfoDiv.classList.toggle("hidden");
      this.buildBoards();
      this.pickPlayer1Ships();
    });
    playerInfoDiv.appendChild(AIButton);
  }

  getPlayer2Info(playerInfoDiv) {
    this.clearPlayerInfoDiv();
    const player2NameQuestion = document.createElement("h1");
    player2NameQuestion.textContent = "What's Player 2's name?";
    playerInfoDiv.appendChild(player2NameQuestion);

    const player2InfoForm = document.createElement("form");
    player2InfoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.players.push(new Player(e.target[0].value));
      this.clearPlayerInfoDiv();
      playerInfoDiv.classList.toggle("hidden");
      this.buildBoards();
      this.pickPlayer1Ships();
    });

    const player2FormLabel = document.createElement("label");
    player2FormLabel.htmlFor = "name-input";

    const player2FormInput = document.createElement("input");
    player2FormInput.inputMode = "text";
    player2FormInput.id = "name-input";

    const player2FormSubmitButton = document.createElement("button");
    player2FormSubmitButton.textContent = "Play!";
    player2FormSubmitButton.type = "submit";

    player2InfoForm.appendChild(player2FormLabel);
    player2InfoForm.appendChild(player2FormInput);
    player2InfoForm.appendChild(player2FormSubmitButton);
    playerInfoDiv.appendChild(player2InfoForm);
  }

  buildBoards() {
    this.players.forEach((player, index) => {
      const playerContainer = document.querySelector(
        `#player${index + 1}-board`
      );
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
          if (player.gameBoard.boardMap[i][j] !== null) {
            cell.classList.add("ship");
          }
          row.appendChild(cell);
        }
      }
    });
  }

  pickPlayer1Ships() {
    let player1Cells = document.querySelectorAll("#player1-board .cell");
    let player1Container = document.querySelector("#player1-board");

    for (let i = 0; i < player1Cells.length; i++) {
      player1Cells[i].onclick = placeShipClosureBuilder(
        this.players[0],
        i % 10,
        Math.floor(i / 10),
        player1Container
      );
      player1Cells[i].onmouseenter = showValidShipPlacementClosureBuilder(
        this.players[0],
        i % 10,
        Math.floor(i / 10),
        player1Container
      );
      player1Cells[i].addEventListener("mouseout", () => {
        let cellArray = Array.from(
          document.querySelectorAll("#player1-board .cell")
        );
        cellArray.forEach((cell) => {
          cell.classList.remove("red", "green");
        });
      });
      player1Cells[i].addEventListener("click", () => {
        if (this.players[0].gameBoard.checkIfAllShipsPlaced()) {
          player2Container.classList.remove("disabled");
          this.clearBoards();
          this.buildBoards();
          this.pickPlayer2Ships();
        }
      });
    }

    let player2Container = document.querySelector("#player2-board");
    player2Container.classList.add("disabled");
  }

  pickPlayer2Ships() {
    let player2Cells = document.querySelectorAll("#player2-board .cell");
    let player2Container = document.querySelector("#player2-board");

    for (let i = 0; i < player2Cells.length; i++) {
      player2Cells[i].onclick = placeShipClosureBuilder(
        this.players[1],
        i % 10,
        Math.floor(i / 10),
        player2Container
      );
      player2Cells[i].onmouseenter = showValidShipPlacementClosureBuilder(
        this.players[1],
        i % 10,
        Math.floor(i / 10),
        player2Container
      );
      player2Cells[i].addEventListener("mouseout", () => {
        let cellArray = Array.from(
          document.querySelectorAll("#player2-board .cell")
        );
        cellArray.forEach((cell) => {
          cell.classList.remove("red", "green");
        });
      });
      player2Cells[i].addEventListener("click", () => {
        if (this.players[1].gameBoard.checkIfAllShipsPlaced()) {
          player1Container.classList.remove("disabled");
          this.clearBoards();
          this.buildBoards();
          this.startGame();
        }
      });
    }

    let player1Container = document.querySelector("#player1-board");
    player1Container.classList.add("disabled");
  }

  startGame() {
  }
}

module.exports = { GameController };