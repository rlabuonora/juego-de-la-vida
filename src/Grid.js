class Grid {
    constructor(data) {
        this.data = data;
        this.height = data.length;
        this.width = data[0].length; // falla si pasa un ragged array
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



