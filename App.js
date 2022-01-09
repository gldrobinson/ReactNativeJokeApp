import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CustomJokeScreen from "./src/screens/CustomJokeScreen";
import JokesListScreen from "./src/screens/JokesListScreen";
import { Provider } from "react-redux";
import store from "./src/state/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Jokes App",
              headerStyle: { backgroundColor: "#45526C" },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Custom"
            component={CustomJokeScreen}
            options={{
              title: "Custom Joke",
              headerStyle: { backgroundColor: "#45526C" },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="JokesList"
            component={JokesListScreen}
            options={{
              title: "Never Ending Jokes",
              headerStyle: { backgroundColor: "#45526C" },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
