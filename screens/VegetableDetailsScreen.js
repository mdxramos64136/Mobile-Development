import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import vegetables from '../vegetables';
import { useFavorites } from './FavoritesContext'; 
import { Ionicons } from '@expo/vector-icons'; 


export default function VegetableDetailsScreen({ route, navigation }) {
  const { vegetableKey } = route.params;
  const { favorites, toggleFavorite } = useFavorites();
  const vegetable = vegetables[vegetableKey];
  const isFavorite = favorites[vegetableKey];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{vegetable.name}</Text>
      <Image
        source={{ uri: vegetable.img_url }}
        style={styles.image}
      />
      <Text style={styles.origin}>Origin: {vegetable.origin}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(vegetableKey)} style={styles.favoriteButton}>
        <Ionicons
          name={isFavorite ? 'star' : 'star-outline'}
          size={32}
          color={isFavorite ? 'gold' : 'grey'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
  },
  origin: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  favoriteButton: {
    marginBottom: 10,
  },
  backButton: {
    padding: 10,
  },
});
