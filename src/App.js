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
        this.setState(() => ({
          books: books
        }))
      })
  }

  updateBookState = (stateOfReadness, book) => {
    //jesli to nowa ksiazka to najpierw dodac do tablicy!!!
    let existingFlag = 0;
    const currentBooks = this.state.books.slice();
    for( let i = 0; i < currentBooks.length; i++) {
      if(currentBooks[i].title === book.title) {
        currentBooks[i] = {
          ...currentBooks[i],
          shelf: stateOfReadness,
        }
        existingFlag = 1;
      }
    }
    console.log("###", book);
    if(!existingFlag) {
      book = {
        ...book,
        shelf: stateOfReadness,
      };
      currentBooks.push(book);
    }
    console.log("@@@", currentBooks);
    this.setState((prevState) => ({
      books: currentBooks,
    }));
    //console.log(this.state.books);
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
