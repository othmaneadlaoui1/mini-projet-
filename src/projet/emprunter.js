import React, { useEffect, useState } from "react";
import "./emprunter.css";

function Emprunter() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    // Charger les livres empruntés depuis le localStorage au montage du composant
    const books = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    setBorrowedBooks(books);
  }, []);

  const handleRemove = (bookId) => {
    // Supprimer un livre emprunté
    const updatedBooks = borrowedBooks.filter((book) => book.id !== bookId);
    setBorrowedBooks(updatedBooks);
    localStorage.setItem("borrowedBooks", JSON.stringify(updatedBooks));
  };

  return (
    <div className="borrowed-container">
      <h2 className="borrowed-title">Livres Empruntés</h2>
      {borrowedBooks.length === 0 ? (
        <p className="no-books">Aucun livre emprunté pour le moment.</p>
      ) : (
        <div className="borrowed-books-list">
          {borrowedBooks.map((book, index) => (
            <div key={index} className="borrowed-book">
              <img src={book.cover} alt={book.title} className="book-cover" />
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Par {book.author}</p>
                <p className="borrower-name">
                  <strong>Emprunté par :</strong> {book.borrowerName}
                </p>
                <p className="borrow-dates">
                  <strong>Dates :</strong> {book.startDate} - {book.endDate}
                </p>
                <p className="borrower-email">
                  <strong>Email :</strong> {book.borrowerEmail}
                </p>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(book.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Emprunter;