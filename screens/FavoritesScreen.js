import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import FavoriteRecipe from "../components/FavoriteRecipe/FavoriteRecipe";
const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipes</Text>
      <FlatList
        data={favorites}
        numColumns={2}
        renderItem={({ item }) => {
          return <FavoriteRecipe recipe={item} />;
        }}
        keyExtractor={(item) => item.idMeal}
        style={styles.recipeList}
        columnWrapperStyle={styles.recipeListColumnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    gap: 20,
    padding:10
  },
  heading: {
    fontWeight: "600",
    fontSize: 20,
  },
  recipeList: {
    gap: 18,
  },
  recipeListColumnWrapper: {
    justifyContent: "space-between",
    gap: 12,
  },
});

export default FavoritesScreen;
