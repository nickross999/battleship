import "./styles.css";

const { GameController } = require("./gameController");

const titleScreen = document.querySelector("#starting-screen");
const startGameButton = document.querySelector("#start");
const gameController = new GameController();

startGameButton.onclick = () => {
    titleScreen.classList.toggle("hidden");
    gameController.buildPlayerInfoDiv();
    gameController.getPlayer1Info();
}