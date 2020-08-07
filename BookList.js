import React, { Component } from "react";
import Book from "./Book";
export default class BookList extends Component {
  state = {
    books: [
      {
        id: 1,
        book: "book number one",
        author: "john milton",
      },
      {
        id: 2,
        book: "book number two",
        author: "John lilley",
      },
      {
        id: 3,
        book: "book number three",
        author: "Greene",
      },
    ],
  };

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
