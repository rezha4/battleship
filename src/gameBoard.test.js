import { GameBoard } from "./gameBoard";
import { Ships } from "./ships";

test("10x10 array generated correctly", () => {
    const player = new GameBoard;
    expect(player.board[9][9]).toBe(0);
    // expect(player.board[10][10]).toBe(undefined); toCatchError(TypeError)
});

test("placeShip works", () => {
    const cruise = new Ships(5);
    const player = new GameBoard;
    player.placeShip(5, 5, cruise);
    expect(player.board[5][5]).toBe(cruise);
    expect(player.board[5][6]).toBe(cruise);
    expect(player.board[5][7]).toBe(cruise);
    expect(player.board[5][8]).toBe(cruise);
    expect(player.board[5][9]).toBe(cruise);
    expect(player.board[5][4]).toBe(0);
});

test("out of range placeShip is invalid, except for size 1 (which is non-existent for now)", () => {
    const cruise = new Ships(5);
    const player = new GameBoard;
    player.placeShip(9, 9, cruise);
    expect(player.board[9][9]).toBe(0);

    const patrol = new Ships(1);
    player.placeShip(9, 9, patrol);
    expect(player.board[9][9]).toBe(patrol);
});

test("hit() works", () => {
    const cruise = new Ships(1);
    const player = new GameBoard;
    player.placeShip(0, 0, cruise);
    player.receiveAttack(0, 0);
    expect(cruise.isSunk()).toBe(true);

    player.receiveAttack(5, 5);
    expect(player.board[5][5]).toBe(1);
    expect(player.board[5][2]).toBe(0);
})