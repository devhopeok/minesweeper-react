class Cell {
  constructor(value) {
    this.value = value || '';
    this.isOpen = false;
    this.hasFlag = false;
    this.neighbors = [];
  }
}

export default Cell;
