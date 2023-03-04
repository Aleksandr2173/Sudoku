/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  function makeBord(boardString = "") {
    const srtArr = boardString.split("");
    const bigArr = [];
    for (let i = 0; i < srtArr.length; i += 1) {
      bigArr.push(srtArr.splice(0, 9));
    }

    return bigArr;
  }

  const bord = makeBord(boardString);
  // console.log(bord);

  function foundEmpty(bord) {
    let coord = [];
    for (let y = 0; y < bord.length; y += 1) {
      for (let x = 0; x < bord.length; x++) {
        if (bord[y][x] === "-") {
          return (coord = [y, x]);
        }
      }
      // return null;
    }
  }

  // console.log(foundEmpty(bord));

  //проверка клетки на валидность
  function validete(num, pos = [], board = []) {
    const [y, x] = pos;

    // проверка строки
    for (let i = 0; i < 9; i += 1) {
      if (board[y][i] === num) {
        return false;
      }
    }
    // по столбцу
    for (let i = 0; i < 9; i++) {
      if (board[i][x] === num) {
        return false;
      }
    }
    // поиск  квадрата

    const boxX = Math.floor(x / 3) * 3;
    const boxY = Math.floor(y / 3) * 3;

    for (let i = boxX; i < boxX + 3; i += 1) {
      for (let j = boxY; j < boxY + 3; j += 1) {
        if (board[i][j] === num && i !== x && j !== y) {
          return false;
        }
      }
      return true;
    }
  }

  const mySolve = () => {
    const curPos = foundEmpty(bord);
    if (curPos === null) {
      return true;
    }
    for (let i = 1; i <= 9; i++) {
      const curNum = i.toString();
      const isSolved = validete(curNum, curPos, bord);
      if (isSolved) {
        const [y, x] = curPos;
        bord[y][x] = curNum;
        if (mySolve()) {
          return true;
        }
        // bord[y][x] = '-';
      }
    }
    return false;
  };
  mySolve();
  return bord;
  // console.log(bord);
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
