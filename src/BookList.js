import React, { Component } from 'react'
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
                  <Bookshelf bookshelfName="Currently Reading" books={books.filter((book) => {return(book.shelf==='currentlyReading')})} />
                  <Bookshelf bookshelfName="Want to Read" books={books.filter((book) => {return(book.shelf==='wantToRead')})} />
                  <Bookshelf bookshelfName="Read" books={books.filter((book) => {return(book.shelf==='read')})} />
                </div>
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>

        );
    }

}

export default BookList