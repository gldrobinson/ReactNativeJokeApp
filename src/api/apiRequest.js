import axios from "axios";

export const getRandomJoke = () => {
  return axios
    .get("http://api.icndb.com/jokes/random?exclude=explicit")
    .then((res) => {
      return res.data.value.joke;
    });
};

export const getCustomJoke = (firstName, lastName) => {
  return axios
    .get(
      `http://api.icndb.com/jokes/random?exclude=explicit&firstName=${firstName}&lastName=${lastName}`
    )
    .then((res) => {
      return res.data.value.joke;
    });
};

export const getMultipleJokes = () => {
  return axios
    .get("http://api.icndb.com/jokes/random/10?exclude=explicit")
    .then((res) => {
      return res.data.value;
    });
};
