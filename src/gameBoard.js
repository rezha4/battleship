class GameBoard {
  constructor(playerName) {
    this.board = this.createGameBoard();
    this.ships = [];
    this.sunkenShips = 0;
    this.player = playerName;
  }
  createGameBoard() {
    let gameBoard = [];
    for (let i = 0; i < 10; i++) {
      let arr = [];
      gameBoard.push(arr);
      for (let j = 0; j < 10; j++) {
        arr.push(0);
      }
    }
    return gameBoard;
  }
  placeShip(xCoordinate, yCoordinate, ship) {
    for (let i = 0; i < ship.size; i++) {
      if (ship.size > 1 && yCoordinate == 9) {
        return;
      } else {
        this.board[xCoordinate][yCoordinate + i] = ship;
      }
    }
    this.ships.push(ship);
  }
  receiveAttack(xCoordinate, yCoordinate) {
    if (
      this.board[xCoordinate][yCoordinate] === 1 ||
      (this.board[xCoordinate][yCoordinate] &&
        typeof this.board[xCoordinate][yCoordinate].isSunk === "function" &&
        this.board[xCoordinate][yCoordinate].isSunk() === true)
    ) {
      return;
    } else {
      if (this.board[xCoordinate][yCoordinate] != 0) {
        this.board[xCoordinate][yCoordinate].hit();
        this.ships.forEach((ship) => {
          if (ship.isSunk() == true) {
            this.sunkenShips += 1;
          }
        });
        if (this.sunkenShips >= this.ships.length) {
            return "los";
        }
      } else {
        this.board[xCoordinate][yCoordinate] = 1;
      }
    }
  }
}

export { GameBoard };
