/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  console.log("fdgfgfgf");
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let result = [];
  for (let y = 0; y < board.length; y += 1) {
    const box = board[y].slice(0, 3);
    if (y === 0) box.unshift("\n");
    if (y === 3 || y == 6) box.unshift(" ", "\n");
    box.push(
      " ",
      board[y].slice(3, 6).join(" "),
      " ",
      board[y].slice(6).join(" "),
      "\n"
    );
    result.push(box.join(" "));
  }

  return result.join(" ");
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
