import React, { Component } from 'react'
import Changer from './Changer'

class Book extends Component {

    changeShelf = (e) => {
        console.log(e.target.value);
        console.log(this.props.book.title);
    }


    render() {
        const { title, imageLinks, authors, imageWidth, imageHeight } = this.props.book;
        const bookCoverImage = `url("${imageLinks.thumbnail}")`;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookCoverImage }}></div>
                        <Changer shelfSelected={this.changeShelf} />
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors.map((author) => {
                        return(
                            <div><span>{author}</span><br /></div>
                        );
                    })}</div>
                </div>
            </li>
        );
    }
}

export default Book;