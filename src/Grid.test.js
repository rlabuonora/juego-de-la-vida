import { Grid, Cell } from './Grid';


let cell1 = new Cell(false);
let data = [[cell1, new Cell(false)],
            [new Cell(false), new Cell(false)]];
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
    
});
