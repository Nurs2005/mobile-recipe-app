import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const existingRecipe = state.find(
        (recipe) => recipe.idMeal === action.payload.idMeal
      );
      if (!existingRecipe) {
        state.push(action.payload);
        AsyncStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFromFavorites: (state, action) => {
      const filteredState = state.filter(
        (recipe) => recipe.idMeal !== action.payload.idMeal
      );
      state.length = 0;
      state.push(...filteredState);
      AsyncStorage.setItem("favorites", JSON.stringify(state));
    },
    setFavoritesFromAsyncStorage: (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  setFavoritesFromAsyncStorage,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;

export const loadFavoritesFromAsyncStorage = () => {
  return async (dispatch) => {
    try {
      const favoritesJson = await AsyncStorage.getItem("favorites");
      if (favoritesJson) {
        const favorites = JSON.parse(favoritesJson);
        dispatch(setFavoritesFromAsyncStorage(favorites));
      }
    } catch (error) {
      console.error("Ошибка при чтении из AsyncStorage: ", error);
    }
  };
};
