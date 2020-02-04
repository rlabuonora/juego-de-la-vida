import { Grid, Cell } from './Grid';


describe('Grid', () => {
    test('Grid constructor', () => {

        let cell1 = new Cell(false);
        let data = [[cell1, new Cell(false)],
                    [new Cell(false), new Cell(false)]];
        
        let grid = new Grid(data);
        expect(grid.cells(0, 0)).toBe(cell1);
        
    });

    test('Grid constructor sets height & width', () => {
        let data = [[new Cell(false), new Cell(false)],
                    [new Cell(false), new Cell(false)]];
        
        let grid = new Grid(data);
        expect(grid.height).toBe(2);
        expect(grid.width).toBe(2);
    });


    test('Grid', () => {

    });
});


describe('Cell', () => {
    xtest('Get cell state', () => {

        
    });

    xtest('Turn cell on (only in a board)', () => {

    });

});
