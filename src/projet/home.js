import React, { useState } from "react";
import "./home.css";
import mobalat from './books/lamobalat.png';
import rich from './books/rich.png';
import secret from './books/secret.png';

const books = [
  {
    id: 1,
    title: "Origin",
    author: "Dan Brown",
    narrator: "Paul Michael",
    rating: 4.5,
    duration: "18 hrs 10 mins",
    description:
      "Origin is a 2017 mystery thriller novel by American author Dan Brown and the fifth installment in his Robert Langdon series.",
    cover: mobalat, // Remplace avec l'image réelle
  },
  { id: 2, title: "The Other Woman", author: "Daniel Silva", 
    cover: rich},
  { id: 3, title: "Outsider", author: "Stephen King", cover: secret },
]
function App() {
  const [selectedBook, setSelectedBook] = useState(books[0]);

  return (
    <div className="container">

      {/* Main Content */}
      <main className="content">
        {/* Book Details */}
        <div className="book-details">
          <div className="book-info">
            <h1>{selectedBook.title}</h1>
            <p className="author">
              By <span>{selectedBook.author}</span> &nbsp; Read by <span>{selectedBook.narrator || "Unknown"}</span>
            </p>
            <p className="rating">⭐ {selectedBook.rating} &nbsp; ⏳ {selectedBook.duration}</p>
            <p className="description">{selectedBook.description}</p>
            <div className="buttons">
              <button className="wish-list">Emprunter</button>
            </div>
          </div>
          <div className="book-cover">
            <img src={selectedBook.cover} alt={selectedBook.title} />
          </div>
        </div>

        {/* Similar Books */}
        <div className="similar-books">
          <h2>MORE SIMILAR BOOKS</h2>
          <div className="books-list">
            {books
              .filter((book) => book.id !== selectedBook.id)
              .map((book) => (
                <div key={book.id} className="book-card" onClick={() => setSelectedBook(book)}>
                  <img src={book.cover} alt={book.title} />
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
