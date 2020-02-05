import { Grid } from './Grid';

let data = [[false, false],
            [false, false]];

let grid = new Grid(data);

describe('Grid', () => {

    test('Grid height & width', () => {
        expect(grid.height).toBe(2);
        expect(grid.width).toBe(2);
    });


    test('Grid.get_estado', () => {
        
        let data_1 = [[false, false],
                      [false, true]];


        let grid_1 = new Grid(data_1);
                
        expect(grid_1.get_estado(1, 1)).toBe(true);
        
        
    });

    test('Grid.equal con arrays iguales', () => {
        
        let data_1 = [[false, false],
                      [false, true]];

        let data_2 = [[false, false],
                      [false, true]];

        let grid_1 = new Grid(data_1);
        let grid_2 = new Grid(data_2);
        
        expect(grid_1.equals(grid_2)).toBe(true);
        
    });

    test('Grid.equal con despues de cambiar', () => {
        
        let data_1 = [[false, true],
                      [false, false]];

        let data_2 = [[false, true],
                      [false, false]];

        let grid_1 = new Grid(data_1);
        let grid_2 = new Grid(data_2);
        
        grid_1.set_estado(0, 0, true);

        expect(grid_1.equals(grid_2)).toBe(false);
        
    });

    test('Grid.set_estado', () => {
        
        let data_1 = [[false, false],
                      [false, true]];

        let grid_1 = new Grid(data_1);
        // cambiar 1, 1 a false
        grid_1.set_estado(1, 1, false)
        expect(grid_1.get_estado(1, 1)).toBe(false);
    });

    test('Grid copia el array', () => {
        
        let data_1 = [[false, false],
                      [false, false]];

        let grid_1 = new Grid(data_1);
        // antes de cambiar el array
        expect(grid_1.get_estado(1, 1)).toBe(false);
        // dps de cambiar el array
        data_1[1][1] = true;
        expect(grid_1.get_estado(1, 1)).toBe(false);
    });

    test('Grid.vecinos_vivos', () => {

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

    test('Grid.siguiente() vacia', () => {

        // a 3 x 3 grid
        let grid = new Grid([
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]);

        const actual = grid.siguiente();
        expect(actual.equals(grid)).toBe(true);
    });

    test('Grid.siguiente() block', () => {

        // a 4 x 4 grid
        let grid = new Grid([
            [false, false, false, false],
            [false, true, true, false],
            [false, true, true, false],
            [false, false, false, false]
        ]);

        const actual = grid.siguiente();
        expect(actual.equals(grid)).toBe(true);
    });

    test('Grid.siguiente() oscilator', () => {

        // a 4 x 4 grid
        let grid = new Grid([
            [false, false, false, false, false],
            [false, false, true,  false, false],
            [false, false, true,  false, false],
            [false, false, true,  false, false],
            [false, false, false, false, false]
        ]);

        let new_grid = new Grid([
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, true,  true,  true, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ]);

        const actual = grid.siguiente();
        expect(actual.equals(new_grid)).toBe(true);
    });

    test('Grid.siguiente() beacon', () => {

        
        let grid = new Grid([
            [false, false, false, false, false, false],
            [false, true, true, false, false, false],
            [false, true, true, false, false, false],
            [false, false, false, true, true, false],
            [false, false, false, true, true, false],
            [false, false, false, false, false, false]
        ]);

        let new_grid = new Grid([
            [false, false, false, false, false, false],
            [false, true, true, false, false, false],
            [false, true, false, false, false, false],
            [false, false, false, false, true, false],
            [false, false, false, true, true, false],
            [false, false, false, false, false, false]
        ]);
        

        const actual = grid.siguiente();
        expect(actual.equals(new_grid)).toBe(true);
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
