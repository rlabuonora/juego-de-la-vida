import React from 'react';
import Cell from './Cell';


class Board extends React.Component {
    renderCell(i, j, state) {
        var svgPos = getSVGPos(i, j);
        return (
            <Cell x={svgPos.x} y={svgPos.y} live={state}
                  i={i}        j={j}
                  onClick={(i, j) => this.props.onClick(i, j)} />
        );
    }
    render() {

        let cells = this.props.grid.cells().map(
            (cell) => this.renderCell(cell.i, cell.j, cell.live)
        );

        return (
            <svg width="400" height="400"
            version="1.1" xmlns="http://www.w3.org/2000/svg">

                { cells }

            </svg>
        );
    }
}


function getSVGPos(i, j) {
    // Transforma las coordenadas de la grilla (i, j)
    // a coordenadas del SVG (x, y)
    const CELL_SIZE = 25;

    var svg_x_pos = i * CELL_SIZE;
    var svg_y_pos = j * CELL_SIZE;
    return { x: svg_x_pos, y: svg_y_pos }
}


export default Board;
