import React from 'react';
import Cell from './Cell';


class Board extends React.Component {
    
    handleClick(i, j) {
        console.log(i, j);
    }
    renderCell(i, j) {
        var svgPos = getSVGPos(i, j);
        return (
            <Cell x={svgPos.x} y={svgPos.y}
                  i={i}        j={j}
                  onClick={(i, j) => this.handleClick(i, j)} />
        );
    }
    render() {
        return (
            <svg width="400" height="400"
                 version="1.1" xmlns="http://www.w3.org/2000/svg">
                { this.renderCell(0, 0) }
                { this.renderCell(0, 1) }
                { this.renderCell(1, 0) }
                { this.renderCell(1, 1) }
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
