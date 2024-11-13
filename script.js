const sudokuBoard = document.getElementById('sudoku-board');

// Sample Sudoku puzzle
const sudokuPuzzle = [
  [5, 3, '', '', 7, '', '', '', ''],
  [6, '', '', 1, 9, 5, '', '', ''],
  ['', 9, 8, '', '', '', '', 6, ''],
  [8, '', '', '', 6, '', '', '', 3],
  [4, '', '', 8, '', 3, '', '', 1],
  [7, '', '', '', 2, '', '', '', 6],
  ['', 6, '', '', '', '', 2, 8, ''],
  ['', '', '', 4, 1, 9, '', '', 5],
  ['', '', '', '', 8, '', '', 7, 9]
];

// Generate Sudoku board
function createSudokuBoard() {
  sudokuBoard.innerHTML = '';
  sudokuPuzzle.forEach((row, rowIndex) => {
    row.forEach((cellValue, colIndex) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      // If the cell has a number, display it; otherwise, make it editable
      if (cellValue !== '') {
        cell.textContent = cellValue;
      } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.addEventListener('input', (e) => {
          const value = e.target.value;
          if (!/^[1-9]$/.test(value)) {
            e.target.value = '';
          }
        });
        cell.appendChild(input);
      }
      sudokuBoard.appendChild(cell);
    });
  });
}

function checkSolution() {
  const cells = document.querySelectorAll('#sudoku-board .cell input');
  const solution = sudokuPuzzle.map(row => [...row]);

  cells.forEach((cell, index) => {
    const rowIndex = Math.floor(index / 9);
    const colIndex = index % 9;
    solution[rowIndex][colIndex] = parseInt(cell.value, 10) || '';
  });

  // Simplistic solution check (just for illustration)
  const isSolved = solution.every(row => row.every(num => typeof num === 'number' && num >= 1 && num <= 9));
  alert(isSolved ? "Congratulations, you've solved it!" : "Incomplete or incorrect solution!");
}

document.getElementById('check-solution').addEventListener('click', checkSolution);

createSudokuBoard();
