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
    placeShip(xCoordinate, yCoordinate, shipSize) {
        this.board[xCoordinate][yCoordinate] = 1;
    }
    //place ship function
    //coordinate
    //add 1 in that coordinate (ship is there)
}

export { GameBoard }