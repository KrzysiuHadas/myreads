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

  updateBookState = (stateOfReadness, bookName) => {
    console.log("yass here", stateOfReadness, bookName);
    const currentBooks = this.state.books.slice();
    console.log(currentBooks);
    for( let i = 0; i < currentBooks.length; i++) {
      console.log(i);
      if(currentBooks[i].title === bookName) {
        currentBooks[i].shelf = stateOfReadness;
        console.log(currentBooks[i]);
      }
    }
    console.log(currentBooks[1]);
    this.setState((prevState) => ({
      books: currentBooks,
    }));
  }

  render() {
    return (
      <div className="app">
            <Route path='/search' render={() => ( <Search /> )} />
            <Route exact path='/' render={() => (
              <BookList books={this.state.books} changeBookState={this.updateBookState}/>
              )} />
      </div>
    )
  }
}

export default BooksApp
