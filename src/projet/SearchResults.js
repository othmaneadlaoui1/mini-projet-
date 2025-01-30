import React from "react";

const SearchResults = ({ results, searchTerm }) => {
  return (
    <div className="search-results">
      <h2>Résultats de recherche pour : "{searchTerm}"</h2>
      <div className="books-list">
        {results.length > 0 ? (
          results.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.cover} alt={book.title} />
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
          ))
        ) : (
          <p>Aucun livre trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;