class Cell {
  constructor(value) {
    this.value = value || '';
    this.isOpen = false;
    this.neighbors = [];
  }
}

export default Cell;
