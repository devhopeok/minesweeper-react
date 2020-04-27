import Cell from './Cell';

class Game {
  constructor(rows, cols, bombCount) {
    this.rowLength = rows;
    this.colLength = cols;
    this.bombCount = bombCount;
    this.flagCount = 0;
    this.gameOver = false;
    this.board = []

    this.initialize();
  }

  initialize() {
    this.board = this._get2DGrid(this.rowLength, this.colLength);

    this._seedBomb();
  }

  addFlag(cell) {
    cell.hasFlag = true;
    this.flagCount++;
  }

  removeFlag(cell) {
    cell.hasFlag = false;
    this.flagCount--;
  }

  reveal(cell) {
    cell.isOpen = true;
    if (cell.value === '*') {
      this.gameOver = true;
      return;
    }
    if (cell.value) return;

    cell.neighbors.forEach(neighbor => {
      if (!neighbor.isOpen && neighbor.value !== '*' && !neighbor.hasFlag) {
        this.reveal(neighbor);
      }
    });
  }

  _get2DGrid(rows, cols) {
    let grid = (new Array(rows));

    for (let row = 0; row < grid.length; row++) {
      grid[row] = new Array(cols).fill(null);
    }

    return grid;
  }

  _seedBomb() {
    let bombCounter = this.bombCount;

    // seed bomb randomly
    while (bombCounter > 0) {
      let randomRow = Math.floor(Math.random() * this.rowLength);
      let randomCol = Math.floor(Math.random() * this.colLength);

      if (!this.board[randomRow][randomCol]) {
        this.board[randomRow][randomCol] = new Cell('*');
        bombCounter--;
      }
    }

    // initialize empty spaces with Cell objects
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        if (!this.board[row][col]) {
          this.board[row][col] = new Cell();
        }
      }
    }

    this._populateHints();
  }

  _getNeighbors(cell, rowPos, colPos) {
    // position difference of neighbors relative to current cell position
    let deltaPosition = [
    // row, col
      [-1, -1], // top left
      [-1, 0],  // top
      [-1, 1],  // top right
      [0, -1],  // left
      [0, 1],   // right
      [1, -1],  // bottom left
      [1, 0],   // bottom
      [1, 1]    // bottom right
    ];

    let bombCount = 0;

    deltaPosition.forEach(coord => {
      let nRowPos = rowPos + coord[0];
      let nColPos = colPos + coord[1];

      if (nRowPos > -1 && nRowPos < this.rowLength) {
        let neighbor = this.board[nRowPos][nColPos];
        if (neighbor) {
          cell.neighbors.push(neighbor);

          if (neighbor.value === '*') bombCount++;
        }
      }
    });

    if (cell.value !== '*') cell.value = bombCount;
  }

  _populateHints() {
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        this._getNeighbors(this.board[row][col], row, col);
      }
    }
  }

  print() {
    this.board.forEach(row => {
      let str = '';
      row.forEach(col => {
        let state = col.isOpen ? 'o' : 'c';
        if (col && col.value) {
          str += `${col.value}${state}, `;
        } else {
          str += ` ${state}, `;
        }
      });
      console.log(str);
    })
  }
}

export default Game;
