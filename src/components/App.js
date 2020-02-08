import React, { Component } from 'react';
import Cell from './Cell';
import Board from './Board';
import Grid from './Grid';
import './App.css';

// Global consts
const HEIGHT = 8;
const WIDTH = 8;
const SPEED = 500;

class App extends React.Component {
    constructor(props) {
        super(props);
        // inicizar parametros

        // inicializar grid
        const data = Array(HEIGHT).fill(Array(WIDTH).fill(false));
        const grid = new Grid(data);

        this.state = {
            grid: grid,
            generacion: 0,
            intervalID: null,
            on: false
        };
    }
    handleClick(i, j) {
        this.setState({
            grid: this.state.grid.toggle_cell(i, j)
        })
    }
    handlePlay() {
        if (this.state.on) {
            this.pause();
        } else {
            this.start();
        }
    }
    stop() {
        // inicializar grid
        const data = Array(HEIGHT).fill(Array(WIDTH).fill(false));
        const grid = new Grid(data);
        clearInterval(this.state.intervalId);
        this.setState({
            on: false,
	    generacion: 0,
	    grid: grid,
        });
    }
    start() {
        var intervalId = setInterval(() => this.tick(),
				     SPEED);
        this.setState({ on: true,
	                intervalId: intervalId });
    }

    pause() {
        clearInterval(this.state.intervalId);
        this.setState({ on: false });
    }

    tick() {
        console.log('tick');
        var generacion = this.state.generacion + 1;
        var grid = this.state.grid;

        this.setState({
	    generacion : generacion,
            grid: grid.siguiente()
        });
    }
    render() {
        return (
                <div className="App">
        	    <div className="col-lg-6">
	                <div className="row">
	                    <span className="generacion">
                                Generación: {this.state.generacion}
                            </span>
                            <span className="botones">
	                        <PlayButton on={this.state.on}
                                            onClick={()=> this.handlePlay()}
                                            className="play" />
                <StopButton onClick={() => this.stop()}
                            className="stop" />
	                    </span>
	                </div>
                    </div>
                    <div class="board">
                        <Board grid={this.state.grid}
                            onClick={(i, j) =>  this.handleClick(i, j)} />
                    </div>
                </div>
        );
    }
}

// TODO: Mover a otro archivo y convertir en funciones
class PlayButton extends Component {
    icon() {
        return this.props.on ?
	    <i className="fa fa-pause" aria-hidden="true"></i> :
	    <i className="fa fa-play" aria-hidden="true"></i>
    }
    render() {
        return (
                <button onClick={this.props.onClick} className="btn btn-secondary"> {this.icon() }
	        </button>
        );
    }
}

class StopButton extends Component {
    render() {
        return (
                <button onClick={this.props.onClick}
	                className="btn btn-secondary">
	            <i className="fa fa-stop" aria-hidden="true"></i>
	        </button>
        );
    }
}


export default App;
