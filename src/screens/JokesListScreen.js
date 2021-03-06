import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getMultipleJokes } from "../api/apiRequest";
import { useSelector, useDispatch } from "react-redux";
import { setMultipleJokes, resetMultipleJokes } from "../state/actions";

const JokesListScreen = () => {
  const { multipleJokes } = useSelector((state) => state.multiple);
  const dispatch = useDispatch();

  // resets multipleJokes to empty array and sets multipleJokes on page render.
  useEffect(() => {
    dispatch(resetMultipleJokes());
    requestMultipleJokes();
  }, []);

  const requestMultipleJokes = () => {
    getMultipleJokes()
      .then((jokes) => {
        dispatch(setMultipleJokes(jokes));
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const renderLoading = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#5AA897" />
        <Text style={styles.textLoading}>Fetching more jokes!</Text>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.listText}>
          Oops, something went wrong. Please try again!
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={multipleJokes}
        renderItem={({ item }) => (
          <View style={styles.textContainer}>
            <Text style={styles.listText}>{item.joke}</Text>
          </View>
        )}
        onEndReachedThreshold={0.25}
        onEndReached={requestMultipleJokes}
        ListFooterComponent={renderLoading}
        ListEmptyComponent={renderEmpty}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F8F5F1",
  },
  flatList: {
    padding: 10,
  },
  listText: {
    fontSize: 18,
    padding: 10,
  },
  textContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#45526C",
    margin: 5,
  },
  textLoading: {
    textAlign: "center",
  },
  loading: {
    padding: 20,
  },
});

export default JokesListScreen;
