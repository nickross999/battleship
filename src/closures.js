function placeShipClosureBuilder(player, x, y, playerContainer) {
  return function () {
    if (player.gameBoard.checkIfValidShipPlacement(x, y)) {
      player.gameBoard.placeShip(x, y);
      let rowArray = Array.from(playerContainer.firstChild.childNodes);
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            console.log(i);
            console.log(j);
            if (
                typeof player.gameBoard.boardMap[i][j] === "object" &&
                player.gameBoard.boardMap[i][j] !== null
              ) {
                rowArray[i].childNodes[j].classList.add("ship");
              }
        }
      }
    }
  };
}

function showValidShipPlacementClosureBuilder(cell, player, x, y) {
  return function () {
    if (player.gameBoard.checkIfValidShipPlacement(x, y)) {
      cell.classList.add("green");
    } else {
      cell.classList.add("red");
    }
  };
}

function returnName(obj) {
  return function () {
    return obj[0];
  };
}

module.exports = {
  placeShipClosureBuilder,
  showValidShipPlacementClosureBuilder,
  returnName,
};
