import React, { useState } from "react";
import "./home.css";
import mobalat from './books/lamobalat.png';
import rich from './books/rich.png';
import secret from './books/secret.png';

const initialBooks = [
  {
    id: 1,
    title: "Origin",
    author: "Dan Brown",
    narrator: "Paul Michael",
    rating: 4.5,
    duration: "18 hrs 10 mins",
    description:
      "Origin is a 2017 mystery thriller novel by American author Dan Brown and the fifth installment in his Robert Langdon series.",
    cover: mobalat,
  },
  { 
    id: 2, 
    title: "The Other Woman", 
    author: "Daniel Silva", 
    cover: rich 
  },
  { 
    id: 3, 
    title: "Outsider", 
    author: "Stephen King", 
    cover: secret 
  },
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState(initialBooks[0]);
  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    cover: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleAddBook = () => {
    if (
      newBook.title &&
      newBook.author &&
      newBook.genre &&
      newBook.description &&
      newBook.cover
    ) {
      setBooks((prevBooks) => [
        ...prevBooks,
        {
          ...newBook,
          id: prevBooks.length + 1,
          cover: newBook.cover, // URL de l'image
        },
      ]);
      setNewBook({
        title: "",
        author: "",
        genre: "",
        description: "",
        cover: "",
      });
      setShowForm(false);
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div className="container">
      {/* Main Content */}
      <main className="content">
        {/* Book Details */}
        <div className="book-details">
          <div className="book-info">
            <h1>{selectedBook.title}</h1>
            <p className="author">
              By <span>{selectedBook.author}</span> &nbsp; Read by{" "}
              <span>{selectedBook.narrator || "Unknown"}</span>
            </p>
            <p className="rating">
              ⭐ {selectedBook.rating} &nbsp; ⏳ {selectedBook.duration}
            </p>
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
                <div
                  key={book.id}
                  className="book-card"
                  onClick={() => setSelectedBook(book)}
                >
                  <img src={book.cover} alt={book.title} />
                </div>
              ))}
          </div>
        </div>
      </main>

      {/* Add Book Button */}
      <button className="add-book-btn" onClick={() => setShowForm(!showForm)}>
        Ajouter un livre
      </button>

      {/* Add Book Form */}
      {showForm && (
        <div className="add-book-form">
          <h2>Ajouter un nouveau livre</h2>
          <form className="ajouter">
            <div>
              <label htmlFor="title">Titre :</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="author">Auteur :</label>
              <input
                type="text"
                id="author"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="genre">Genre :</label>
              <input
                type="text"
                id="genre"
                name="genre"
                value={newBook.genre}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="description">Détails :</label>
              <textarea
                id="description"
                name="description"
                value={newBook.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor="cover">Image :</label>
              <input
                type="file"
                id="cover"
                name="cover"
                onChange={(e) => handleInputChange({ target: { name: 'cover', value: e.target.files[0] } })}
              />
            </div>
            <button type="button" onClick={handleAddBook}>
              Ajouter
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;