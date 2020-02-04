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
    next() {
        // TODO implement
        return new Grid(this.data);
    }
}

class Cell {
    constructor(on) {
        this.state = on; // use setter & getter?
    }
    neighbors() {
        var offsets = [-1, 0, 1]
            .map(row_offset => [-1, 0, 1]
                .map(col_offset => [row_offset, col_offset]))
                .reduce((acc, current) => acc.concat(current));
        return offsets;
    }
}

            export { Grid, Cell };



