import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VegetablesScreen from "./screens/VegetablesScreen";
import VegetableDetailsScreen from "./screens/VegetableDetailsScreen";
import { FavoritesProvider } from "./screens/FavoritesContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Vegetables">
          <Stack.Screen
            name="Vegetables"
            component={VegetablesScreen}
          />
          <Stack.Screen
            name="VegetableDetails"
            component={VegetableDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
