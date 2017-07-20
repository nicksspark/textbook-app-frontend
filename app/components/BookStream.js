import React, {Component} from 'react';
import Book from './Book';

class BookStream extends Component {
  constructor(props) {
    super(props);
  }
  getStream() {
    let books = this.props.books;
    books = books.map((book) => (Object.assign(book, {key: book.id})))
    books = books.map((book) => {
      return (
        <Book book={book} key={book.key}></Book>
      );
    });
    return books;
  }
  render() {
    return (
      <div>
        {this.getStream()}
      </div>
    );
  }
};

export default BookStream;
