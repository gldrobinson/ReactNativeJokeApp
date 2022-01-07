import axios from "axios";

export const getRandomJoke = () => {
  return axios
    .get("http://api.icndb.com/jokes/random?exlude=explicit")
    .then((res) => {
      return res.data.value.joke;
    });
};
