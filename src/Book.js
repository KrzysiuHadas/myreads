import React, { Component } from 'react'
import Changer from './Changer'

class Book extends Component {

    changeShelf = (e) => {
        console.log(e.target.value);
        console.log(this.props.book.title);
    }


    render() {
        const { title, backgroundImage, authors, imageWidth, imageHeight } = this.props.book;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: imageWidth, height: imageHeight, backgroundImage: backgroundImage }}></div>
                        <Changer shelfSelected={this.changeShelf} />
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        );
    }
}

export default Book;