import React from "react";
import { StyleSheet, Text, View } from "react-native";

const JokesListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Jokes list Page</Text>
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
