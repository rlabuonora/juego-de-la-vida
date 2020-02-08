import React, { Component } from 'react';
import Cell from './Cell';
import Board from './Board';
import Grid from './Grid';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        // inicizar parametros
        const HEIGHT = 8;
        const WIDTH = 8;
        // inicializar grid
        const data = Array(HEIGHT).fill(Array(WIDTH).fill(false));
        const grid = new Grid(data);

        this.state = {
            grid: grid,
            generacion: 0,
            on: false
        };
    }
    handleClick(i, j) {
        console.log(i, j);
    }
    render() {
        return (<Board
                  grid={this.state.grid}
                  onClick={(i, j) =>  this.handleClick(i, j)} />);
    }
}


export default App;
