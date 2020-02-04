import { Grid } from './Grid';


describe('Grid', () => {
    test('Grid constructor sets height & width', () => {
        let data = [[false, false], [false, false]];
        let grid = new Grid(data);
        expect(grid.height).toBe(2);
        expect(grid.width).toBe(2);
    });


    test('Grid constructor copies data', () => {

        
    });

    test('Grid', () => {

    });
});


describe('Cell', () => {
    xtest('foo', () => {

        
    });

});
