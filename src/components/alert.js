import { Alert } from "react-native";

const showJokeAlert = (title, joke) => {
  Alert.alert(title, joke, [{ text: "OK" }]);
};

export default showJokeAlert;
