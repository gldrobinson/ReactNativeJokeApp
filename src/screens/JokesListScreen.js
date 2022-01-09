import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getMultipleJokes } from "../api/apiRequest";
import { useSelector, useDispatch } from "react-redux";
import { setMultipleJokes } from "../state/actions";

const JokesListScreen = () => {
  const { multipleJokes } = useSelector((state) => state.multiple);
  const dispatch = useDispatch();

  useEffect(() => {
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
        <ActivityIndicator size="large" color="blue" />
        <Text style={styles.textLoading}>Fetching more jokes!</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Jokes list Page</Text>
      <FlatList
        style={styles.flatList}
        data={multipleJokes}
        renderItem={({ item }) => (
          <Text style={styles.listText}>{item.id + "-->" + item.joke}</Text>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={requestMultipleJokes}
        ListFooterComponent={renderLoading}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  flatList: {
    padding: 10,
  },
  listText: {
    fontSize: 18,
    padding: 10,
  },
  textLoading: {
    textAlign: "center",
  },
  loading: {
    padding: 20,
  },
});

export default JokesListScreen;
