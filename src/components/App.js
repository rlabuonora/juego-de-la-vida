import React, { Component } from 'react';
import Cell from './Cell';
import Board from './Board';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);


    }
    handleClick(i, j) {
        console.log(i, j);
    }
    render() {
        return (<Board
                  onClick={(i, j) =>  this.handleClick(i, j)} />);
    }
}


export default App;
