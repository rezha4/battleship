import { GameBoard } from "./gameBoard";

test("10x10 array generated correctly", () => {
    const player = new GameBoard;
    expect(player.board[9][9]).toBe(0);
    // expect(player.board[10][10]).toBe(undefined); toCatchError(TypeError)
});

test("placeShip works", () => {
    const player = new GameBoard;
    player.placeShip(5, 5, 1);
    expect(player.board[5][5]).toBe(1);
});