const { Player } = require("./battleship");
const {
  placeShipClosureBuilder,
  showValidShipPlacementClosureBuilder,
} = require("./closures");

class GameController {
  constructor() {
    this.players = [];
    this.winnerDecided = false;
    this.currentPlayerIndex = 0;
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

  showTransitionalScreen(callback, message, buttonText) {
    //a method to display a transitional screen between turns so that the players dont see eachothers boards
    //takes a callback for the button to execute on click, as well as a message to display to the player and the text for the button

    let transitionalScreen = document.createElement("div");
    transitionalScreen.classList.add("transition");
    let transitionalScreenMessageBox = document.createElement("div");
    transitionalScreenMessageBox.classList.add("transition-message-box");
    let transitionalScreenMessage = document.createElement("h1");
    transitionalScreenMessage.classList.add("transition-message");
    transitionalScreenMessage.textContent = message;
    let transitionalScreenMessageBoxButton = document.createElement("button");
    transitionalScreenMessageBoxButton.textContent = buttonText;

    transitionalScreenMessageBoxButton.addEventListener("click", () => {
      this.removeTransitionalScreen();
      callback();
    });

    transitionalScreenMessageBox.appendChild(transitionalScreenMessage);
    transitionalScreenMessageBox.appendChild(
      transitionalScreenMessageBoxButton
    );
    transitionalScreen.appendChild(transitionalScreenMessageBox);
    document.querySelector("body").appendChild(transitionalScreen);
  }

  removeTransitionalScreen() {
    let transitionalScreen = document.querySelector(".transition");
    document.querySelector("body").removeChild(transitionalScreen);
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
      this.showTransitionalScreen(
        () => {
          this.pickPlayer1Ships();
        },
        "Player 1, it's time to place your ships!",
        "Start"
      );
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
      this.showTransitionalScreen(
        () => {
          this.pickPlayer1Ships();
        },
        "Player 1, it's time to place your ships!",
        "Start"
      );
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

  buildBoard(index) {
    const playerContainer = document.querySelector(`#player${index + 1}-board`);
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
        if (this.players[index].gameBoard.boardMap[i][j] !== null) {
          cell.classList.remove("blue");
          cell.classList.add("ship");
        }
        row.appendChild(cell);
      }
    }
  }

  buildEnemyBoard(index) {
    const playerContainer = document.querySelector(`#player${index + 1}-board`);
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
        if (
          this.players[this.currentPlayerIndex === 0 ? 1 : 0].gameBoard[i][
            j
          ] === "miss"
        ) {
          cell.classList.remove("blue");
          cell.classList.add("miss");
        }
        row.appendChild(cell);
      }
    }
  }

  pickPlayer1Ships() {
    this.buildBoard(0);
    const player1Cells = document.querySelectorAll("#player1-board .cell");
    const player1Container = document.querySelector("#player1-board");

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
          this.showTransitionalScreen(
            () => {
              this.pickPlayer2Ships();
            },
            "Player 2, it's time to place your ships!",
            "Start"
          );
        }
      });
    }

    const player2Container = document.querySelector("#player2-board");
    player2Container.classList.add("disabled");
  }

  pickPlayer2Ships() {
    this.buildBoard(1);
    const player2Cells = document.querySelectorAll("#player2-board .cell");
    const player2Container = document.querySelector("#player2-board");

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
          this.showTransitionalScreen(
            () => {
              this.takeNextTurn();
            },
            "Player 1, you're up first!",
            "Start the game!"
          );
        }
      });
    }

    const player1Container = document.querySelector("#player1-board");
    player1Container.classList.add("disabled");
  }

  takeNextTurn() {
    this.clearBoards();
    this.buildBoard(this.currentPlayerIndex);
    this.buildEnemyBoard(this.currentPlayerIndex === 0 ? 1 : 0);
  }
}

module.exports = { GameController };
