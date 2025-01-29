import React from 'react';
import './ajouter.css'; 

const Ajouter = () => {
    return (
        <div className="container">
            <form className="ajouter">
                <h1>Ajouter Votre Livre</h1>
                
                <input type="text" placeholder="Nom de livre" required />
                <input type="text" placeholder="Auteur du livre" required />
                <input type="text" placeholder="Genre" required />
                <label htmlFor="document">Image:</label>
                <input type="file" id="document" required />
                <label htmlFor="document">document:</label>
                <input type="file"/>
               
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default Ajouter;