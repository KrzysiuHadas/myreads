import React, { Component } from 'react'
import Changer from './Changer'

class Book extends Component {


    changeShelf = (e) => {
        console.log(e.target.value);
        console.log(this.props.book.title);
        this.props.changerSwitched(e.target.value, this.props.book);
    }


    render() {
        const { title, imageLinks, authors, shelf } = this.props.book;
        let bookCoverImage = '';
        if (imageLinks && imageLinks.thumbnail) {
            bookCoverImage = `url("${imageLinks.thumbnail}")`;
        }
        //console.log(shelf)
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookCoverImage }}></div>
                        <Changer shelf={shelf} shelfSelected={this.changeShelf} />
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