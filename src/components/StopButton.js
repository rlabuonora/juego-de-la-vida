import React from 'react';

class StopButton extends React.Component {
    render() {
        return (
                <button onClick={this.props.onClick}
	    className="btn btn-secondary">
	        <i className="fa fa-stop" aria-hidden="true"></i>
	        </button>
        );
    }
}

export default StopButton;
