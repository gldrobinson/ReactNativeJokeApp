import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getMultipleJokes } from "../api/apiRequest";
import { useSelector, useDispatch } from "react-redux";
import { setMultipleJokes } from "../state/actions";

const JokesListScreen = () => {
  const { multipleJokes } = useSelector((state) => state.multiple);
  const dispatch = useDispatch();

  useEffect(() => {
    getMultipleJokes()
      .then((jokes) => {
        dispatch(setMultipleJokes(jokes));
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  console.log(multipleJokes);

  return (
    <View style={styles.container}>
      <Text>Jokes list Page</Text>
      <FlatList
        data={multipleJokes}
        renderItem={({ item }) => <Text>{item.joke}</Text>}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default JokesListScreen;
