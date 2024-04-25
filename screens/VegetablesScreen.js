import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import vegetables from "../vegetables";
import { useFavorites } from './FavoritesContext';

export default function VegetablesScreen({ navigation }) {
  const [showFavorites, setShowFavorites] = React.useState(false);
  const { favorites, toggleFavorite } = useFavorites();

  const filteredVegetables = Object.keys(vegetables).filter(
    (key) => !showFavorites || favorites[key]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>m_davidxavierramos Final</Text>
      <TouchableOpacity onPress={() => setShowFavorites(!showFavorites)} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>{showFavorites ? "Show All" : "Show Favorites"}</Text>
      </TouchableOpacity>
      <Text style={styles.subHeader}>{showFavorites ? "Favorites Only" : "All Vegetables"}</Text>
      <ScrollView style={styles.scrollView}>
        {filteredVegetables.length > 0 ? (
          filteredVegetables.map((key) => (
            <TouchableOpacity
              key={key}
              onPress={() =>
                navigation.navigate("VegetableDetails", {
                  vegetableKey: key,
                })
              }
              style={styles.vegetableItem}
            >
              <Image
                source={{ uri: vegetables[key].img_url }}
                style={styles.image}
              />
              <Text style={styles.vegetableName}>{vegetables[key].name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.emptyList}>List is Empty</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffcc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
  },
  vegetableItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  vegetableName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  emptyList: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toggleButton: {
    backgroundColor: 'navy',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10,
  },
  toggleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
