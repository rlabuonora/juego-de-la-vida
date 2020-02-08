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
        this.setState({
            grid: this.state.grid.toggle_cell(i, j)
        })
    }
    render() {
        return (
                <div className="App">
        	        <div className="col-lg-6">
	        <div className="row">
	        <span className="generacion">
                Generación: {this.state.t}
                </span>
                <span className="botones">
	        <PlayButton onClick={this.handlePlay.bind(this)}
            on={this.state.on}
	    className="play" />
                <StopButton className="stop" stop={this.stop.bind(this)} />
	        </span>
	        </div>

                <Board
                  grid={this.state.grid}
            onClick={(i, j) =>  this.handleClick(i, j)} />
        );
    }
}

// TODO: Mover a otro archivo

class PlayButton extends Component {

    icon() {
        return this.props.on ?
	    <i className="fa fa-pause" aria-hidden="true"></i> :
	    <i className="fa fa-play" aria-hidden="true"></i>
    }
    render() {
        return (
                <button onClick={ /* TODO */ }
	                className="btn btn-secondary"> {this.icon() }
	        </button>
        );
    }
}

class StopButton extends Component {
    render() {
        return (
                <button onClick={this.props.stop}
	                className="btn btn-secondary">
	            <i className="fa fa-stop" aria-hidden="true"></i>
	        </button>
        );
    }
}


export default App;
n
