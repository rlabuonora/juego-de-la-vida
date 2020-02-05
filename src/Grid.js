class Grid {
    constructor(data) {
        this.data = JSON.parse(JSON.stringify(data)); 
        this.height = data.length;
        this.width = data[0].length; // falla si pasa un ragged array
    }
    equals(other) {
    // una Grid es igual a otra si tiene las mismas celdas vivas
        if (other.height != this.height) return false;
        if (other.width != this.width) return false;
        
        var diff = this.data.map((nested_arr, i) => {
            return nested_arr.map((cell, j) => {
                return this.get_estado(i, j) === other.get_estado(i, j);
            });
        }).reduce((a, b) => a.concat(b));

        return !diff.includes(false);
    }
    get_estado(i, j) {
        return this.data[i][j];
    }
    set_estado(i, j, new_val) {
        this.data[i][j] = new_val;
    }
    vecinos_vivos(i, j) { // devuelve la cantidad de vecinas vivos  de i, j
        // todos los posibles offsets de la celda i, j [[-1, -1], [-1, 0], [-1, 1], ..., [1, 1]]
        return [-1, 0, 1]
            .map(row_offset => [-1, 0, 1]
                .map(col_offset => [row_offset, col_offset]))
            .reduce((acc, current) => acc.concat(current))
            // sacar (0, 0)
            .filter(([row_offset, col_offset]) => ! (row_offset === 0 &
                                                     col_offset === 0))
            // sacar los que estan "arriba" de la grid
            .filter(([row_offset, col_offset]) => (i + row_offset >= 0))
            // sacar los que estan "abajo" de la grid
            .filter(([row_offset, col_offset]) => (i + row_offset < this.height))
            // sacar los que estan a la izquierda
            .filter(([row_offset, col_offset]) => (j + col_offset >= 0))
            // sacar los que estan a la derecha
            .filter(([row_offset, col_offset]) => (j + col_offset < this.width))
            // solo los vivos
            .filter(([row_offset, col_offset]) => this.data[i+row_offset][j+col_offset])
            // contarlos
            .length;
    }
    siguiente() {
        let new_data = Array(this.height).fill(Array(this.width).fill(false));
        let new_grid = new Grid(new_data);
        // iterar por toda la grilla:
        // [ (0, 0), (0, 1), ..., (0, this.width-1), (1, 0), ..., (this.height-1, this.width-1)]

        // Estaria bueno mejorar la iteracion por las celdas
        this.data.map((nested_arr, i) => {
            return nested_arr.map((cell, j) => {
                // contar cuantos vecinos vivos tiene
                let vecinos_vivos = this.vecinos_vivos(i, j);
                // si son tres sigue viva
                if (vecinos_vivos === 3) new_grid.set_estado(i, j, true);
                // si son dos sigue como esta
                else if (vecinos_vivos === 2) new_grid.set_estado(i, j, this.get_estado(i, j));
                // si son menos de dos se muere
                else new_grid.set_estado(i, j, false);
                });
        });
        return new_grid;
    }
}

export { Grid };



