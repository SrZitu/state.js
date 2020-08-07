import React, { Component } from "react";
import Book from "./Book";
import booksData from "./booksData";
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
    };
  }

  /* state = {
    books: booksData,
  };
*/
  render() {
    //const books = this.state.books.map((list) => list.book);
    // console.log(books);
    return (
      <section>
        <h3>This is our Booklist</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} />
        ))}
      </section>
    );
  }
}
