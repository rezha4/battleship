class GameBoard {
    constructor () {
        this.board = this.createGameBoard();
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
    }
    //receive attack, x and y, turns that into 1. if ships in that, should call ship.hit()
    receiveAttack(xCoordinate, yCoordinate) {
        if (this.board[xCoordinate][yCoordinate] != 1 && this.board[xCoordinate][yCoordinate] != 0) {
            this.board[xCoordinate][yCoordinate].hit();
        }
        this.board[xCoordinate][yCoordinate] = 1;
        //how to differentiate its a ship attack or a missed attack?
    }
}

export { GameBoard }