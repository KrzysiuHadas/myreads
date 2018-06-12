import React, { Component } from 'react'
import Book from './Book'

const Bookshelf = (props) => {
    const { bookshelfName, books } = props;
    console.log('3###', bookshelfName);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => {
                        return(<Book book={book} />);
                    })}
                </ol>
            </div>
        </div>
    )
}
export default Bookshelf