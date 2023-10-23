import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import recipesSlice from "./recipesSlice";
import favoritesSlice from "./favoriteSlice";
export default configureStore({
  reducer: {
    categories: categoriesSlice,
    recipes: recipesSlice,
    favorites: favoritesSlice,
  },
});
