import React, { useEffect } from "react";
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
  const dispatch = useDispatch();

  // resets firstName and lastName state when page rerenders.
  useEffect(() => {
    dispatch(setFirstName(""));
    dispatch(setLastName(""));
  }, []);

  // set initial joke when firstName / lastName changes
  useEffect(() => {
    firstName;
    requestCustomJoke();
  }, [firstName, lastName]);

  const onSearch = () => {
    let alertMessage;
    if (!firstName && !lastName) {
      alertMessage = "Please enter first and last name.";
    } else if (!firstName) {
      alertMessage = "Please enter first name.";
    } else if (!lastName) {
      alertMessage = "Please enter last name.";
    } else {
      alertMessage = customJoke;
      requestCustomJoke();
    }
    showJokeAlert(alertMessage);
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
      <Text style={styles.intoText}>
        Enter first name and last name for your custom joke!
      </Text>
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
    backgroundColor: "#F8F5F1",
  },
  intoText: {
    padding: 20,
    fontSize: 18,
  },
  textInputContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "flex-start",
  },
  textHint: {
    margin: 12,
    fontSize: 16,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    backgroundColor: "#5AA897",
    width: 100,
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
    fontSize: 16,
  },
});

export default CustomJokeScreen;
