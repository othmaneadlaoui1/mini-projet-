import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Pour la navigation
import "./home.css";
import mobalat from "./books/lamobalat.png";
import rich from "./books/rich.png";
import secret from "./books/secret.png";
import powerOfHabbit from "./books/power-of-habit.png";
import gestienSoi from "./books/le-gestien-de-soi.png";
import Ajouter from "./ajouter";
import overthinking from "./books/Overthinking.png";
import harypother from "./books/harryphoter.png";
import TheNameoftheWind from "./books/The-Name-of-the-Wind.png";

const booksData = [
  { id: 1, title: "The Secret", author: "Rhonda Byrne", date: "2006", genre: "Développement personnel", description: "Le livre de Rhonda Byrne « Le Secret » est basé sur la loi de l'attraction.", cover: secret, comments: [] },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", date: "1997", genre: "Économie, Développement personnel", description: "Un livre sur la sagesse financière et les stratégies pour bâtir la richesse.", cover: rich, comments: [] },
  { id: 3, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", date: "2016", genre: "Développement personnel, Psychologie", description: "Un guide pour apprendre à se concentrer sur l'essentiel.", cover: mobalat, comments: [] },
  { id: 4, title: "La gestion de soi", author: "Jacques Van Rillaer", date: "1992", genre: "Sciences humaines et sociales", description: "Gérer ses impulsions et ses actions pour atteindre le bien-être.", cover: gestienSoi, comments: [] },
  { id: 5, title: "The Power of Habit", author: "Charles Duhigg", date: "2012", genre: "Psychologie, Sciences sociales", description: "Exploration de la science des habitudes.", cover: powerOfHabbit, comments: [] },
  {
    id: 6, title: "Overthinking Is Not the Solution", author: "Robert Charles", date: "2022", genre: "Livre d’auto-assistance", description: "Forster explore les effets néfastes de la rumination et propose des stratégies pour mieux gérer.",
    cover: overthinking, comments: []
  },
  {
    id: 7, title: "The Name of the Wind",
    author: "Patrick Rothfuss", date: "2007", genre: "Livre d’auto-assistance",
    description: "The Name of the Wind suit l'histoire de Kvothe, un jeune homme talentueux devenu un héros légendaire.",
    cover: TheNameoftheWind, comments: []
  },
  {
    id: 8, title: "Harry Potter ",
    author: "J.K. Rowling", date: "1997", genre: "Livre d’auto-assistance",
    description: " un orphelin qui découvre à 11 ans qu'il est un sorcier.",
    cover: harypother, comments: []
  },
];

function Home() {
  const [books, setBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(booksData[0]);
  const [showForm, setShowForm] = useState(false);
  const [showBorrowForm, setShowBorrowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showWelcome, setShowWelcome] = useState(true); // État pour afficher la page de bienvenue
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false); // Cacher la page de bienvenue après 3 secondes
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmitReview = () => {
    if (comment.trim()) {
      const updatedBooks = books.map(book =>
        book.id === selectedBook.id
          ? { ...book, comments: [...book.comments, comment] }
          : book
      );
      setBooks(updatedBooks);
      setSelectedBook({ ...selectedBook, comments: [...selectedBook.comments, comment] });
      alert("Votre avis a été soumis avec succès !");
      setComment("");
    } else {
      alert("Veuillez écrire un commentaire avant de soumettre.");
    }
  };

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);

    // Mettre à jour selectedBook avec le premier résultat correspondant
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase()) ||
      book.author.toLowerCase().includes(value.toLowerCase()) ||
      book.genre.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredBooks.length > 0) {
      setSelectedBook(filteredBooks[0]);
    } else {
      setSelectedBook(null); // ou setSelectedBook(books[0]); pour revenir au premier livre
    }
  };

  const handleBorrow = (book) => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];

    // Vérifiez si le livre a déjà été emprunté
    if (borrowedBooks.some((b) => b.id === book.id)) {
      alert("Ce livre a déjà été emprunté.");
    } else {
      setShowBorrowForm(true); // Afficher le formulaire d'emprunt
    }
  };

  return (
    <div className="container">
      {showWelcome ? (
        <div className="welcome">
          <p id='welcom'>Bonjour à votre bibliothèque</p>
        </div>
      ) : (
        <>
          <div className="searchBar">
            <input
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Rechercher"
              value={searchTerm}
              onChange={handleSearchTerm}
            />
          </div>
          <main className="content">
            {/* Book Details */}
            {selectedBook ? (
              <div className="book-details">
                <div className="book-info">
                  <h1>{selectedBook.title}</h1>
                  <p className="author">
                    Par <span>{selectedBook.author}</span> &nbsp; en <span>{selectedBook.date || "Unknown"}</span>
                  </p>
                  <p className="genre"><span id='w'>Genre :</span> {selectedBook.genre}</p>
                  <p className="description"><span id='w'>Description :</span> {selectedBook.description}</p>

                  <div className="point-vue">
                    <label htmlFor="rating">Évaluez le livre :</label>
                    <select id="rating" style={{ backgroundColor: "#f4c542" }}>
                      <option value="" selected>Sélectionnez une note :</option>
                      <option value="1">⭐</option>
                      <option value="2">⭐⭐</option>
                      <option value="3">⭐⭐⭐</option>
                      <option value="4">⭐⭐⭐⭐</option>
                      <option value="5">⭐⭐⭐⭐⭐</option>
                    </select><br />
                    <label htmlFor="commentaire">Laissez un commentaire :</label>
                    <div className="comments-section">
                      <h3>Avis des lecteurs :</h3>
                      <div className="comments-list">
                        {selectedBook.comments && selectedBook.comments.length > 0 ? (
                          <select>
                            {selectedBook.comments.map((c, index) => (
                              <option key={index} value={index + 1}>Commentaire {index + 1}: {c}</option>
                            ))}
                          </select>
                        ) : (
                          <p>Aucun avis pour le moment.</p>
                        )}
                      </div>
                    </div>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Écrivez votre avis ici..."></textarea>
                  </div>
                  <div className="buttons-container">
                    <button className="wish-list" onClick={handleSubmitReview} type="submit">Soumettre l'avis</button>
                    <button className="brow" onClick={() => handleBorrow(selectedBook)}>Brow</button>
                  </div>
                </div>
                <div className="book-cover">
                  <img src={selectedBook.cover} alt={selectedBook.title} />
                </div>
              </div>
            ) : (
              <p id ="li" >Aucun livre sélectionné. Veuillez effectuer une recherche.</p>
            )}

            {/* Autres livres */}
            <div className="similar-books">
              <h2 id='q'>PLUS DE LIVRES SIMILAIRES</h2>
              <div className="books-list">
                {books
                  .filter((book) => book.id !== selectedBook?.id) // Use optional chaining
                  .map((book) => (
                    <div key={book.id} className="book-card" onClick={() => setSelectedBook(book)}>
                      <img src={book.cover} alt={book.title} />
                    </div>
                  ))}
              </div>
            </div>
          </main>

          {/* Affichage du formulaire d'emprunt */}
          {showBorrowForm && (
            <div className="borrow-form">
              <h3>Formulaire d'Emprunt</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  // Récupérer les données du formulaire
                  const borrowerName = e.target.borrowerName.value;
                  const borrowerEmail = e.target.borrowerEmail.value;
                  const startDate = e.target.startDate.value;
                  const endDate = e.target.endDate.value;

                  if (!borrowerName || !borrowerEmail || !startDate || !endDate) {
                    alert("Veuillez remplir tous les champs.");
                    return;
                  }

                  // Ajouter les informations de l'emprunteur au livre sélectionné
                  const borrowedBook = {
                    ...selectedBook,
                    borrowerName,
                    borrowerEmail,
                    startDate,
                    endDate,
                  };

                  // Sauvegarder dans le localStorage
                  let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
                  borrowedBooks.push(borrowedBook);
                  localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));

                  // Masquer le formulaire après soumission
                  setShowBorrowForm(false);

                  alert(`${selectedBook.title} a été emprunté avec succès !`);
                }}
              >
                <label>
                  Nom :
                  <input type="text" name="borrowerName" required />
                </label>
                <br />
                <label>
                  Email :
                  <input type="email" name="borrowerEmail" required />
                </label>
                <br />
                <label>
                  Date de début :
                  <input type="date" name="startDate" required />
                </label><br />
                <br />
                <label>
                  Date de fin :
                  <input type="date" name="endDate" required />
                </label><br />
                <br />
                <button type="submit">Soumettre</button>
                <button type="button" onClick={() => setShowBorrowForm(false)}>Annuler</button>
              </form>
            </div>
          )}
          <button className="add-book-btn" onClick={() => setShowForm(!showForm)}>Ajouter un livre</button>
          {showForm && <Ajouter books={books} setBooks={setBooks} setShowForm={setShowForm} />}
        </>
      )}
    </div>
  );
}

export default Home;