import { Grid, Cell } from './Grid';


let cell1 = new Cell(false);
let cell2 = new Cell(false);
let cell3 = new Cell(false);
let cell4 = new Cell(false);

let data = [[cell1, cell2],
            [cell3, cell4]];


let grid = new Grid(data);


describe('Grid', () => {

    test('Grid constructor', () => {
        expect(grid.cells(0, 0)).toBe(cell1);
    });

    test('Grid height & width', () => {
        expect(grid.height).toBe(2);
        expect(grid.width).toBe(2);
    });


    test('Set cell state', () => {
        grid.cells(0, 0).on = true;
        expect(grid.cells(0, 0).on).toBe(true);
    });
});


describe('Cell', () => {
    test('Cell references parent grid', () => {
        expect(cell1.grid).toBe(grid);
        expect(grid.cells(0, 0).grid).toBe(grid);
        
    });
    test('Cells en la (0, 0) de una matriz 3 x 3', () => {

        // a 3 x 3 grid
        let grid = new Grid([
            [new Cell(false), new Cell(false), new Cell(false)],
            [new Cell(false), new Cell(false), new Cell(false)],
            [new Cell(false), new Cell(false), new Cell(false)]
        ]);
        const actual = grid.cells(0, 0).neighbors()
        expect(actual.length).toBe(3);
        
    });

    test('Cells en la (1, 1) de una matriz 3 x 3', () => {

        // a 3 x 3 grid
        let grid = new Grid([
            [new Cell(false), new Cell(false), new Cell(false)],
            [new Cell(false), new Cell(false), new Cell(false)],
            [new Cell(false), new Cell(false), new Cell(false)]
        ]);
        const actual = grid.cells(1, 1).neighbors()
        expect(actual.length).toBe(8);
        
    });

    test('Cells en la (2, 2) de una matriz 3 x 3', () => {

        // a 3 x 3 grid
        let grid = new Grid([
            [new Cell(false), new Cell(false), new Cell(false)],
            [new Cell(false), new Cell(false), new Cell(false)],
            [new Cell(false), new Cell(false), new Cell(false)]
        ]);
        const actual = grid.cells(2, 2).neighbors()
        expect(actual.length).toBe(3);
        
    });

    test('Cells en la 0, 1 de una matriz 3 x 3', () => {
        // a 3 x 3 grid
        let grid = new Grid([
            [new Cell(false), new Cell(false), new Cell(false)],
            [new Cell(false), new Cell(false), new Cell(false)],
            [new Cell(false), new Cell(false), new Cell(false)]
        ]);
        const actual = grid.cells(1, 1).neighbors()
        console.log(actual);
        expect(actual.length).toBe(8);
    });
});
