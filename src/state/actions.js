export const SET_RANDOM_JOKE = "SET_RANDOM_JOKE";

export const setRandomJoke = (joke) => (dispatch) => {
  dispatch({
    type: SET_RANDOM_JOKE,
    payload: joke,
  });
};
