import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getCustomJoke } from "../api/apiRequest";
import showJokeAlert from "../components/alert";
import { setCustomJoke, setFirstName, setLastName } from "../state/actions";

const CustomJokeScreen = () => {
  const { customJoke, firstName, lastName } = useSelector(
    (state) => state.custom
  );

  console.log(customJoke);
  // set initial joke when firstName / lastName changes
  useEffect(() => {
    requestCustomJoke();
  }, [firstName, lastName]);

  const dispatch = useDispatch();

  const onSearch = () => {
    showJokeAlert(customJoke);
    requestCustomJoke();
  };

  const requestCustomJoke = () => {
    getCustomJoke(firstName, lastName)
      .then((joke) => {
        dispatch(setCustomJoke(joke));
      })
      .catch((err) => {
        const errorMessage = "Oops, something went wrong. Please try again!";
        dispatch(setCustomJoke(errorMessage));
      });
  };

  const handleFirstNameInput = (input) => {
    dispatch(setFirstName(input));
  };

  const handleLastNameInput = (input) => {
    dispatch(setLastName(input));
  };

  return (
    <View style={styles.container}>
      <Text>Custom Joke Page</Text>
      <View style={styles.textInputContainer}>
        <View style={styles.textInput}>
          <Text style={styles.textHint}>Enter first name: </Text>
          <TextInput style={styles.input} onChangeText={handleFirstNameInput} />
        </View>
        <View style={styles.textInput}>
          <Text style={styles.textHint}>Enter last name: </Text>
          <TextInput style={styles.input} onChangeText={handleLastNameInput} />
        </View>
        <TouchableOpacity style={styles.button} onPress={onSearch}>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textInputContainer: {
    flex: 1,
    paddingTop: 100,
    margin: 50,
    justifyContent: "flex-start",
  },
  textHint: {
    margin: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#4682b4",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    color: "white",
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomJokeScreen;
