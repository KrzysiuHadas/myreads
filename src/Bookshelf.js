import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

    render() {
        const { bookshelfName, books } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return (
                                <Book
                                    book={book}
                                    changerSwitched={(state, name) => {
                                        this.props.onSwitched(state, name);
                                    }}
                                />
                            );
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Bookshelf