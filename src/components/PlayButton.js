import React from 'react';

class PlayButton extends React.Component {
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

export default PlayButton;
