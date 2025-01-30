import React, { useState } from "react";
import "./home.css";
import mobalat from "./books/lamobalat.png";
import rich from "./books/rich.png";
import secret from "./books/secret.png";
import powerOfHabbit from "./books/power-of-habit.png";
import gestienSoi from "./books/le-gestien-de-soi.png";
import Ajouter from "./ajouter";

const booksData = [
  { id: 1, title: "The Secret", author: "Rhonda Byrne", date: "2006", genre: "Développement personnel", description: "Le livre de Rhonda Byrne « Le Secret » est basé sur la loi de l'attraction.", cover: secret },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", date: "1997", genre: "Économie, Développement personnel", description: "Un livre sur la sagesse financière et les stratégies pour bâtir la richesse.", cover: rich },
  { id: 3, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", date: "2016", genre: "Développement personnel, Psychologie", description: "Un guide pour apprendre à se concentrer sur l'essentiel.", cover: mobalat },
  { id: 4, title: "La gestion de soi", author: "Jacques Van Rillaer", date: "1992", genre: "Sciences humaines et sociales", description: "Gérer ses impulsions et ses actions pour atteindre le bien-être.", cover: gestienSoi },
  { id: 5, title: "The Power of Habit", author: "Charles Duhigg", date: "2012", genre: "Psychologie, Sciences sociales", description: "Exploration de la science des habitudes.", cover: powerOfHabbit },
];

function Home() {
  const [books, setBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(booksData[0]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);

    // Mettre à jour selectedBook avec le premier résultat correspondant
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredBooks.length > 0) {
      setSelectedBook(filteredBooks[0]);
    }
  };

  return (
    <div className="container">
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div>
      <main className="content">
        {/* Book Details */}
        <div className="book-details">
          <div className="book-info">
            <h1>{selectedBook.title}</h1>
            <p className="author">
              Par <span>{selectedBook.author}</span> &nbsp; en <span>{selectedBook.date || "Unknown"}</span>
            </p>
            <p className="genre">Genre : {selectedBook.genre}</p>

            <p className="description">Description : {selectedBook.description}</p>

            <div className="point-vue">
              <label for="rating">Évaluez le livre :</label>
              <select id="rating">
                <option value="" selected>Sélectionnez une note :</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select><br />
              <label for="commentaire">Laissez un commentaire :</label>
              <textarea id="commentaire" placeholder="Écrivez votre avis ici..."></textarea>
              <button type="submit">Soumettre l'avis</button>
            </div>

            <div className="buttons">
              <button className="wish-list">Emprunter</button>
            </div>

          </div>
          <div className="book-cover">
            <img src={selectedBook.cover} alt={selectedBook.title} />
          </div>
        </div>

        {/* autre Books */}
        <div className="similar-books">
          <h2>PLUS DE LIVRES SIMILAIRES</h2>
          <div className="books-list">
            {books
              .filter((book) => book.id !== selectedBook.id)
              .map((book) => (
                <div key={book.id} className="book-card" onClick={() => setSelectedBook(book)}>
                  <img src={book.cover} alt={book.title} />
                  <p>{book.title}</p>
                </div>
              ))}
          </div>
        </div>
      </main>

      <button className="add-book-btn" onClick={() => setShowForm(!showForm)}>Ajouter un livre</button>
      {showForm && <Ajouter books={books} setBooks={setBooks} setShowForm={setShowForm} />}
    </div>
  );
}

export default Home;