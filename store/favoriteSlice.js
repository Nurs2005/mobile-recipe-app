import { createSlice } from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
        if(!state.favorites.find((el)=>el.idMeal === action.payload.idMeal)){
          state.favorites = [...state.favorites,action.payload]
        }
    },
    removeFromFavorites: (state, action) => {
      return state.filter((recipe) => recipe.idMeal !== action.payload.idMeal);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
