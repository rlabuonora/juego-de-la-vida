class Grid {
    constructor(data) {
        this.data = data;
        this.height = data.length;
        this.width = data[0].length; // falla si pasa un ragged array
    }
    estado(i, j) {
        return this.data[i][j];
    }
    vecinos_vivos(i, j) { // devuelve la cantidad de vecinas vivos  de i, j

        // todos los posibles offsets de la celda i, j
        return [-1, 0, 1]
            .map(row_offset => [-1, 0, 1]
                .map(col_offset => [row_offset, col_offset]))
            .reduce((acc, current) => acc.concat(current))
            // sacar (0, 0)
            .filter(([row_offset, col_offset]) => ! (row_offset === 0 &
                                                     col_offset === 0))
            // sacar los que estan afuera de la grid
            .filter(([row_offset, col_offset]) => (i + row_offset >= 0) &
                                                (i + row_offset < this.height))
            .filter(([row_offset, col_offset]) => (j + col_offset >= 0) &
                                                (j + col_offset < this.width))
            // solo los vivos
            .filter(([row_offset, col_offset]) => this.data[i+row_offset][j+col_offset])
            .length;
        
        
    }
    siguiente() {
        // TODO implement
        // estaria bueno tener un metodo para iterar por las celdas
        // nested for es la peor opcion
        // para cada celda (acumulo en new_data)
        // para esto no estaria mal que cada cell supiera su i, j
        let new_data = [[]];
        // contar cuantos vecinos vivos tiene
        // si son tres sigue viva
        // si son dos sigue como esta
        // si son menos de dos se muere 
        return new Grid(new_data);
    }
}

export { Grid };



