import { Alert } from "react-native";

const showJokeAlert = (joke) => {
  Alert.alert("", joke, [{ text: "OK" }]);
};

export default showJokeAlert;
