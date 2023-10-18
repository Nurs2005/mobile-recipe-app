import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../store/favoriteSlice.js';
const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const removeFromFavorite = (recipe) => {
    dispatch(removeFromFavorites(recipe));
  };

  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
      <View>
        {favorites.map((recipe) => (
          <View key={recipe.id}>
            <Text>{recipe.strMeal}</Text>
            <Button title="Remove" onPress={() => removeFromFavorite(recipe)} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
