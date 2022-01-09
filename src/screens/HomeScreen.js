import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getRandomJoke } from "../api/apiRequest";
import { useSelector, useDispatch } from "react-redux";
import { setRandomJoke } from "../state/actions";
import showJokeAlert from "../components/alert";

const HomeScreen = ({ navigation }) => {
  const { randomJoke } = useSelector((state) => state.random);
  const dispatch = useDispatch();

  // set initial joke when page first renders.
  useEffect(() => {
    requestJoke();
  }, []);

  console.log(randomJoke);

  const showJoke = () => {
    showJokeAlert(randomJoke);
    requestJoke();
  };

  const requestJoke = () => {
    getRandomJoke()
      .then((joke) => {
        dispatch(setRandomJoke(joke));
      })
      .catch((err) => {
        const errorMessage = "Oops, something went wrong. Please try again!";
        dispatch(setRandomJoke(errorMessage));
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => showJoke()}>
          <Text style={styles.buttonText}>RANDOM JOKE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Custom")}
        >
          <Text style={styles.buttonText}>TEXT INPUT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("JokesList")}
        >
          <Text style={styles.buttonText}>NEVER ENDING JOKES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F8F5F1",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 60,
    alignItems: "center",
    margin: 50,
  },
  button: {
    padding: 20,
    backgroundColor: "#5AA897",
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
    color: "white",
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HomeScreen;
