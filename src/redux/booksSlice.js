// redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'theme',
  initialState: {
    bgColor: 'gray', // Valeur initiale du thème
  },
  reducers: {
    toggleTheme: (state) => {
      state.bgColor = state.bgColor === 'gray' ? '#FFFFFF' : 'gray'; // Changer la couleur de fond
    },
  },
});

export const { toggleTheme } = bookSlice.actions;
export default bookSlice.reducer;
