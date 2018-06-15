import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Bookshelf from './Bookshelf'
class BookList extends Component {

    render() {
        const books = this.props.books;
        return(

            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf 
                    bookshelfName="Currently Reading" 
                    books={books.filter((book) => book.shelf==='currentlyReading')} 
                    onSwitched={(state, book) => {this.props.changeBookState(state, book)}} />
                  <Bookshelf 
                    bookshelfName="Want to Read" 
                    books={books.filter((book) => book.shelf==='wantToRead')} 
                    onSwitched={(state, book) => {this.props.changeBookState(state, book)}} />
                  <Bookshelf 
                    bookshelfName="Read" 
                    books={books.filter((book) => book.shelf==='read')} 
                    onSwitched={(state, book) => {this.props.changeBookState(state, book)}} />
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
        );
    }
}

export default BookList