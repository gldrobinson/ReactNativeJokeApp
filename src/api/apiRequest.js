import axios from "axios";

export const getRandomJoke = () => {
  return axios
    .get("http://api.icndb.com/jokes/random?exlude=explicit")
    .then((res) => {
      return res.data.value.joke;
    });
};

export const getCustomJoke = (firstName, lastName) => {
  return axios
    .get(
      `http://api.icndb.com/jokes/random?exlude=explicit&firstName=${firstName}&lastName=${lastName}`
    )
    .then((res) => {
      return res.data.value.joke;
    });
};
