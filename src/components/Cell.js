import React from 'react';

class Cell extends React.Component {

    getColor() {
        return this.props.live ? "grey" : "white";
    }
    render() {
        return(
            <rect
                onClick={() => this.props.onClick(this.props.i, this.props.j)}
	        x={ this.props.x } y={ this.props.y } 
	        width={ 25 } height={ 25 } 
	        fill={ this.getColor() } stroke="black" 
                strokeWidth="1"/>
        );
    }
}

export default Cell;
