import React, { useEffect, useState } from "react";
import "./emprunter.css";

function Emprunter() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    setBorrowedBooks(books);
  }, []);

  const handleBorrow = (book) => {
    let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    if (!borrowedBooks.some((b) => b.id === book.id)) {
      borrowedBooks.push(book);
      localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
      alert(`${book.title} a été emprunté avec succès !`);
    }
  };

  const handleRemove = (bookId) => {
    const updatedBooks = borrowedBooks.filter((book) => book.id !== bookId);
    setBorrowedBooks(updatedBooks);
    localStorage.setItem("borrowedBooks", JSON.stringify(updatedBooks));
  };

  return (
    <div className="borrowed-container">
      <h2 className="borrowed-title">Livres Empruntés</h2>
      {borrowedBooks.length === 0 ? (
        <p className="no-books">Aucun livre emprunté.</p>
      ) : (
        <div className="borrowed-books-list">
          {borrowedBooks.map((book) => (
            <div key={book.id} className="borrowed-book">
              <img src={book.cover} alt={book.title} className="book-cover"/>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Par {book.author}</p>
                <button className="remove-button" onClick={() => handleRemove(book.id)}>Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Emprunter;