class Cell {
  constructor(value) {
    this.value = value || ''; // numeric hint or bomb
    this.isOpen = false;
    this.hasFlag = false;
    this.neighbors = [];      // collection of neighboring cells for easy reference
  }
}

export default Cell;
