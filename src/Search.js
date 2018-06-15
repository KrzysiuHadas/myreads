import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

    state = {
        value: '',
        books: [],
    }

    searchedBooks = (query) => BooksAPI.search(query)

    handleChange = async (e) => {
        this.setState({ value: e.target.value });
        try {
            const books = await this.searchedBooks(e.target.value);    
            this.compareAndMerge(books, this.props.booksOnShelves)
        } catch (error) {
            console.error(error);
        }  
    }

    compareAndMerge = (searchResultArray, currentlyOnShelfArray) => {
        if(Array.isArray(searchResultArray) && Array.isArray(currentlyOnShelfArray))
        for (let i = 0; i < searchResultArray.length; i++) {
            for (let i2 = 0; i2 < currentlyOnShelfArray.length; i2++) {
                if (searchResultArray[i].title === currentlyOnShelfArray[i2].title) {
                    searchResultArray[i] = {
                        ...searchResultArray[i],
                        shelf: currentlyOnShelfArray[i2].shelf,
                    }
                }
            }
        }

        this.setState({books: searchResultArray});
    }

    render() {
        let currentBooks = [];
        if(Array.isArray(this.state.books)) {
            currentBooks = this.state.books;
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/' > Close </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            currentBooks.map((book) => {
                                return (
                                    <Book
                                        key={book.id}
                                        book={book}
                                        changerSwitched={(state, book) => { this.props.changeBookState(state, book) }}
                                    />
                                );
                            })                            
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search