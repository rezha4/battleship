import { GameBoard } from "./gameBoard";
import { Ships } from "./ships";
import { Player } from "./player";
import { renderBoard, removeAllChildNodes } from "./render";

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

renderBoard(playerOne, playerOneBoard);

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

renderBoard(playerTwo, playerTwoBoard);

let currentPlayer = "player";

function handlePlayerMove(e) {
  const clickedCell = e.target;
  const x = parseInt(clickedCell.dataset.x);
  const y = parseInt(clickedCell.dataset.y);

  if (playerTwo.board[x][y] == 1 || playerTwo.board[x][y] == 2) {
    console.log("invalid move");
    return;
  }

  playerTwo.receiveAttack(x, y);
  removeAllChildNodes(playerTwoBoard);
  renderBoard(playerTwo, playerTwoBoard);

  if (playerTwo.allShipsSank) {
    alert("Player wins");
    return;
  } else {
    currentPlayer = "computer";
    setTimeout(computerMove(), 1000);
  }
}

function computerMove() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  if (playerOne.board[x][y] == 1 || playerOne.board[x][y] == 2) {
    computerMove();
  }
  playerOne.receiveAttack(x, y);
  removeAllChildNodes(playerOneBoard);
  renderBoard(playerOne, playerOneBoard);

  if (playerOne.allShipsSank) {
    alert("Com wins");
  } else {
    currentPlayer = "player";
  }
}

playerTwoBoard.addEventListener("click", handlePlayerMove);
