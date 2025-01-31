function placeShipClosureBuilder(player, x, y, playerContainer) {
  return function () {
    if (!player.gameBoard.acceptingShipPlacement) { 
      return;
    }
    if (player.gameBoard.checkIfValidShipPlacement(x, y)) {
      player.gameBoard.placeShip(x, y);
      let rowArray = Array.from(playerContainer.firstChild.childNodes);
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (
            typeof player.gameBoard.boardMap[i][j] === "object" &&
            player.gameBoard.boardMap[i][j] !== null
          ) {
            rowArray[i].childNodes[j].classList.add("ship");
          }
        }
      }
      if (player.gameBoard.checkIfAllShipsPlaced()) {
        playerContainer.classList.add("disabled");

      }
    }
  };
}

function showValidShipPlacementClosureBuilder(player, x, y, playerContainer) {
  return function () {
    if (!player.gameBoard.acceptingShipPlacement) { 
      return;
    }
    let rowArray = Array.from(playerContainer.firstChild.childNodes);
    if (player.gameBoard.checkIfValidShipPlacement(x, y)) {
      if (player.gameBoard.nextShipToPlace.isHorizontal) {
        for (
          let i = x;
          i < 10 && i < x + player.gameBoard.nextShipToPlace.length;
          i++
        ) {
          rowArray[y].childNodes[i].classList.add("green");
        }
      } else {
        for (
          let i = y;
          i < 10 && i < y + player.gameBoard.nextShipToPlace.length;
          i++
        ) {
          rowArray[i].childNodes[x].classList.add("green");
        }
      }
    } else {
      if (player.gameBoard.nextShipToPlace.isHorizontal) {
        for (
          let i = x;
          i < 10 && i < x + player.gameBoard.nextShipToPlace.length;
          i++
        ) {
          rowArray[y].childNodes[i].classList.add("red");
        }
      } else {
        for (
          let i = y;
          i < 10 && i < y + player.gameBoard.nextShipToPlace.length;
          i++
        ) {
          rowArray[i].childNodes[x].classList.add("red");
        }
      }
    }
  };
}

module.exports = {
  placeShipClosureBuilder,
  showValidShipPlacementClosureBuilder,
};
