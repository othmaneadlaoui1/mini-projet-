// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookSlice from '../redux/booksSlice'; // On va créer ce fichier plus tard

export const store = configureStore({
  reducer: {
    theme: bookSlice, // Le reducer pour l'état du thème
  },
});
export default store; 