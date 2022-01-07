import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomJokeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Custom Joke Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CustomJokeScreen;
