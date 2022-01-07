import axios from "axios";

export const getRandomJoke = () => {
  return axios
    .get("http://api.icndb.com/jokes/random?exluse=explicit")
    .then((res) => {
      return res.data.value.joke;
    });
};
