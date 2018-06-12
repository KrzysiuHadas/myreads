import React, { Component } from 'react'
import Changer from './Changer'

const Book = (props) => {
    const { title, backgroundImage, authors, imageWidth, imageHeight } = props.book;
    console.log(title, backgroundImage, authors);
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

export default Book;