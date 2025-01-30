/*import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ajouter.css'; 

const Ajouter = () => {


    
    return (
        <div className="container">
            <form className="ajouter">
                <h1>Ajouter Votre Livre</h1>
                
                <input type="text" placeholder="Nom de livre" required value={nom}  onChange={(e) => setnom(e.target.value)}/>
                <input type="text" placeholder="Auteur du livre" required value={Auteur}  onChange={(e) => setauteur(e.target.value)}/>
                <input type="text" placeholder="Genre" required value={genre}  onChange={(e) => setgenre(e.target.value)} />
                <label htmlFor="document">Image:</label>
                <input type="file" id="document" required value={image}/>
                
                <input type="text" placeholder="details" required value={details}  onChange={(e) => setdetail(e.target.value)}/>
               
                <button type="submit"><Link to="/home">ajouter</Link></button>
            </form>
        </div>
    );
};

export default Ajouter;*/
// AddBook.js
import React, { useState } from 'react';

function AddBook({ onAddBook }) {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    cover: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.genre && newBook.description && newBook.cover) {
      onAddBook(newBook);
      // Optionally reset the form or redirect
    } else {
      alert('Veuillez remplir tous les champs !');
    }
  };

  return (
    <div className="add-book-form">
      <h2>Ajouter un nouveau livre</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input type="text" id="title" name="title" value={newBook.title} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="author">Auteur :</label>
          <input type="text" id="author" name="author" value={newBook.author} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="genre">Genre :</label>
          <input type="text" id="genre" name="genre" value={newBook.genre} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="description">Détails :</label>
          <textarea id="description" name="description" value={newBook.description} onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label htmlFor="cover">Image :</label>
          <input type="file" id="cover" name="cover" onChange={(e) => handleInputChange({ target: { name: 'cover', value: e.target.files[0] } })} />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddBook;