import React, { Component } from 'react';

class Changer extends Component {
    
    state = {
        selected: this.props.shelf
    }

    handleChange = (e) => {
        this.setState({selected: e.target.value});
        this.props.shelfSelected(e);
    }

    clicked = () => {
        console.log(this.state.selected)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select 
                    onChange={this.handleChange}
                    value={this.state.selected}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                <button onClick={this.clicked}> hey </button>
            </div>
        );
    }
}

export default Changer
