import { GameBoard } from "./gameBoard";
import { Ships } from "./ships";
import { Player } from "./player";

const playerOne = new GameBoard();

const playerTwo = new GameBoard();

const playerOneBoard = document.querySelector("#player-one #game-board");
const playerTwoBoard = document.querySelector("#player-two #game-board");

playerOne.board.forEach((cell) => {
  cell.forEach((child) => {
    const div = document.createElement("div");
    playerOneBoard.appendChild(div);
  });
});

playerTwo.board.forEach((cell) => {
  cell.forEach((child) => {
    const div = document.createElement("div");
    playerTwoBoard.appendChild(div);
  });
});

//add class list on each child. if != 0 || 1, class list ship..
//game loop?