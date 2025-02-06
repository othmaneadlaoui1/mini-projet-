// src/redux/slices/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [], // Liste des livres
  selectedBook: null, // Livre sélectionné
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload; // Définir la liste des livres
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload; // Définir le livre sélectionné
    },
    addBook: (state, action) => {
      state.books.push(action.payload); // Ajouter un livre
    },
    addComment: (state, action) => {
      const { bookId, comment } = action.payload;
      const book = state.books.find((b) => b.id === bookId);
      if (book) {
        book.comments.push(comment); // Ajouter un commentaire
      }
    },
  },
});

export const { setBooks, setSelectedBook, addBook, addComment } = booksSlice.actions;
export default booksSlice.reducer;