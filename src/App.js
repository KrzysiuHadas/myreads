import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import Search from './Search'
import BookList from './BookList'

class BooksApp extends React.Component {

  state = {
    showSearchPage: false,
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
            <Search />
        ) : (
            <div>
              <BookList books={this.state.books} />
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
