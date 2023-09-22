import { GameBoard } from "./gameBoard";

test("10x10 array generated correctly", () => {
    const player = new GameBoard;
    expect(player.board[9][9]).toBe(0);
    // expect(player.board[10][10]).toBe(undefined); toCatchError(TypeError)
});