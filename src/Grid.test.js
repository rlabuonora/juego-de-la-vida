import { Grid } from './Grid';

let data = [[false, false],
            [false, false]];


let grid = new Grid(data);


describe('Grid', () => {

    test('Grid height & width', () => {
        expect(grid.height).toBe(2);
        expect(grid.width).toBe(2);
    });


    xtest('Set cell state', () => {
        //grid.estado(0, 0) = false;
        
    });

    test('Cells en la (0, 0) de una matriz 3 x 3', () => {

        // a 3 x 3 grid
        let grid = new Grid([
            [false, false, false],
            [false, false, true],
            [false, false, true]
        ]);
        expect(grid.vecinos_vivos(0, 0)).toBe(0);
        expect(grid.vecinos_vivos(1, 1)).toBe(2);
        expect(grid.vecinos_vivos(2, 0)).toBe(0);
        expect(grid.vecinos_vivos(0, 2)).toBe(1);
        
    });

    xtest('Cells en la (1, 1) de una matriz 3 x 3', () => {

        // a 3 x 3 grid
        let grid = new Grid([
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]);

        const actual = grid.cells(1, 1).neighbors()
        expect(actual.length).toBe(8);
        
    });

    xtest('Cells en la (2, 2) de una matriz 3 x 3', () => {

        // a 3 x 3 grid
        let grid = new Grid([
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]);
        const actual = grid.cells(2, 2).neighbors()
        expect(actual.length).toBe(3);
        
    });

    xtest('Cells en la 0, 1 de una matriz 3 x 3', () => {
        
        let grid = new Grid([
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]);
        const actual = grid.cells(1, 1).neighbors()
        console.log(actual);
        expect(actual.length).toBe(8);
    });
});
