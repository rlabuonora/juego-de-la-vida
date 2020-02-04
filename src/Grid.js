class Grid {
    constructor(data) {
        this.data = data;
        this.height = data.length;
        this.width = data[0].length; // falla si pasa un ragged array
        // set reference to this
        this.data.map( row => row.map(cell => cell.grid = this));
    }

    cells(i, j) {
        return this.data[i][j];
    }
}

class Cell {
    constructor(on) {
        this.state = on; // boolean
    }
}

export { Grid, Cell };



