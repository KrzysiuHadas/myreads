import React, { Component } from 'react'
import Changer from './Changer'

class Book extends Component {

    render() {
        const { title, imageLinks, authors, shelf } = this.props.book;
        let bookCoverImage = '';
        if (imageLinks && imageLinks.thumbnail) {
            bookCoverImage = `url("${imageLinks.thumbnail}")`;
        }
        const bookCoverStyle = {
            width: 128,
            height: 193,
            backgroundImage: bookCoverImage
        }
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={bookCoverStyle}></div>
                        <Changer shelf={shelf} shelfSelected={(e) => {
                            this.props.changerSwitched(e.target.value, this.props.book);
                        }} />
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors && authors.map((author) => {
                        return (
                            <div><span>{author}</span><br /></div>
                        );
                    })}</div>
                </div>
            </li>
        );
    }
}

export default Book;