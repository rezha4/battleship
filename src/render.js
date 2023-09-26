function renderBoard(player, playerBoard) {
  player.board.forEach((row, x) => {
    row.forEach((col, y) => {
      const div = document.createElement("div");
      div.dataset.x = x;
      div.dataset.y = y;
      if (col == 0) {
        playerBoard.appendChild(div);
      } else if (col == 1) {
        div.classList.add("hit");
        playerBoard.appendChild(div);
      } else if (col != Number) {
        div.classList.add("ship");
        playerBoard.appendChild(div);
      }
    });
  });
}

export { renderBoard };
