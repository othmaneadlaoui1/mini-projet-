import React, { useState } from "react";
import "./ajouter.css";

function Ajouter({ books, setBooks, setShowForm }) {
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setNewBook((prevBook) => ({ ...prevBook, cover: fileURL }));
    }
  };

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.genre && newBook.description && newBook.cover) {
      setBooks([...books, { ...newBook, id: books.length + 1 }]);
      setShowForm(false);
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div className="add-book-form">
      <h2>Ajouter un nouveau livre</h2>
      <form>
        <label>Titre :</label> <input type="text" name="title" value={newBook.title} onChange={handleInputChange} />
        <label>Auteur :</label> <input type="text" name="author" value={newBook.author} onChange={handleInputChange} />
        <label>Genre :</label> <input type="text" name="genre" value={newBook.genre} onChange={handleInputChange} />
        <label>Description : </label><textarea name="description" value={newBook.description} onChange={handleInputChange}></textarea>
        <label>Image : </label><input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="button" onClick={handleAddBook}>Ajouter</button>
      </form>
    </div>
  );
}

export default Ajouter;
