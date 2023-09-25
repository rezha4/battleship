import { GameBoard } from "./gameBoard";
import { Ships } from "./ships";
import { Player } from "./player";

const playerOne = new GameBoard("Player-one");
const playerTwo = new GameBoard("Player-two");

const playerOneBoard = document.querySelector("#player-one #game-board");
const playerTwoBoard = document.querySelector("#player-two #game-board");

const ship5 = new Ships(5);
const ship4 = new Ships(4);
const ship3 = new Ships(3);
const ship2 = new Ships(3);
const ship1 = new Ships(2);

playerOne.placeShip(0, 0, ship5);
playerOne.placeShip(2, 0, ship4);
playerOne.placeShip(4, 0, ship3);
playerOne.placeShip(6, 0, ship2);
playerOne.placeShip(8, 0, ship1);

playerOne.board.forEach((row, x) => {
  row.forEach((col, y) => {
    const div = document.createElement("div");
    div.dataset.x = x;
    div.dataset.y = y;
    if (col == 0 || col == 1) {
      playerOneBoard.appendChild(div);
    } else {
      div.classList.add("ship");
      playerOneBoard.appendChild(div);
    }
  });
});

const shipTwo5 = new Ships(5);
const shipTwo4 = new Ships(4);
const shipTwo3 = new Ships(3);
const shipTwo2 = new Ships(3);
const shipTwo1 = new Ships(2);

playerTwo.placeShip(0, 0, shipTwo5);
playerTwo.placeShip(2, 0, shipTwo4);
playerTwo.placeShip(4, 0, shipTwo3);
playerTwo.placeShip(6, 0, shipTwo2);
playerTwo.placeShip(8, 0, shipTwo1);

playerTwo.board.forEach((row, x) => {
  row.forEach((col, y) => {
    const div = document.createElement("div");
    div.dataset.x = x;
    div.dataset.y = y;
    if (col == 0 || col == 1) {
      playerTwoBoard.appendChild(div);
    } else {
      div.classList.add("ship");
      playerTwoBoard.appendChild(div);
    }
  });
});

let x;
let y;

const playerTwoCells = document.querySelectorAll("#player-two #game-board div");
playerTwoCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    x = parseInt(cell.dataset.x);
    y = parseInt(cell.dataset.y);
    console.log(x + y);
  });
});

let turn = 0;
if (turn % 2 == 0) {
} else {
}
