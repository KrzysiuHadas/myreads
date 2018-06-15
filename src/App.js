import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookList from './BookList'

export default class BooksApp extends React.Component {

  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books });
      })
  }

  updateBookState = (stateOfReadness, book) => {
    // flag that is changed when a book non-existing on the shelves changes its selected state
    let existingFlag = 0;
    const currentBooks = this.state.books.slice();
    // loop that goes through all shelved books and sees if a book that was reshelved is already there
    // in that case we change the old state to the new one
    // if its not existing set flag to 1
    for( let i = 0; i < currentBooks.length; i++) {
      if(currentBooks[i].title === book.title) {
        currentBooks[i] = {
          ...currentBooks[i],
          shelf: stateOfReadness,
        }
        existingFlag = 1;
        BooksAPI.update(currentBooks[i], stateOfReadness);
      }
    }
    // if a book has been assigned a new shelf but wasn't on the shelves before, we add it to the shelf
    if(!existingFlag) {
      book = {
        ...book,
        shelf: stateOfReadness,
      };
      currentBooks.push(book);
      BooksAPI.update(book, stateOfReadness);
    }
    this.setState((prevState) => ({
      books: currentBooks,
    }));
  }

  render() {
    return (
      <div className="app">
            <Route path='/search' render={() => ( 
              <Search booksOnShelves={this.state.books} changeBookState={this.updateBookState}/> 
              )} />
            <Route exact path='/' render={() => (
              <BookList books={this.state.books} changeBookState={this.updateBookState}/>
              )} />
      </div>
    )
  }
}
