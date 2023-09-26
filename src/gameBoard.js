class GameBoard {
  constructor(playerName) {
    this.board = this.createGameBoard();
    this.ships = [];
    this.sunkenShips = 0;
    this.player = playerName;
    this.allShipsSank = false;
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
  placeShip(x, y, ship) {
    for (let i = 0; i < ship.size; i++) {
      if (ship.size > 1 && y == 9) {
        return;
      } else {
        this.board[x][y + i] = ship;
      }
    }
    this.ships.push(ship);
  }
  receiveAttack(x, y) {
    if (this.board[x][y] != 1) {
      if (this.board[x][y] == 0) {
        this.board[x][y] += 1;
      } else {
        this.board[x][y].hit();
        this.board[x][y] = 2;
        this.ships.forEach((ship) => {
          if (ship.isSunk() == true) {
            this.sunkenShips += 1;
          }
        });
        if (this.sunkenShips >= this.ships.length) {
          this.allShipsSank = true;
        }
      }
    } else {
      return;
    }
  }
}

export { GameBoard };
